import { randMovie } from '@ngneat/falso';
import { Entity } from 'src/entity/entity.interface';
import { EntityStatus } from 'src/entity/entity-status.enum';
import { randomEnum } from 'src/utils';

const movies = randMovie({ length: 900 });
let idCounter = 100;

export const entities = movies.map((movie): Entity => ({
  id: '' + idCounter++,
  title: movie,
  status: randomEnum(EntityStatus),
}));
