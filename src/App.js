import React from 'react';
import './App.css';
import Home from './Home';
import {BrowserRouter,Route} from 'react-router-dom';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Blog from './Blog';

const App = () =>{
return(
  <>
<div className="backgroundDiv">
<BrowserRouter>
  <Route path="/" exact component={Home} />
  <Route path="/About"  component={About} />
  <Route path="/Portfolio"  component={Portfolio} />
  <Route path="/Contact"  component={Contact} />
  <Route path="/Blog"  component={Blog} />
</BrowserRouter>
</div>
  </>
);
}
export default App;