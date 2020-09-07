import React from 'react';
import Header from './Components/Header';
import HelloWorld from './Components/HelloWorld';
import Footer from './Components/Footer';
import CounterExample from './Components/CounterExample';

function App() {
  return (
    <div>
      <Header />
      <HelloWorld name="Seth" />
      {/* <CounterExample /> */}
      <Footer />
    </div>
  );
}

export default App;
