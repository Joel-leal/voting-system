import { postElectionResult } from '@packages/notionApi';

import type { NextApiRequest, NextApiResponse } from 'next';

type CreateResult = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CreateResult>,
) {
  if (req.method !== 'POST')
    return res.status(405).json({ message: 'Only POST requests allowed' });

  await postElectionResult({ ...req.body });
  res.status(200).json({ message: 'created' });
}
