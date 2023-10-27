import React, { Component } from "react";
import { Map, GoogleApiWrapper, Polygon } from "google-maps-react";

const mapStyles = {
  width: "20%",
  height: "20%",
};

export class MapContainer extends Component {
  render() {
    const triangleCoords = [
      { lat: 25.774, lng: -80.19 },
      { lat: 18.466, lng: -66.118 },
      { lat: 32.321, lng: -64.757 },
      { lat: 25.774, lng: -80.19 },
    ];
    return (
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        // initialCenter={{
        //   lat: -1.2884,
        //   lng: 36.8233,
        // }}
      >
        <Polygon
          paths={triangleCoords}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2}
          fillColor="#0000FF"
          fillOpacity={0.35}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAj6OqwYslF4lsj42LwklFVzkSis_GHBeM",
})(MapContainer);
