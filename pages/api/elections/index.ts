import { GetAvaiableElectionsResponse } from '@packages/entities/notion';
import { getAvaiableElections } from '@packages/notion/client';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetAvaiableElectionsResponse>,
) {
  const { databaseId } = req.query;
  if (!Array.isArray(databaseId)) {
    const results = await getAvaiableElections(databaseId);
    return res.status(200).json(results);
  }
  return res
    .status(400)
    .json({ message: 'Only one database allowed per query' });
}
