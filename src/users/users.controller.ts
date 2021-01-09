import { Controller, Post, Body, Get, Param, Patch } from "@nestjs/common";
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
        @Body('admin') userAdmin: boolean,
    ) {
        const generateId = this.userService.insertUser(
            userFirstname,
            userlastname,
            userEmail,
            userPassword,
            userAdmin,
            )
        return { id: generateId };
    }
    @Get()
    getAllUsers() {
        return this.userService.getUsers();
    }
    @Get(':id')
    getUser(@Param('id') userId: string) {
        return this.userService.getUserbyId(userId)
    }

    @Patch(':id')
    updateUser(
        @Param('id') userId: string,
        @Body('firstName') userFirstname: string,
        @Body('lastName') userlastname: string,
        @Body('email') userEmail: string,
        @Body('password') userPassword: string,
        @Body('admin') userAdmin: boolean,
        )
        {
            this.userService.updateUser(userId, userFirstname, userlastname, userEmail, userPassword, userAdmin)
        }
}