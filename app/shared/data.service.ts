import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Todo } from "./todo";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const todos: Todo[] = [
                {
                    id: 1,
                    title: 'Learn JavaScript',
                    completed: true
                },
                {
                    id: 2,
                    title: 'Learn Angular 2',
                    completed: false
                },
                {
                    id: 3,
                    title: 'Create an app',
                    completed: false
                }
        ];

        return { todos };
    }
}