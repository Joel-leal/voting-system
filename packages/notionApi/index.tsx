import { Client } from '@notionhq/client';

import {
  createResultPage,
  ICreateResultPage,
} from '@packages/notionApi/templates/resultPage';

// Initializing a client
const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_API_KEY,
});

export const getAvaiableElections = async () => {
  const { results, next_cursor } = await notion.databases.query({
    database_id: '5377b54f64d342c38f417574f4e50789',
    filter: {
      property: 'Status',
      select: {
        equals: 'Pronta para aplicação',
      },
    },
  });

  return { next_cursor, results };
};

export const postElectionResult = async (props: ICreateResultPage) => {
  const newPage = createResultPage({ ...props });
  const result = await notion.pages.create(newPage);
  return result;
};
