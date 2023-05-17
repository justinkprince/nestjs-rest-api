import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntityController } from './entity/entity.controller';
import { EntityService } from './entity/entity.service';
import { EntityFilter } from './entity/entity-filter.service';
import { EntityPaginator } from './entity/entity-paginator.service';

@Module({
  imports: [],
  controllers: [AppController, EntityController],
  providers: [AppService, EntityService, EntityFilter, EntityPaginator],
})
export class AppModule {}
