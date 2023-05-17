import { Filter } from "src/types/filter.interface";
import { Entity } from "./entity.interface";

export class EntityFilter implements Filter<Entity> {
  apply(entities: Entity[], filters: any): Entity[] {
    return entities.filter((entity: Entity) => {
      const matches = [];
  
      for (const [key, value] of Object.entries(filters)) {
        if (key in entity) {
          if (Array.isArray(value)) {
            matches.push(value.includes(entity[key]));
          } else {
            matches.push(entity[key] === value);
          }
        }
      }
  
      return !matches.includes(false);
    });
  };
}
