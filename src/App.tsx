import React from 'react';
import './App.css';

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import './App.css';

import Makes from './screens/Makes/index';

//Lazy loaded the paths to reduce the bundle size and only fetch if required
//Will optimize appmperformance
const Models = React.lazy(() => import("./screens/Models/index"));
const Vehicle = React.lazy(() => import("./screens/Vehicle/index"));

function App() {
  return (
    <React.Suspense fallback={"Loading..."}>
      <Router>
        <Switch>
          <Route exact path="/" component={Makes} />
          <Route path='/model' component={Models} />
          <Route path="/vehicle" component={Vehicle} />
        </Switch>
      </Router>
  </React.Suspense>
  );
}

export default App;
