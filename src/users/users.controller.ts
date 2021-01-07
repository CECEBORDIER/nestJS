import { Controller, Post, Body } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("users")

export class UsersController {
    constructor(private userService: UsersService) { }
    @Post()
    addUser(
        @Body('firstName') userFirstname: string,
        @Body('lastName') userlastname: string,
        @Body('email') userEmail: string,
        @Body('password') userPassword: string,
    ) {
        const generateId = this.userService.insertUser(
            userFirstname,
            userlastname,
            userEmail,
            userPassword)
            return {id: generateId};
    };
    
}