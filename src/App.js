import React from 'react';
import PrizeGallery from './components/PrizeGallery';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <PrizeGallery />
      </main>
      <Footer />
    </div>
  );
};

export default App;

