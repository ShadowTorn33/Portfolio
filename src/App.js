import About from "./Components/About";
import ContactForm from "./Components/ContactForm";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";
import Technologies from "./Components/Technologies";

function App() {
  return (
    <div>
        <NavBar />
        <Home />
        <About />
        <Technologies />
        <Projects />
        <ContactForm />
    </div>
  );
} 

export default App;
