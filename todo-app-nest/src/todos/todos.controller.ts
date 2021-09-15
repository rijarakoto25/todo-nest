import { Body, Controller, Get, Post, Param, Patch, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todoService: TodosService) {
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // console.log('id', id)
    return this.todoService.findOne(id);
  }

  @Get()
  findAll(): Todo[] {
    return this.todoService.findAll();
  }

  @Post()
  createTodo(@Body() newTodo: CreateTodoDto) {
    this.todoService.create(newTodo);
    //console.log('newTodo', newTodo)
  }

  @Patch(':id')
  updateTodo(@Param('id') id: string, @Body() todo: CreateTodoDto) {
    return this.todoService.update(id, todo);
  }

  @Delete(':id')
  deleteTodo(@Param(':id') id: string) {
    return this.todoService.delete(id);
  }

}
