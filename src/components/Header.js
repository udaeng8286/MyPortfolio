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
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0px 4px 16px gray;
  padding: 4px 20px 4px 20px;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.div`
  display: flex;
  color: black;
  font-size: 32px;
  font-weight: bold;
  align-items: center;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  color: black;
  font-size: 20px;
  background-color: transparent;
  border: none;
  margin: 0 10px;
`;
