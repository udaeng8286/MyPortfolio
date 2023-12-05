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
  z-index: -1;
  height: 100vh;
  width: 288px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #071a16;
  /* background-color: #263a29; */
  position: sticky;
  top: 0;
  left: 0;
`;

const Button = styled.button`
  display: flex;
  color: white;
  font-size: 20px;
  background-color: transparent;
  border: none;
  margin: 32px 0px;
`;
