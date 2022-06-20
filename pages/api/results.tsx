import { postElectionResult } from '@packages/notionApi';
import { CreateElectionResultResponse } from '@packages/entities/notion';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CreateElectionResultResponse>,
) {
  if (req.method !== 'POST')
    return res.status(405).json({ message: 'Only POST requests allowed' });

  const page_id = await postElectionResult({ ...req.body });
  res.status(200).json({ message: 'created', page_id: page_id });
}
