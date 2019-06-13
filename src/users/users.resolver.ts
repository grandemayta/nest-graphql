import { Resolver, Query } from '@nestjs/graphql';
import fetch from 'node-fetch';

@Resolver('Users')
export class UsersResolver {
    @Query()
    async users() {
         const response = await fetch('https://api.github.com/users');
         return await response.json();
    }
}
