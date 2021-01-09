import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from './users.model';


@Injectable()

export class UsersService {
    users: User[] = [];

    insertUser(
        firstName: string,
        lastName: string,
        email: string,
        password: string,
    ) {
        const UserID = Math.random().toString();
        const newUser = new User(UserID, firstName, lastName, email, password);
        this.users.push(newUser);
        return UserID;
    }
    getUsers(){
        return [...this.users];
    }
    getUserbyId(userId: string){
        const User = this.users.find((userPlatform)=> userPlatform.id == userId);
        if (!User) {
            throw new NotFoundException('Could not find this user. ');
        }
        return {...User};
    }
    updateUser(firstName: string,
        lastName: string,
        email: string,
        password: string)
        {

        }
        private findUser(id: string):[User, number] {
            const userIndex= this.users.findIndex((user => user.id == id)
            const user = this.users
        }
    }