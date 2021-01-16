import React from 'react';
import GlobalStyle from './styles/global';

import Header from './components/Header';
import Slider from './components/Slider';
import Products from './components/Products';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const App:React.FC = () => (
  <div className="App">
    <>
      <Header />
      <Slider />
      <Products />
      <Newsletter />
      <Footer />
      <GlobalStyle />
    </>
  </div>
);

export default App;
