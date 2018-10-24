"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var todos = [
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
        return { todos: todos };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=data.service.js.map