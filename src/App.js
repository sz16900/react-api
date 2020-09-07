import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import HelloWorld from './Components/HelloWorld';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <HelloWorld name="Seth" />
        <Switch>
          <Route exact path="/">
            <h1 className="font-bold text-2xl">THis is the Hoome Page</h1>
          </Route>
          <Route path="/about">
            <h1 className="font-bold text-2xl">About us</h1>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
