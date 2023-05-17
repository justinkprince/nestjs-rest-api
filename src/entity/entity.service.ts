import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Entity } from './entity.interface';
import { entities } from 'src/data/entities';
import { EntityFilter } from './entity-filter.service';

@Injectable()
export class EntityService {
  constructor(private entityFilter: EntityFilter) {}

  findAll(filters): Entity[] {
    if (!Object.keys(filters).length) {
      return entities;
    }

    return this.entityFilter.apply(entities, filters);
  }

  findOne(id): Entity {
    const entity = entities.find((entity) => entity.id === id);

    if (!entity) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    return entity;
  }
}
