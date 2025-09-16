import { lazy } from "react";
import About from "../components/About";
import MiddleBlockContent from "../content/MiddleBlockContent.json";

import MissionContent from "../content/MissionContent.json";
import ProductContent from "../content/ProductContent.json";
import ContactContent from "../content/ContactContent.json";
import CEO from "../components/CEO";
import Footer from "../components/Footer";
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
