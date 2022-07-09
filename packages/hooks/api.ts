import { GetAvaiableElectionsResponse } from '@packages/entities/notion';

const ELECTIONS_URL = (databaseId: string) =>
  `/api/elections?databaseId=${databaseId}`;
export const electionsApi = {
  get: async (databaseId: string) =>
    fetchData<GetAvaiableElectionsResponse>(ELECTIONS_URL(databaseId), {
      method: 'GET',
    }),
};

async function fetchData<T>(
  input: RequestInfo,
  init?: RequestInit | undefined,
): Promise<T | undefined> {
  const res = await fetch(input, {
    ...init,
    headers: {
      ...(init?.headers ?? {}),
      'Content-type': 'application/json',
    },
  });

  // validate response
  if (!res.ok) {
    console.warn(`${res.status}: ${res.statusText}`);
    return;
  }

  return await res.json();
}
