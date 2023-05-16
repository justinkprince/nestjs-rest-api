import { Entity } from "src/entity/entity.interface";
import { Status } from "src/entity/entity-status.enum";

export const entities: Entity[] = [
  {
    id: '123',
    title: 'Frozen',
    status: Status.Active
  },
  {
    id: '234',
    title: 'Frozen II',
    status: Status.Upcoming
  },
  {
    id: '345',
    title: 'Up',
    status: Status.Active
  },
  {
    id: '456',
    title: 'Down',
    status: Status.Expired
  },
  {
    id: '567',
    title: 'Home',
    status: Status.Upcoming
  },
  {
    id: '678',
    title: 'Frozen',
    status: Status.Active
  },
];