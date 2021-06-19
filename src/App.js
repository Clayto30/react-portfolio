import React from 'react';
import Nav from './components/Nav'
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Project from './components/Project';
function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Project></Project>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;