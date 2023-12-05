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
  background-color: #fff; /* 배경색 흰색으로 변경 */
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1); /* 그림자 추가 */
  padding-left: 20px;
  padding-right: 20px;
`;

const Logo = styled.div`
  display: flex;
  color: black;
  font-size: 28px;
  font-weight: bold;
  /* padding-left: 16px; */
  align-items: center;
`;

const Nav = styled.div`
  display: flex;
  /* justify-content: center; */
  justify-content: space-between;
`;

const Button = styled.button`
  color: black;
  font-size: 20px;
  background-color: transparent;
  border: none; /* 테두리 없애기 */
  margin: 0 10px; /* 버튼 사이 간격 추가 */
`;
