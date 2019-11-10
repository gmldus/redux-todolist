import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'


const TodoList = ({ todos, onRemove }) => (
    <ul>
        
        {todos.map(todo =>
            <Todo
                key={todo.id}
                todo={todo}
                /*text={todo.text}
                completed={false}*/
                onReove={onRemove}
            />
        )}
    </ul>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    
    toggleTodo: PropTypes.func.isRequired
};

export default TodoList
