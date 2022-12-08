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

// [
//   { id: 0, title: "리액트", comment: "리액트를 배워봅시다", isDone: false },
// ];

const todos = (state = initialState, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case ADD_TODO: {
      return { ...state, todoList: [...state.todoList, action.payload] };
    }
    case DELETE_TODO: {
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
      };
    }
    case TOGGLESTATUS_TODO: {
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          // console.log("action.payload: ", action.payload);
          // console.log("-----------------------");
          // console.log("todo.id: ", todo.id);

          if (todo.id === action.payload) {
            // console.log({ ...todo });
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return todo;
          }
        }),
      };
    }

    case GET_TODO_BY_ID:
      return {
        ...state,
        detail: state.todoList.find((todo) => {
          return todo.id === action.payload;
        }),
      };

    default:
      return state;
  }
};

export default todos;
