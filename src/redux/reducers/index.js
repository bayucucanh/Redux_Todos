import { FETCH_TODOS_SUCCES, ADD_TODO } from "../types";
const initialState = {
  todos: []
}

const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_SUCCES:
      return {
        ...state,
        todos: action.payload
      }  
    case ADD_TODO: 
    return {
      ...state,
      todos: [...state.todos, action.payload]
    }
    default:
      return state;
  }
}

export default Reducers