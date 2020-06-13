import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Home />
      <hr />
      <Navigation />
      <hr />
      <About />
      <hr />
      <Projects />
      <hr />
      <Contact />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
