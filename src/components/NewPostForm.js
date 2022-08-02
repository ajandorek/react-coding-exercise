import * as React from "react";
import styled from "styled-components/macro";

function NewPostForm() {
  return (
    <NewPostFormWrapper>
      <InputWrapper>
        <StyledLabel>Title</StyledLabel>
        <StyledInput />
      </InputWrapper>
      <InputWrapper>
        <StyledLabel>Body</StyledLabel>
        <StyledTextArea />
      </InputWrapper>
      <StyledButton type="submit">Submit</StyledButton>
    </NewPostFormWrapper>
  );
}

const NewPostFormWrapper = styled.form`
  width: 250px;
  padding: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 5px #808080;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0px;
`;

const StyledInput = styled.input`
  padding: 0 5px;
  height: 30px; 
  border-radius: 5px;
  border: 1px solid black;
`;

const StyledTextArea = styled.textarea`
  height: 90px;
  border-radius: 5px;
  padding: 5px;
  border: 1px solid black;
  resize: none;
`;

const StyledButton = styled.button`
  width: 100%;
  border-radius: 5px;
  background-color: dodgerblue;
  border: none;
  color: white;
  height: 40px;
  cursor: pointer;
  margin-top: 5px;
`;

const StyledLabel = styled.label`
  padding: 5px 0px;
`;

export default NewPostForm;
