import { Pagination } from 'src/types/pagination.interface';
import { Entity } from './entity.interface';
import { Paginator } from 'src/types/paginator.interface';

export class EntityPaginator implements Paginator<Entity> {
  apply(entities: Entity[], pagination: Pagination): Entity[] {
    return entities.slice(
      (pagination.page - 1) * pagination.numPerPage,
      pagination.page * pagination.numPerPage,
    );
  }
}
