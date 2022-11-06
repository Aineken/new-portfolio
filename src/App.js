import { Container } from "./AppStyles";
import About from "./components/About/About";
import Achievements from "./components/Achievements/Achievements";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Technoligies from "./components/Technologies/Technoligies";

function App() {
  console.log(process.env);
  return (
    <>
      <Container nopadding>
        <Header />
        <Hero />
        {/* <ContactForm /? */}
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
