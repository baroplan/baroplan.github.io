import { lazy } from "react";
import About from "../components/About";
import ContactContent from "../content/ContactContent.json";
const CEO = lazy(() => import("../components/CEO"));

const Contact = lazy(() => import("../components/ContactForm"));
const MiddleBlock = lazy(() => import("../components/MiddleBlock"));
const Container = lazy(() => import("../common/Container"));
const ScrollToTop = lazy(() => import("../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <About />
      <CEO />

      <Contact title={ContactContent.title} content={ContactContent.text} id="contact" />
    </Container>
  );
};

export default Home;
