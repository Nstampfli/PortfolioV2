import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home.page';
import ProjectPage from './pages/Project.page';

// import Blur from './components/blurTop.component';

function App() {
  return (
  <Router>
      <div className='App'>
        {/* <Blur/> */}
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/project' component={ProjectPage} />
        </Switch>
      </div>
  </Router>
  );
}

export default App;
