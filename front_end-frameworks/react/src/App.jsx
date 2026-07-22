import Header from "./components/Header.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Features from "./sections/Features.jsx";
import Insights from "./sections/Insights.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Features />
        <Insights />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
