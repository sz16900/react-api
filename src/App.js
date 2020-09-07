import React from 'react';
import Header from './Components/Header';
import HelloWorld from './Components/HelloWorld';
import CounterExample from './Components/CounterExample';

function App() {
  return (
    <div>
      <Header />
      <HelloWorld name="Seth" />
      {/* <CounterExample /> */}
    </div>
  );
}

export default App;
