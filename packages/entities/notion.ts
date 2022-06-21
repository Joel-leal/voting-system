export interface AvaiableElectionsReturn {
  next_cursor?: string | null;
  results?: AvaiableElections[];
  message: string;
}

interface AvaiableElections {
  electionId: string;
  electionName: string;
}

export interface CreateElectionResultResponse {
  message: string;
  id?: string;
}

export interface CreateResultPage {
  databaseId: string;
  electionName: string;
  electionId: string;
  winnerParty: Party;
  looserParty: Party;
}

interface Party {
  name: string;
  members: string[];
  votes: string;
}