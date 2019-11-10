const initialState = {
  input: '',
  todos: []
};
const todos = (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE_INPUT':
        return {
          ...state,
          input: action.payload
        };

      case 'ADD_TODO':
        return {
          ...state,
          todos: state.todos.concat({ 
            id: action.id,
            ...action.payload,
            completed: false
          })
        };
      case 'REMOVE_TODO':
        return {
          ...state,
          todos: state.todos.filter(
            todo => todo.id !== action.payload
          )
      };
      case 'TOGGLE_TODO':
        return {
          ...state,
          todos: state.todos.map(
            todo => todo.id === action.payload
            ? {
              ...todo,
              completed: !todo.completed
            }
            : todo
          )
      };
      
      default:
        return state
    }
  }
  
  export default todos
