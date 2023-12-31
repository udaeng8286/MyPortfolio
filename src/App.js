import "./App.css";
import styled, { createGlobalStyle } from "styled-components";
import MainPage from "./page/mainPage";
function App() {
  return (
    <>
      <GlobalStyles />
      <Body>
        <MainPage />
      </Body>
    </>
  );
}

const GlobalStyles = createGlobalStyle`
* {
  margin : 0;
  padding : 0;
  box-sizing : border-box;
  font-family: 'Roboto', sans-serif;
}
`;

const Body = styled.body`
  width: 100vw;
  height: 100vh;
`;

export default App;
