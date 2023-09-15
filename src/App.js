import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Theater from "./components/Theater";
import ThicketCounter from "./components/ThicketCounter";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/theater" element={<Theater />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thicket-counter" element={<ThicketCounter />} />
      </Routes>
    </div>
  );
};

export default App;
