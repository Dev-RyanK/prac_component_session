import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTodoById } from "../redux/modules/todos";

// 리덕스로부터 할 일만 하는거.
const Todo = ({ children }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.detail);

  useEffect(() => {
    dispatch(getTodoById(id));
  }, [dispatch, id]);

  return children(todo);
};

export default Todo;
