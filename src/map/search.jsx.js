render() {
      var center = {lat: 46.061933, lng: 12.080554};
      
      let google = this.props.google;
  
        return (
            <div>
                <MyMap google={window.google}/>
            </div>
        );
    }
}

export default search;