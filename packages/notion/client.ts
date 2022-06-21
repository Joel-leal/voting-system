import { Client } from '@notionhq/client';

import {
  CreateResultPage,
  AvaiableElectionsReturn,
} from '@packages/entities/notion';
import { extractPagesFromQuery } from '@packages/notion/utils';
import { createResultPageFromTemplate } from '@packages/notion/templates';

const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_API_KEY,
});

export async function getAvaiableElections(
  databaseId: string,
): Promise<AvaiableElectionsReturn> {
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

export const postElectionResult = async (pageConfig: CreateResultPage) => {
  const newPage = createResultPageFromTemplate(pageConfig);
  const result = await notion.pages.create(newPage);

  return result.id;
};
