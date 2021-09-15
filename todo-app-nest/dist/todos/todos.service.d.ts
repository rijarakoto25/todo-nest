import { NotFoundException } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';
export declare class TodosService {
    todos: Todo[];
    findOne(id: string): Todo;
    findAll(): Todo[];
    create(todo: CreateTodoDto): void;
    update(id: string, todo: Todo): NotFoundException | {
        updateTodo: number;
        todo: Todo;
    };
    delete(id: string): {
        deletedTodos: number;
        nbTodos: number;
    };
}
