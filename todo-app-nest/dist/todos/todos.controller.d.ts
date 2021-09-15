import { TodosService } from './todos.service';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';
export declare class TodosController {
    private readonly todoService;
    constructor(todoService: TodosService);
    findOne(id: string): Todo;
    findAll(): Todo[];
    createTodo(newTodo: CreateTodoDto): void;
    updateTodo(id: string, todo: CreateTodoDto): import("@nestjs/common").NotFoundException | {
        updateTodo: number;
        todo: Todo;
    };
    deleteTodo(id: string): {
        deletedTodos: number;
        nbTodos: number;
    };
}
