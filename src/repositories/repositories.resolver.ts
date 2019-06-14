import { Resolver, Args, Query } from '@nestjs/graphql';
import fetch from 'node-fetch';
import { BASE_URL } from '../constants/constans.module';

@Resolver('Repositories')
export class RepositoriesResolver {
    private baseUrl: string = BASE_URL;

    @Query()
    async repositories(
        @Args('login')
        login: string,
    ) {
         const response = await fetch(`${this.baseUrl}/users/${login}/repos`);
         return await response.json();
    }
}
