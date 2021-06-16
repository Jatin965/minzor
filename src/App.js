import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core";

import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4094f2",
    },
    secondary: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: ["Comfortaa", "cursive", "Roboto", "sans-serif"].join(","),
    fontSize: 14,
    fontWeight: 400,
    fontDisplay: "swap",
    body1: {
      fontWeight: 500,
    },
    h1: {
      fontSize: "1.8rem",
    },
    h2: {
      fontSize: "1.4rem",
    },
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
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
        </main>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
