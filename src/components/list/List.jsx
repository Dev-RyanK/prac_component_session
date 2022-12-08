import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../../redux/modules/todos";
import { getTodoById } from "../../redux/modules/todos";
import { Link, useNavigate } from "react-router-dom";

const List = () => {
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos.todoList);
  // console.log(todos);
  // console.log("::::::::::::");
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const onToggleStatusTodo = (id) => {
    // console.log(id);
    dispatch(toggleStatusTodo(id));
  };

  const handleNavigate = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/${id}`);
    dispatch(getTodoById(id));
  };

  return (
    <ListContainer>
      <div>
        <h2>Working..🔥</h2>
      </div>

      <ListWrapper>
        {todos.map((todo) => {
          // console.log(!todo.isDone);
          if (!todo.isDone) {
            const { title, comment, id } = todo;
            return (
              <ListBox key={`main-willCard-${id}`}>
                <a
                  href={`/${todo.id}`}
                  onClick={(e) => handleNavigate(e, id)}
                  key={todo.id}
                >
                  <div>상세보기</div>
                </a>

                <div>
                  <h2>{title}</h2>
                  <div>{comment}</div>
                </div>
                <ButtonContainer>
                  <StButton
                    borderColor="#ef5350"
                    onClick={() => deleteHandler(id)}
                  >
                    삭제하기
                  </StButton>
                  <StButton
                    borderColor="#26a69a"
                    onClick={() => onToggleStatusTodo(todo.id)}
                  >
                    {todo.isDone ? "취소" : "완료"}
                  </StButton>
                </ButtonContainer>
              </ListBox>
            );
          } else {
            return null;
          }
        })}
      </ListWrapper>

      <div>
        <h2>Done..😀</h2>
      </div>

      <ListWrapper>
        {todos.map((todo) => {
          if (todo.isDone) {
            // console.log(todo);
            const { title, comment, id } = todo;
            return (
              <ListBox key={`main-doneCard-${id}`}>
                <a
                  href="#none"
                  onClick={(e) => handleNavigate(e, id)}
                  key={todo.id}
                >
                  <div>상세보기</div>
                </a>
                <div>
                  <h2>{title}</h2>
                  <div>{comment}</div>
                </div>
                <ButtonContainer>
                  <StButton
                    borderColor="#ef5350"
                    onClick={() => {
                      deleteHandler(id);
                    }}
                  >
                    삭제하기
                  </StButton>
                  <StButton
                    borderColor="#26a69a"
                    onClick={() => onToggleStatusTodo(todo.id)}
                  >
                    {todo.isDone ? "취소" : "완료"}
                  </StButton>
                </ButtonContainer>
              </ListBox>
            );
          } else {
            return null;
          }
        })}
      </ListWrapper>
    </ListContainer>
  );
};
export default List;

const ListContainer = styled.div`
  padding: 12px 0;
`;
const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
const ListBox = styled.div`
  width: 240px;
  border: 2px solid #ff8a65;
  border-radius: 12px;
  padding: 10px 20px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px;
  gap: 12px;
`;
const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  border-radius: 12px;
`;
