import React from "react";
import styled from "styled-components";
import { addTodo } from "../../redux/modules/todos";
import { useDispatch } from "react-redux";
import Button from "../../components/button";
import { useInput } from "../../hooks/useInput";

const Form = () => {
  const dispatch = useDispatch();

  const [title, onChangeTitleHandler, setTitle] = useInput("");
  const [comment, onChangeCommentHandler, setComment] = useInput("");

  const onAddTodoHandler = (e) => {
    e.preventDefault();
    if (!title || !comment) return;

    dispatch(
      addTodo({
        id: JSON.stringify(new Date()),
        title,
        comment,
        isDone: false,
      })
    );

    // 초기화하는 기능이 필요해..
    setTitle("");
    setComment("");
  };

  return (
    <StForm onSubmit={onAddTodoHandler}>
      <StInputContainer>
        <StLabel>제목</StLabel>
        <StInput
          type="text"
          name="title"
          value={title}
          onChange={({ target: { value } }) => onChangeTitleHandler(value)}
        />

        <StLabel>내용</StLabel>
        <StInput
          type="text"
          name="comment"
          value={comment}
          onChange={({ target: { value } }) => onChangeCommentHandler(value)}
        />
      </StInputContainer>
      <Button size="big" outlined>
        추가하기
      </Button>
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
