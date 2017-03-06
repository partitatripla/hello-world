import React, {Component} from 'react';
import DocumentTitle from 'react-document-title';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class Login extends Component {
  state = {
    isLoggedIn: false,
  };

  doLogin = () => {
    this.state.isLoggedIn = true;
    self.location = '/';
  }
  
  gotoRegistration = () => {
    self.location='./registration'
  }
  
  render() {
    return (
      <DocumentTitle title={'Log-in'}>
        <div>
          <TextField type="email" hintText="Email" />
          <br /><br />
          <TextField  type="password" hintText="Password" />
          <br />
          <RaisedButton label="Login" secondary={false} onTouchTap={this.doLogin} />
          <p>
            <FlatButton label="Registrazione" secondary={true} onTouchTap={this.gotoRegistration} />   
          </p>
        </div>  
      </DocumentTitle>
    );
  }
}

export default Login;