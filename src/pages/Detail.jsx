import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Todo from "./Todo";

// render prop
// 2. 화면 뷰

const Detail = () => {
  const navigate = useNavigate();

  return (
    <StDetailContainer>
      <DetailBox>
        <Todo>
          {(todo) => {
            return (
              <>
                {todo ? (
                  <>
                    <DetailHeader>
                      <div>ID : {todo.id}</div>
                      <StButton
                        borderColor="#cb9b8c"
                        onClick={() => {
                          navigate("/");
                        }}
                      >
                        이전으로
                      </StButton>
                    </DetailHeader>
                    <DetailTitle>{todo.title}</DetailTitle>
                    <DetailComment>{todo.comment}</DetailComment>
                  </>
                ) : (
                  <>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                      }}
                    >
                      Todo가 없어요...
                    </div>
                    <StButton
                      borderColor="#cb9b8c"
                      onClick={() => {
                        navigate("/");
                      }}
                    >
                      이전으로
                    </StButton>
                  </>
                )}
              </>
            );
          }}
        </Todo>
      </DetailBox>
    </StDetailContainer>
  );
};

export default Detail;

const StDetailContainer = styled.div`
  border: 1px solid #ffccbc;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const DetailBox = styled.div`
  width: 500px;
  height: 300px;
  border: 1px solid #ffccbc;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const DetailHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  align-items: center;
`;
const DetailTitle = styled.h1`
  padding: 0 24px;
`;

const DetailComment = styled.main`
  padding: 0 24px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  border-radius: 12px;
`;
