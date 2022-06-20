import { Client } from '@notionhq/client';

import { createResultPage } from '@packages/notion/templates/result-page';
import { CreateResultPage } from '@packages/entities/notion';

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

  return { next_cursor, results };
};

export const postElectionResult = async (pageConfig: CreateResultPage) => {
  const newPage = createResultPage({ ...pageConfig });

  // TODO(Frattezi): The typing here is correct, but since the notion client do not
  // export it's types we cannot avoid the type error below.
  //
  // Error: Property 'page_id' is missing in type.
  // Depends on notion-client-sdk issue 280 https://github.com/makenotion/notion-sdk-js/issues/280
  // @ts-ignore
  const result = await notion.pages.create(newPage);
  return result.id;
};
