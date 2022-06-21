import { Client } from '@notionhq/client';

import { extractPagesFromQuery } from '@packages/utils/notion';
import { AvaiableElectionsReturn } from '@packages/entities/notion';

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
