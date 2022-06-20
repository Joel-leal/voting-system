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

  const pageParams = req.body;
  const pageConfig = {
    ...req.query,
    ...pageParams,
  } as CreateResultPage;

  const pageId = await postElectionResult(pageConfig);

  res.status(200).json({ message: 'created', pageId: pageId });
}
