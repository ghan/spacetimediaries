import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Listen from './pages/Listen';
import Support from './pages/Support';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

export default function BasicExample() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Listen">
          <Listen />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Subscribe />
      <Footer />
    </Router>
  );
}
