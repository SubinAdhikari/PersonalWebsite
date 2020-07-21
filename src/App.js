import React from 'react';
import './App.css';
import Home from './Home';
import {Route,Switch} from 'react-router-dom';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Blog from './Blog';
import ErrorPage from './ErrorPage';
import Menu from './Menu';
import MyProfile from './MyProfile';
// import NavBarMobile from './NavBarMobile';

const App = () =>{
return(
  <>
  {/* <NavBarMobile/> */}
  <div className="backgroundDiv">
<MyProfile/>
<Switch>
  <Route path="/" exact component={Home} />
  <Route path="/About"  component={About} />
  <Route path="/Portfolio"  component={Portfolio} />
  <Route path="/Contact"  component={Contact} />
  <Route path="/Blog"  component={Blog} />
  <Route  component={ErrorPage} />
</Switch>
<Menu />
</div>
  </>
);
}
export default App;