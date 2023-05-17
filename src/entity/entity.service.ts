import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Entity } from './entity.interface';
import { EntityFilter } from './entity-filter.service';
import { EntityPaginator } from './entity-paginator.service';
import { entities } from 'src/data/entities';
import { extractParams } from 'src/utils';

@Injectable()
export class EntityService {
  constructor(private entityFilter: EntityFilter, private entityPaginator: EntityPaginator) {}

  findAll(params): Entity[] {
    const { pagination, filters } = extractParams(params);
    let matchingEntities = entities;

    if (Object.keys(filters).length) {
      matchingEntities = this.entityFilter.apply(entities, filters)
    }

    return this.entityPaginator.apply(matchingEntities, pagination);
  }

  findOne(id: string): Entity {
    const entity = entities.find((entity) => entity.id === id);

    if (!entity) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    return entity;
  }
}
