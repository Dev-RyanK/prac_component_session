import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTodoById } from "../redux/modules/todos";

const GetTodo = ({ children }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.detail);

  useEffect(() => {
    dispatch(getTodoById(id));
  }, [dispatch, id]);

  // render prop (children render prop)
  return children(todo);
};

export default GetTodo;
