import * as React from "react";
import styled from "styled-components/macro";

import NewPostForm, { StyledInput } from "./components/NewPostForm";

import "./App.css";

function App() {
  return (
    <PageWrapper>
      <PostItemHeader>My Posts</PostItemHeader>
      <NewPostForm />
      <StyledInput placeholder="Search posts..." />
      <PostItemWrapper>
        {/* Posts go here */}
      </PostItemWrapper>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PostItemHeader = styled.h1`
  font-size: 56px;
  text-align: center;
`;

const PostItemWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
`;

export default App;
