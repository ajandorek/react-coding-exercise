import * as React from "react";

import styled from "styled-components/macro";

function TodoItem({ title, body, id, userId }) {
  return (
    <StyledTodoItem>
      <StyledTodoHeader>
        <StyledTodoTitleText>{title}</StyledTodoTitleText>
        <StyledTodoHeaderItem>
          <StyledTodoHeaderItemText>User ID: {userId}</StyledTodoHeaderItemText>
          <StyledTodoHeaderItemText>#{id}</StyledTodoHeaderItemText>
        </StyledTodoHeaderItem>
      </StyledTodoHeader>
      <StyledTodoBody>{body}</StyledTodoBody>
    </StyledTodoItem>
  );
}

const StyledTodoItem = styled.div`
  width: 800px;
  height: 150px;
  border-radius: 5px;
  margin: 5px 0px;

  color: black;
  background-color: white;
  overflow: hidden;
  box-shadow: 10px 5px 5px #808080;
`;

const StyledTodoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 5px 10px;
  overflow: auto;
  color: white;
  background-color: #acacac;
`;

const StyledTodoTitleText = styled.div`
  max-width: 600px;
  font-size: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledTodoHeaderItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 140px;
`;

const StyledTodoHeaderItemText = styled.div`
  font-size: 16px;
`;

const StyledTodoBody = styled.div`
  padding: 10px;
  font-size: 16px;
`;

export default TodoItem;
