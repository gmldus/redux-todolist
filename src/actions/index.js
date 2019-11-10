let nextTodoId = 0;
export const changeInput = input => ({ 
    type: 'CHANGE_INPUT',
    input 
});
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
});
export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
});