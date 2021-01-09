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
        admin: boolean
    ) {
        const UserID = Math.random().toString();
        const newUser = new User(UserID, firstName, lastName, email, password, admin);
        this.users.push(newUser);
        return UserID;
    }
    getUsers() {
        return [...this.users];
    }


    getUserbyId(userId: string) {
        const user = this.findUser(userId)[0];
        return { ...user };
    }



    updateUser(
        userId: string,
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        admin: boolean ){

        const [user, index] = this.findUser(userId);
        const updatedUser = { ...user };
        if (firstName) {
            updatedUser.firstName = firstName;
        } if (lastName) {
            updatedUser.lastName = lastName;
        } if (email) {
            updatedUser.email = email;
        } if (password) {
            updatedUser.password = password;
        }if(admin){
            updatedUser.admin= admin;
        }
        this.users[index] = updatedUser;

    };


    private findUser(id: string): [User, number] {
        const userIndex = this.users.findIndex(user => user.id == id);
        const user = this.users[userIndex];
        if (!user) {
            throw new NotFoundException('Could not find this concert.');
        }
        return [user, userIndex];
    }
}