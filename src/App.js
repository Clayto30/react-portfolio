import React from 'react';
import Nav from './components/Nav'
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Project from './components/Project';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Project></Project>
        <Contact></Contact>
        <Resume></Resume>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;