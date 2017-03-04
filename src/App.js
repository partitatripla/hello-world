/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import Login from './user/Login';
import BottomMenu from './BottomMenu';

const styles = {
  container: {
    textAlign: 'center',
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isLoggedIn: false,
      user: null,
    };
  }

  doLogout = () => {
    this.setState({
        isLoggedIn: false,
      //open: false,
    });
  }

  doLogin = () => {
      console.log('a'+this.refs.login.state.isLoggedIn);
//    this.setState({
//        isLoggedIn: true,
      //open: true,
//    });
  }

  gotoRegistration = () => {
      console.log('registrati');
  }
  
  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    if (this.state.isLoggedIn) {
        return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <div style={styles.container}>        
            <AppBar title="Enjoy" />

            <Dialog
              open={this.state.open}
              title="Super Secret Password"
              actions={standardActions}
              onRequestClose={this.handleRequestClose}
            >
              1-2-3-4-5
            </Dialog>
            <h1>Material-UI</h1>
            <h2>example project</h2>
            <RaisedButton
              label="LogOut"
              secondary={true}
              onTouchTap={this.doLogout}
            />
            <BottomMenu />
          </div>

        </MuiThemeProvider>
      );
    } else {
        return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <div style={styles.container}>        
            <AppBar title="Enjoy" icon="" />
            <Login login={() => this.doLogin.bind(this)} ref="login" />
            
            <RaisedButton
              label="Resgistrati"
              secondary={true}
              onTouchTap={this.gotoRegistration}
            />
          </div>

        </MuiThemeProvider>
      );
    }
    
  }
}

export default Main;