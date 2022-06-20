import { postElectionResult } from '@packages/notion';
import {
  CreateElectionResultResponse,
  CreateResultPage,
} from '@packages/entities/notion';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CreateElectionResultResponse>,
) {
  if (req.method !== 'POST')
    return res.status(405).json({ message: 'Only POST requests allowed' });

  const page_params = req.body as CreateResultPage;
  const page_id = await postElectionResult(page_params);

  res.status(200).json({ message: 'created', page_id: page_id });
}
