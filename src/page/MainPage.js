import React from "react";
import Header from "../components/Header";
// import Start from "../components/Start";

import styled from "styled-components";
const MainPage = () => {
  return (
    <Container>
      <Header />
      {/* <Start /> */}
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
