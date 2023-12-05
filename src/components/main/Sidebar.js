import styled from "styled-components";

const Sidebar = () => {
  return (
    <Container>
      <Button>ABOUT ME</Button>
      <Button>PROJECT</Button>
      <Button>GUEST BOOK</Button>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  height: 100%;
  width: 288px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #749bc2;
`;

const Button = styled.button`
  display: flex;
  color: white;
  font-size: 28px;
  background-color: transparent;
  border: none;
  margin: 32px 0px;
`;
