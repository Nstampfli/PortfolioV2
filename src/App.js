import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home.page';
import ProjectPage from './pages/Project.page';

// import Blur from './components/BlurTop.component';
import Header from './components/Header.component';
import Footer from './components/Footer.component';
function App() {
  return (
  <Router>
      <div className='App'>
        {/* <Blur/> */}
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/project' component={ProjectPage} />
        </Switch>
        <Footer/>
      </div>
  </Router>
  );
}

export default App;
