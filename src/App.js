import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/Home.page';
import ProjectPage from './pages/ProjectPage/Project.page';

function App() {
  return (
  <Router>
      <div className='App'>
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/project' component={ProjectPage} />
        </Switch>
      </div>
  </Router>
  );
}

export default App;
