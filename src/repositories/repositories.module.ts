import { Module } from '@nestjs/common';
import { RepositoriesResolver } from './repositories.resolver';

@Module({
  providers: [RepositoriesResolver],
})
export class RepositoriesModule {}
