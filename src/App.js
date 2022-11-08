import About from "./components/About/About";
import Achievements from "./components/Achievements/Achievements";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Technoligies from "./components/Technologies/Technoligies";
import { Container } from "./styles/GlobalComponents";

function App() {
  return (
    <>
      <Container nopadding>
        <Header />
        <Hero />
        <Projects />
        <Technoligies />
        <About />
        <Achievements />
        <Footer />
      </Container>
    </>
  );
}

export default App;
