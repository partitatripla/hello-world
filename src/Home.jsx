import React, {Component} from 'react';
import DocumentTitle from 'react-document-title';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import FlatButton from 'material-ui/FlatButton';

class Home extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isLoggedIn: false,
      user: null,
    };
    
    if (! this.isLoggedIn) {
        //self.location = '/login';
    }
  }
  
  gotoLogin = () => {
    self.location='./login'
  }
  
  render() {
      const coords = {
    lat: 46.061937,
    lng: 12.080394
};

const params = {v: '3.exp', key: 'YOUR_API_KEY'};
  
//  onMapCreated = (map) => {
//    map.setOptions({
//      disableDefaultUI: true
//    });
//  }
//
//  onDragEnd = (e) => {
//    console.log('onDragEnd', e);
//  }
//
//  onCloseClick = () => {
//    console.log('onCloseClick');
//  }
//
//  onClick = (e) => {
//    console.log('onClick', e);
//  }

  return (
        <DocumentTitle title={'Enjoy'}>
            <div>
           <Gmaps
        width={'100%'}
        height={'300px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={12}
        loadingMessage={'Be happy'}
        params={params}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'Hello, React :)'}
          onCloseClick={this.onCloseClick} />
        <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={500}
          onClick={this.onClick} />
      </Gmaps>
           
        <FlatButton label="Vai al login" secondary={true} onTouchTap={this.gotoLogin} />   
        </div>
        </DocumentTitle>
    );
  }
}

export default Home;