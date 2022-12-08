import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { addTodo } from "../../redux/modules/todos";
import { useDispatch } from "react-redux";

const Form = () => {
  const [todo, setTodo] = useState({
    title: "",
    comment: "",
  });
  // const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    if (!todo.title || !todo.comment) return;

    dispatch(
      addTodo({
        id: JSON.stringify(new Date()),
        ...todo,
        isDone: false,
      })
    );
    setTodo({ title: "", comment: "" });
  };

  return (
    <StForm>
      <StInputContainer>
        <StLabel>제목</StLabel>
        <StInput
          type="text"
          name="title"
          value={todo.title}
          onChange={onChangeHandler}
        />

        <StLabel>내용</StLabel>
        <StInput
          type="text"
          name="comment"
          value={todo.comment}
          onChange={onChangeHandler}
        />
      </StInputContainer>
      <StButton onClick={onClickHandler}>추가하기</StButton>
    </StForm>
  );
};

export default Form;

const StForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const StLabel = styled.label`
  font-size: 18px;
  font-weight: 600;
`;
const StInput = styled.input`
  height: 40px;
  width: 250px;
  border: 1px solid #c97b63;
  border-radius: 12px;
  padding: 0 12px;
`;
const StButton = styled.button`
  border: none;
  height: 40px;
  border-radius: 12px;
  width: 140px;
  font-weight: 600;
  background-color: #c97b63;
  color: white;
`;
