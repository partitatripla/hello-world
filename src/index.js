import React from 'react';
import { render } from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Main from './App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css';

import { Component } from 'react';

class Home extends Component {
    render(){
        return (<h1>Home Page</h1>);
    }
}

// More components
class Car extends Component {
    render(){
        return (<h1>Cars page</h1>);
    }
}

class About extends Component {
    render(){
        return (<h1>About page</h1>);
    }
}




// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render(
    <Router history={browserHistory}>
        <Route component={Main} path="app">
            <Route path="/" component={Home}/>
            <Route path="/cars" component={Car}/>
            <Route path="/about" component={About}/>
        </Route>
        
    </Router>,
    document.getElementById('root')
);