import Header from "../components/Header";
import Sidebar from "../components/main/Sidebar";
import Banner from "../components/main/Banner";
import Banner2 from "../components/main/Banner2";
// import Start from "../components/Start";
import styled from "styled-components";

const MainPage = () => {
  return (
    <Container>
      <Header />
      {/* <Start /> */}
      <Section>
        <Sidebar />
        {/* <Banner /> */}
        <Banner2 />
      </Section>
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Section = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
`;
