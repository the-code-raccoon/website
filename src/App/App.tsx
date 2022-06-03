import { Title, Page, SubHeader, Section } from "./App-style";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Header from "./Header";
import FeaturedWork from "./FeaturedWork";
import Contact from "./Contact";
import Footer from "./Footer";
import Theme from "./Theme";
import useDarkMode from "./useDarkMode";

import { Element } from "react-scroll";

import "./App.css";

export default function App() {
  const [themeMode, toggleThemeMode] = useDarkMode();

  return (
    <Theme themeMode={themeMode}>
      <Page>
        <Header toggleThemeMode={toggleThemeMode} />
        <Container fluid="lg">
          <Section>
            <Row className="justify-content-center">
              <Col className="my-5">
                <Title>
                  Hi, I'm <span>Francesca Ho</span> and I'm a
                  <span> Full-Stack Web Developer</span>
                </Title>
              </Col>
            </Row>
            <Row>
              <Col className="mt-5">
                <SubHeader>
                  I'm currently looking for work and open for projects!
                </SubHeader>
              </Col>
            </Row>
          </Section>
          <Section>
            <Row>
              <SubHeader>Featured Works</SubHeader>
            </Row>
            <Row>
              <Element name="featured-works">
                <FeaturedWork />
              </Element>
            </Row>
          </Section>
          <Section>
            <Row>
              <SubHeader>About</SubHeader>
            </Row>
            <Row>
              <Element name="about">fdsfdsfksd</Element>
            </Row>
          </Section>
          <Row>
            <SubHeader>Contact Me!</SubHeader>
          </Row>
          <Row>
            <Element name="contact">
              <Contact />
            </Element>
          </Row>
        </Container>
        <Footer />
      </Page>
    </Theme>
  );
}
