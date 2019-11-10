import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ todo,  onRemove, onToggle }) => (
    
    <li
        
        style={{
            textDecoration: todo.completed ? 'line-through' : 'none'
        }}
    >
        <span onClick={()=>onToggle(todo.id)}>{todo.text}</span>
        
        
        <button onClick={()=>onRemove(todo.id)}>삭제</button>
    </li>
    
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo