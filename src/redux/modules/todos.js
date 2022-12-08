const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLESTATUS_TODO = "TOGGLESTATUS_TODO";
const GET_TODO_BY_ID = "GET_TODO_BY_ID";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const toggleStatusTodo = (payload) => {
  return {
    type: TOGGLESTATUS_TODO,
    payload,
  };
};

export const getTodoById = (payload) => {
  return {
    type: GET_TODO_BY_ID,
    payload,
  };
};

const initialState = { todoList: [], detail: {} };

const todos = (state = initialState, { payload, type }) => {
  switch (type) {
    case ADD_TODO: {
      return { ...state, todoList: [...state.todoList, payload] };
    }

    case DELETE_TODO: {
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== payload),
      };
    }

    case TOGGLESTATUS_TODO: {
      return {
        ...state,
        todoList: state.todoList.map((todo) => toggleMap(todo, payload)),
      };
    }

    case GET_TODO_BY_ID:
      return {
        ...state,
        detail: state.todoList.find((todo) => todo.id === payload),
      };

    default:
      return state;
  }
};

const toggleMap = (todo, payload) => {
  if (todo.id === payload) {
    return {
      ...todo,
      isDone: !todo.isDone,
    };
  } else {
    return todo;
  }
};

export default todos;
