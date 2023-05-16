import { Controller, Get, Param, Query } from '@nestjs/common';
import { EntityService } from './entity.service';
import { Entity } from './entity.interface';

@Controller('entity')
export class EntityController {
  constructor(private entityService: EntityService) {}

  @Get()
  findAll(@Query() filters): Entity[] {
    return this.entityService.findAll(filters);
  }

  @Get(':id')
  findOne(@Param() params: any): Entity {
    return this.entityService.findOne(params.id);
  }
}
