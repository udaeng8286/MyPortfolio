import Header from "../components/Header";
import Sidebar from "../components/main/Sidebar";
// import Start from "../components/Start";
import styled from "styled-components";

const MainPage = () => {
  return (
    <Container>
      <Header />
      {/* <Start /> */}
      <Sidebar />
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
