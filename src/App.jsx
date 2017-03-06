/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

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
      isLoggedIn: true,
      user: null,
    };       
  }

  render() {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <div style={styles.container}>        
            <AppBar title="Enjoy" showMenuIconButton={false} />
            
            {this.props.children}
            
            {(this.state.isLoggedIn) && 
                <BottomMenu />
            }
          </div>

        </MuiThemeProvider>
      );
  }
}

export default Main;