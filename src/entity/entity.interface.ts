import { Status } from "./entity-status.enum";

export interface Entity {
  id: string;
  title: string;
  status: Status;
};
