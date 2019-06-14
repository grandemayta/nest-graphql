import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { RepositoriesModule } from './repositories/repositories.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      playground: true,
     }),
    UsersModule,
    RepositoriesModule,
  ],
})
export class AppModule {}
