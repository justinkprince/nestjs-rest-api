import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntityController } from './entity/entity.controller';
import { EntityService } from './entity/entity.service';
import { EntityFilter } from './entity/entity-filter.service';

@Module({
  imports: [],
  controllers: [AppController, EntityController],
  providers: [AppService, EntityService, EntityFilter],
})
export class AppModule {}
