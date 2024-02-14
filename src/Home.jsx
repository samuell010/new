import { BrowserRouter as Router, Route } from 'react-router-dom';
import Animal from './component/Animal'; 
import Bird from './component/Bird'; 
import About from './component/About'; 

function App() {
  return (
    <Router>
      <div className="App">
        
        <Route path="/animals" component={Animal} />
        <Route path="/birds" component={Bird} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
