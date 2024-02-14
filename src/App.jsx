import { useState } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Animal from './component/Animal';
import Animal from './animalsList'
import Bird from './component/Bird';
import About from './component/About';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="" component={Home} />
        <Route path="/animal" component={Animal} />
        <Route path="/bird" component={Bird} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;

