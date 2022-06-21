export interface Election {
  name: string;
  electionId: string;
  parties: Party[];
}

export interface CreateElectionResultResponse {
  message: string;
  pageId?: string;
}

export interface PartieData {
  id: string;
  code: string;
  name: string;
  slug: string;
  members: PartieMembers;
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
}

interface Candidate {
  name: string;
  image: string;
}
interface PartieMembers {
  candidate: Candidate;
  viceCandidate: Candidate;
}
