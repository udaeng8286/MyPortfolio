import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Logo>UDAENG</Logo>
      <Nav>
        <Button>ABOUT ME</Button>
        <Button>PROJECT</Button>
        <Button>GUEST BOOK</Button>
      </Nav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 56px; /* 화면 전체 높이를 채우도록 설정 */
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Logo = styled.div`
  color: white;
`;

const Nav = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  color: white;
`;
