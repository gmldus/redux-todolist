import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeInput, addTodo, removeTodo } from '../actions/index';
import AddTodo from '../components/AddTodo';

const TodoContainer = () => {
    const dispatch = useDispatch();
    const { input, todos } = useSelector(state => state.todos, []);

    const onChangeInput = input => dispatch(changeInput(input));
    const onInsert = input => dispatch(addTodo(input));
    const onRemove = id => dispatch(removeTodo(id));

    const onChange = e => {
            onChangeInput(e.target.value);
            console.log(e.target.value);
    }
    const onSubmit = e => {
            e.preventDefault();
            onInsert(input);
            console.log(input);
            onChangeInput('');
    }

    return (
        <AddTodo
          input={input}
          todos={todos}
          onChange={onChange}
          onSubmit={onSubmit}
          onRemove={onRemove}
        />
      );
    };

export default TodoContainer;