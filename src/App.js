import React from 'react';
import './App.css';

import Header from './Header/Header'
import Footer from './Footer/Footer'
import Rate from './Rate/Rate'

function App() {
  return (
    <div className="site">
      <Header/>
      <Rate/>
      <Footer/>
    </div>
  );
}

export default App;
