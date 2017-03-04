import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class Login extends Component {
  state = {
    isLoggedIn: false,
  };

  doLogin = () => {
    this.state.isLoggedIn = true;
    console.log(this.state.isLoggedIn);
  }
  

  
  
  render() {
    return (
        <div>
            <TextField
              type="email"
              hintText="Email"
            /><br />
            <br />
            <TextField
              type="password"
              hintText="Password"
            />
            <br />
            <RaisedButton
              label="Login"
              secondary={true}
              onTouchTap={this.doLogin}
            />
            
        </div>
    );
  }
}

export default Login;


