import React, { Component } from 'react';
import { Map, Marker } from 'google-maps-react'

class GMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
        markers: [{
          position: {
            lat: 25.0112183,
            lng: 121.52067570000001,
          },
          key: `Taiwan`,
          defaultAnimation: 2,
        }],
      };
  }

//componentDidMount() {
//  this.map = new google.maps.Map(this.refs.map, {    
//    zoom: 16
//  });
//}
  onMarkerClick(props, marker, e) {
      console.log(marker);
      console.log(props);
      console.log(e);
  }
  
  render() {
    var center = {lat: 46.061933, lng: 12.080554};
      
    let google = this.props.google;
  
    return (
      <Map
        height={'300px'}
        google={google}
        zoom={14}
        initialCenter={center}
        ref="googleMap">
        <Marker
          onClick={this.onMarkerClick}
          name={'Your position'}
          position={{lat: 46.061933, lng: 12.080554}}
          text={'A'}
        ></Marker>
      </Map>
    );
  }
}

export default GMap;