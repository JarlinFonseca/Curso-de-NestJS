import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UserDTO, UserToProjectDto, UserUpdateDTO } from '../dto/user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('register')
    public async registerUser(@Body() body: UserDTO){
      return await this.usersService.createUser(body);
    }

    @Get('all')
    public async findAllUsers(){
      return await this.usersService.findUsers();
    }

    @Get(':id')
    public async findUserById(@Param('id') id: string){
      return await this.usersService.findUserById(id);
    }

    @Post('add-to-project')
    public async addToProject(@Body() body: UserToProjectDto){
      return await this.usersService.relationToProject(body);
    }

    @Put('edit/:id')
    public async updateUser(@Param('id') id: string, @Body() body: UserUpdateDTO){
      return await this.usersService.updateUser(body, id);
    }

    @Delete('delete/:id')
    public async deleteUser(@Param('id') id: string){
      return await this.usersService.deleteUser(id);
    }

  
}
