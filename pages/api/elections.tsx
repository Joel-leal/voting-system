import { getAvaiableElections } from '@packages/notionApi';

import type { NextApiResponse } from 'next';

export default async function handler(res: NextApiResponse) {
  const results = await getAvaiableElections();
  res.status(200).json(results);
}
