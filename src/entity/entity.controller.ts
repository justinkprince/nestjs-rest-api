import { Controller, Get, Param, Query } from '@nestjs/common';
import { EntityService } from './entity.service';
import { Entity } from './entity.interface';

@Controller('entity')
export class EntityController {
  constructor(private entityService: EntityService) {}

  @Get()
  findAll(@Query() params): Entity[] {
    return this.entityService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Entity {
    return this.entityService.findOne(id);
  }
}
