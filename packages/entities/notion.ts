export interface CreateElectionResultResponse {
  message: string;
  page_id?: string;
}
interface Party {
  name: string;
  members: string[];
}

export interface CreateResultPage {
  database_id: string;
  election_name: string;
  election_id: string;
  winner_party: Party;
  looser_party: Party;
}
