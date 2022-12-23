import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';

function App() {
    const URL = ""
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/projects" element={<Projects URL={URL} />} />
            <Route path="/about" element={<About URL={URL} />} />
        </Routes>
        <Footer />
     
    </div>
  );
}

export default App;
