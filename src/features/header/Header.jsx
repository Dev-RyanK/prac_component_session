import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StContainer className="text-focus-in">
      <div>My Todo List</div>
      <div>React</div>
    </StContainer>
  );
};

export default Header;

const StContainer = styled.div`
  border: 1px solid #ffddc1;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin-bottom: 24px;
`;
