import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeInput, addTodo } from '../actions/index';
import AddTodo from '../components/AddTodo';

const TodoContainer = () => {
    const dispatch = useDispatch();
    const { input, todos } = useSelector(state => state.todos, []);

    const onChangeInput = () => dispatch({ type: changeInput });
    const onInsert = () => dispatch({ type: addTodo });

    const onChange = useCallback(
    e => {
            onChangeInput(e.target.value);
            console.log(e.target.value);
        },
        [onChangeInput]
    );
    
    const onSubmit = useCallback(
    e => {
            e.preventDefault();
            onInsert(input);
            console.log(input);
            onChangeInput('');
        },
        [input, onChangeInput, onInsert]
    );

    return (
        <AddTodo
          input={input}
          todos={todos}
          onChange={onChange}
          onSubmit={onSubmit}
          
        />
      );
    };

export default TodoContainer;