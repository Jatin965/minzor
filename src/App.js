import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Team from "./pages/Team";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/portfolio">
          <Portfolio />
        </Route>

        <Route path="/services">
          <Services />
        </Route>

        <Route path="/team">
          <Team />
        </Route>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
