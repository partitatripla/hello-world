import React from 'react';
import { render } from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Main from './App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css';

import { Component } from 'react';

// Pages
import Home from './Home';
import Login from './user/Login';
import Registration from './user/Registration';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render(
  <Router history={browserHistory}>
    <Route component={Main}>
      <Route path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/registration" component={Registration}/>
    </Route>

  </Router>,
  document.getElementById('root')
);