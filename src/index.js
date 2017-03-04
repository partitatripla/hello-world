import React from 'react';
import ReactDOM from 'react-dom';
import Main from './App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
ReactDOM.render(
  <Main />,
  document.getElementById('root')
);