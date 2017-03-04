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
    selectedIndex: 0,
  };

  doLogin = () => {
    alert();  
  }
  
  render() {
    return (
        <div>
            <TextField
              hintText="Hint Text"
            /><br />
            <br />
            <TextField
              hintText="The hint text can be as long as you want, it will wrap."
            />
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


