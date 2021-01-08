import { Injectable } from "@nestjs/common";
import { User } from './users.model';


@Injectable()

export class UsersService {
    users: User[] = [];

    insertUser(
        firstName: string,
        lastName: string,
        email: string,
        password: string,
    ){
        const userID = new Date().toString();
        const newUser = new User(userID, firstName, lastName, email, password);
        this.users.push(newUser);
        return userID;
    }
    getUsers(){
        return [...this.users];
    }
}