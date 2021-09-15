"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosService = void 0;
const common_1 = require("@nestjs/common");
let TodosService = class TodosService {
    constructor() {
        this.todos = [
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
    }
    findOne(id) {
        return this.todos.find(todo => todo.id === Number(id));
    }
    findAll() {
        return this.todos;
    }
    create(todo) {
        this.todos = [...this.todos, todo];
    }
    update(id, todo) {
        const todoToUpdate = this.todos.find(t => t.id === +id);
        if (!todoToUpdate) {
            return new common_1.NotFoundException('did you find this todo ?');
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
    delete(id) {
        const nbOfTodosBeforeDelete = this.todos.length;
        this.todos = [...this.todos.filter(t => t.id !== +id)];
        if (this.todos.length > nbOfTodosBeforeDelete) {
            return { deletedTodos: 1, nbTodos: this.todos.length };
        }
        else {
            return { deletedTodos: 0, nbTodos: this.todos.length };
        }
    }
};
TodosService = __decorate([
    common_1.Injectable()
], TodosService);
exports.TodosService = TodosService;
//# sourceMappingURL=todos.service.js.map