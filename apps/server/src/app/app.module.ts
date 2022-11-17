import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import * as errorhandler from 'errorhandler';

@Module({})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(errorhandler()).forRoutes('/');
  }
}
