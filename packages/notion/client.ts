import { Client } from '@notionhq/client';

import {
  AvaiableElectionsReturn,
  CreateResultPage,
} from '@packages/entities/notion';
import { createResultPageFromTemplate } from '@packages/notion/templates';
import { extractPagesFromQuery } from '@packages/notion/utils';

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
