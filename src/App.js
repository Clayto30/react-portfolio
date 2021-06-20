import React from 'react';
import Nav from './components/Nav'
import Footer from './components/Footer';
import ContentContainer from './components/ContentContainer';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <ContentContainer />
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;