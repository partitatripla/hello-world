import React, {Component} from 'react';
import DocumentTitle from 'react-document-title';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class Registration extends Component {
    
  gotoLogin = () => {
    self.location='./login'
  }
    
  render() {
    return (
      <DocumentTitle title={'Registration'}>
        <div>
          <TextField type="text" hintText="Nome" /><br/>
          <TextField type="text" hintText="Cognome" /><br/>
          <TextField type="text" hintText="Email" /><br/>
          <TextField type="text" hintText="Telefono" /><br/>
          
          <RaisedButton label="Invia i dati" secondary={false} onTouchTap={this.gotoRegistration} /> 
          <p>
            <FlatButton label="Annulla" secondary={true} onTouchTap={this.gotoLogin} />   
          </p>  
        </div>
      </DocumentTitle>
    );
  }
}

export default Registration;
