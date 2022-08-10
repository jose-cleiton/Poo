"use strict";
const todo = {
    title: 'Trash',
    description: 'Take out trash',
    completed: false,
};
console.clear();
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
const todo2 = updateTodo(todo, { completed: true });
const todo3 = {
    title: 'Trash',
    completed: false,
};
const todo4 = {
    title: 'Trash',
    completed: false,
};
