export const CHANGE_INPUT = 'CHANGE_INPUT';

let nextTodoId = 0;
export const changeInput = input => ({ type: CHANGE_INPUT, payload: input });
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
});
export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
});