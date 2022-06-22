import { Client } from '@notionhq/client';

import {
  CreateResultPage,
  GetAvaiableElectionsResponse,
  PartyData,
} from '@packages/entities/notion';
import {
  extractPagesFromQuery,
  extractCandidateDatabaseId,
} from '@packages/notion/utils';
import { createResultPageFromTemplate } from '@packages/notion/templates';

const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_API_KEY,
});

export async function getAvaiableElections(
  databaseId: string,
): Promise<GetAvaiableElectionsResponse> {
  const { results, next_cursor } = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Status',
      select: {
        equals: 'Pronta para aplicação',
      },
    },
  });
  const electionPages = extractPagesFromQuery(results);

  return {
    next_cursor,
    results: electionPages,
    message: `${electionPages.length} pages found`,
  };
}

export const getElectionPage = async (pageId: string) => {
  const { results } = await notion.blocks.children.list({ block_id: pageId });
  const candidateDatabaseId = extractCandidateDatabaseId(results);
  const candidateData = await _getPartyData(candidateDatabaseId);

  return candidateData;
};

export const postElectionResult = async (pageConfig: CreateResultPage) => {
  const newPage = createResultPageFromTemplate(pageConfig);
  const result = await notion.pages.create(newPage);

  return result.id;
};

const _getPartyData = async (
  candidateDatabaseId: string,
): Promise<PartyData[]> => {
  const parties = [];
  const { results } = await notion.databases.query({
    database_id: candidateDatabaseId,
  });
  const extractedData = extractPagesFromQuery(results);

  for (let party of extractedData) {
    const [candidateImage, viceCandidateImage] = await _getCandidateImages(
      party.electionId,
    );
    parties.push({
      id: party?.electionId,
      code: party?.code,
      name: party?.electionName,
      slug: party?.partySlug,
      members: {
        candidate: {
          name: party?.candidateName,
          image: candidateImage,
        },
        viceCandidate: {
          name: party?.viceCandidateName,
          image: viceCandidateImage,
        },
      },
    } as PartyData);
  }

  return parties;
};

const _getCandidateImages = async (partieId: string): Promise<string[]> => {
  const partieImages = [];
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
