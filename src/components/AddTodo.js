import React from 'react';
import TodoList from './TodoList';


const AddTodo = ({ input, todos, onChange, onSubmit}) => {
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChange} value={input} placeholder='enter your todo'  />
                <button type="submit">
                    Add Todo
                </button>
            </form>
            <TodoList todos={todos} ></TodoList>
        </div>
        
    )
}

export default AddTodo;