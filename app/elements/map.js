var React = require('react');
var GoogleMap = require('react-google-maps').GoogleMap;
var Marker = require('react-google-maps').Marker;
var Panel = require('./panel');
var Polygon = require('./polygon');



var Map = React.createClass({
 getInitialState: function(){return {
  map:null,
  markers: [{
   position: {
    lng: 9.1833,
    lat: 45.4667,
   },
   key: "Taiwan",
   defaultAnimation: 2
  }],polygones:[]
 };
},
loadPolygonFromServer: function() {
  $.ajax({
    url: this.props.source,
    dataType: 'json',
    cache: false,
    success: function(data) {
      this.setState({polygones: data.result});
    }.bind(this),
    error: function(xhr, status, err) {
      console.error(this.state.url, status, err.toString());
    }.bind(this)
  });
},
 /*
 * This is called when you click on the map.
 * Go and try click now.
 */
 _handle_map_click : function (event) {
  var markers = this.state;
  markers = update(markers, {
   $push: [
    {
     position: event.latLng,
     defaultAnimation: 2,
     key: Date.now(),// Add a key property for: http://fb.me/react-warning-keys
    },
   ],
  });
  this.setState({ markers: markers });

  if (3 === markers.length) {
   this.props.toast(
    "Right click on the marker to remove it",
    "Also check the code!"
   );
  }
 },

 _handle_marker_rightclick: function(index, event) {
  /*
  * All you modify is data, and the view is driven by data.
  * This is so called data-driven-development. (And yes, it's now in
  * web front end and even with google maps API.)
  */
  var markers = this.state;
  markers = update(markers, {
   $splice: [
    [index, 1]
   ],
  });
  this.setState({ markers:markers });
 },

 componentDidMount: function(){
   this.loadPolygonFromServer();
 },
 render :function() {
  var {...polygones} = this.state;
  return (
   <GoogleMap containerProps={{
     ...this.props,
     style: {
      height: "100%",
     },
    }}
    ref="map"
    defaultZoom={12}
    defaultCenter={{lat: 45.4667, lng:  9.1833}}
    onClick={this._handle_map_click}>
    <Panel {...polygones}/>
    {this.state.markers.map((marker, index) => {
     return (
      <Marker
       {...marker}
       onRightclick={this._handle_marker_rightclick.bind(this, index)} />
     );})}
     {this.state.polygones.map((polygon, index) => {
     return (
      <Polygon {...polygon}/>
     );
    })}
   </GoogleMap>
  );
 }

});

module.exports = Map;
