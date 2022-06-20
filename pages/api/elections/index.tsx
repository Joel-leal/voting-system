import { getAvaiableElections } from '@packages/notion';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { databaseId } = req.query;
  const results = await getAvaiableElections(databaseId as string);
  res.status(200).json(results);
}
