import { getAvaiableElections } from '@packages/notion';

import type { NextApiResponse } from 'next';

export default async function handler(res: NextApiResponse) {
  const results = await getAvaiableElections();
  res.status(200).json(results);
}
