import { Container } from "./AppStyles";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Hero />
        <Footer />
      </Container>
    </>
  );
}

export default App;
