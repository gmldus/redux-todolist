export const CHANGE_INPUT='CHANGE_INPUT';
export const ADD_TODO='ADD_TODO';
export const TOGGLE_TODO='TOGGLE_TODO';
export const REMOVE_TODO='REMOVE_TODO';

let nextTodoId = 0;
export const changeInput = input => ({ 
    type: 'CHANGE_INPUT',
    payload:input 
});

export const addTodo = text => ({
    type: 'ADD_TODO',
    payload:{
        id: nextTodoId++,
        text
    }
});
export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    payload:id
});
export const removeTodo = id => ({
    type: 'REMOVE_TODO',
    payload:id
});