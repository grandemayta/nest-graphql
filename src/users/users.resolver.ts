import { Resolver, Query, Args } from '@nestjs/graphql';
import fetch from 'node-fetch';
import { BASE_URL } from '../constants/constans.module';

@Resolver('Users')
export class UsersResolver {
    private baseUrl: string = BASE_URL;

    @Query()
    async users() {
         const response = await fetch(`${this.baseUrl}/users`);
         return await response.json();
    }

    @Query('user')
    async user(
        @Args('login')
        login: string,
    ) {
         const response = await fetch(`${this.baseUrl}/users/${login}`);
         return await response.json();
    }
}
