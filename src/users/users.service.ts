import { Injectable } from "@nestjs/common";
import { Users } from './users.model';


@Injectable()

export class UsersService {
    users: Users[] = [];
    insertUser(
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        password: string,) {
            const newUser = new Users (new Date().toString(), firstName, lastName, email, password );
        this.users.push(newUser);
        }
}