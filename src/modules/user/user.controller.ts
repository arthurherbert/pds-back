<<<<<<< HEAD
import {
  Body,
  Controller,
  Delete,
  HttpCode,
  Param,
  Post,
  Get,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
=======
import { Controller, Delete, Param, Get } from '@nestjs/common';
import { UserService } from './user.service';
>>>>>>> c7b5342 (Criando rota de comentário e usuário)

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.userService.findById(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.delete(id);
  }
<<<<<<< HEAD

  @Post()
  @HttpCode(201)
  async create(@Body() createUser: CreateUserDto) {
    return this.userService.create(createUser);
  }
=======
>>>>>>> c7b5342 (Criando rota de comentário e usuário)
}
