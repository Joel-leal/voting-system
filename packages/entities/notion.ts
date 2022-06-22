export interface AvaiableElectionsReturn {
  next_cursor?: string | null;
  results?: AvaiableElections[];
  message: string;
}

interface AvaiableElections {
  electionId: string;
  electionName: string;
}
