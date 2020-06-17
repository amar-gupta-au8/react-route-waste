import React from 'react';
import './App.css';
import Nav from './components/nav';
import About from './components/about.js';
import Shop from './components/shop.js';
// eslint-disable-next-line
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
      <Nav />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/shop" component={Shop} />
      </Switch>
      </div>
    </Router>
    
  );
}
const Home = () => (
  <div className="">
    <h1>Homepage</h1>
  </div>
)

export default App;
