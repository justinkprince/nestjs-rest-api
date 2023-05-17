import { EntityStatus } from "./entity-status.enum";

export interface Entity {
  id: string;
  title: string;
  status: EntityStatus;
};
