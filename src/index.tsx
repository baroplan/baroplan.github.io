import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import "antd/dist/antd.min.css";
import Router from "./router";
import styled from "styled-components";
import Header from "./components/Header";

const MainContentWrapper = styled.div`
  padding-top: 80px;
`;
const App = () => (
  <BrowserRouter>
    <Header />
    <MainContentWrapper>
      <Router />
    </MainContentWrapper>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
