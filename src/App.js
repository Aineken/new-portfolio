import { Container } from "./AppStyles";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import BackgroundAnimation from "./Components/Hero/BackgroundAnimation";
import Hero from "./Components/Hero/Hero";
import { Section } from "./styles/GlobalComponents";

function App() {
  return (
    <>
      <Container>
        <Header />

        <Section grid>
          <Hero />
          <BackgroundAnimation />
        </Section>
        {/* <Footer /> */}
      </Container>
    </>
  );
}

export default App;
