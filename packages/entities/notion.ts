export interface CreateElectionResultResponse {
  message: string;
  pageId?: string;
}
interface Party {
  name: string;
  members: string[];
}

export interface CreateResultPage {
  databaseId: string;
  electionName: string;
  electionId: string;
  winnerParty: Party;
  looserParty: Party;
}
