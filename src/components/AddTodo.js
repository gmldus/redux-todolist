import React from 'react';
import TodoList from './TodoList';


const AddTodo = ({ input, todos, onChange, onSubmit, onRemove, onToggle }) => {
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChange} value={input} placeholder='enter your todo'  />
                <button type="submit">
                    Add Todo
                </button>
            </form>
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} ></TodoList>
        </div>
        
    )
}

export default AddTodo;