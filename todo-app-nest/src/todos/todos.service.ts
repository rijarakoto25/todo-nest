import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodosService {
  todos: Todo[] = [
    {
      id: 1,
      title: 'todos app',
      description: 'Create NestJS todos app',
      done: false,
    },
    {
      id: 2,
      title: 'bread',
      description: 'Buy bread',
      done: true,
    },
    {
      id: 3,
      title: 'wine',
      description: 'Buy wine',
      done: true,
    },
  ];

  findOne(id: string) {
    return this.todos.find(todo => todo.id === Number(id));
  }

  findAll(): Todo[] {
    return this.todos;
  }

  create(todo: CreateTodoDto) {
    console.log('todo', todo)
    this.todos = [...this.todos, todo];
  }

  update(id: string, todo: Todo) {
    const todoToUpdate = this.todos.find(t => t.id === +id);
    if (!todoToUpdate) {
      return new NotFoundException('did you find this todo ?');
    }
    if (todo.hasOwnProperty('done')) {
      todoToUpdate.done = todo.done;
    }
    if (todo.title) {
      todoToUpdate.title = todo.title;
    }
    if (todo.description) {
      todoToUpdate.description = todo.description;
    }
    const updateTodos = this.todos.map(t => t.id !== +id ? t : todoToUpdate);
    this.todos = [...updateTodos];
    return { updateTodo: 1, todo: todoToUpdate };

  }

  delete(id: string) {
    const nbOfTodosBeforeDelete = this.todos.length;
    this.todos = [...this.todos.filter(t => t.id !== +id)];
    if (this.todos.length > nbOfTodosBeforeDelete) {
      return { deletedTodos: 1, nbTodos: this.todos.length };
    } else {
      return { deletedTodos: 0, nbTodos: this.todos.length };
    }

  }
}
