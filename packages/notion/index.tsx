import { Client } from '@notionhq/client';

import { CreateResultPage, PartieData } from '@packages/entities/notion';
import { createResultPage } from '@packages/notion/templates/result-page';
import { extractValues } from '@packages/utils/notion';

const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_API_KEY,
});

export const getAvaiableElections = async (databaseId: string) => {
  const { results, next_cursor } = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Status',
      select: {
        equals: 'Pronta para aplicação',
      },
    },
  });

  const electionPages = results.map((electionPage) => {
    const test = extractValues(electionPage);

    return {
      electionId: electionPage.id,
      electionName: test.Name,
    };
  });
  return { next_cursor, results: electionPages };
};

export const getElectionPage = async (pageId: string) => {
  // Get page
  const { results } = await notion.blocks.children.list({ block_id: pageId });

  // get candidate database id
  const { id: candidateDatabaseId } = results.filter(
    (block) =>
      'type' in block &&
      block.type === 'child_database' &&
      block?.child_database?.title === 'Partidos',
  )[0];

  const candidateData = await _getCandidateData(candidateDatabaseId);

  return candidateData;
};

export const postElectionResult = async (pageConfig: CreateResultPage) => {
  const newPage = createResultPage(pageConfig);

  // TODO(Frattezi): The typing here is correct, but since the notion client do not
  // export it's types we cannot avoid the type error below.
  //
  // Error: Property 'page_id' is missing in type.
  // Depends on notion-client-sdk issue 280 https://github.com/makenotion/notion-sdk-js/issues/280
  // @ts-ignore
  const result = await notion.pages.create(newPage);
  return result.id;
};

const _getCandidateData = async (
  candidateDatabaseId: string,
): Promise<PartieData[]> => {
  const parties = [];
  const { results } = await notion.databases.query({
    database_id: candidateDatabaseId,
  });

  for (let partie of results) {
    const images = await _getCandidateImages(partie.id);
    if (
      'properties' in partie &&
      'Codigo' in partie.properties &&
      partie.properties.Codigo.type === 'select' &&
      partie.properties.Codigo.select &&
      'Name' in partie.properties &&
      partie.properties.Name.type === 'title' &&
      'Sigla' in partie.properties &&
      partie.properties.Sigla.type === 'select' &&
      partie.properties.Sigla.select &&
      'Candidato' in partie.properties &&
      partie.properties.Candidato.type === 'rich_text' &&
      'Vice' in partie.properties &&
      partie.properties.Vice.type === 'rich_text'
    ) {
      parties.push({
        id: partie.id,
        code: partie?.properties.Codigo.select.name,
        name: partie?.properties.Name.title[0].plain_text,
        slug: partie?.properties.Sigla.select.name,
        members: {
          candidate: {
            name: partie?.properties.Candidato.rich_text[0].plain_text,
            image: images[0],
          },
          viceCandidate: {
            name: partie?.properties.Vice.rich_text[0].plain_text,
            image: images[1],
          },
        },
      } as PartieData);
    }
  }

  return parties;
};

const _getCandidateImages = async (partieId: string): Promise<string[]> => {
  let partieImages = [];
  const { results } = await notion.blocks.children.list({
    block_id: partieId,
  });

  const imageBlocks = results.filter(
    (block) => 'type' in block && block.type === 'image',
  );

  for (let block of imageBlocks) {
    if (
      'type' in block &&
      block?.type === 'image' &&
      block?.image?.type === 'file'
    ) {
      partieImages.push(block?.image?.file?.url);
    }
  }

  return partieImages;
};
