var React = require('react');

var _ = require('underscore');

var Polygon = React.createClass({

 componentDidMount:function(){
  console.log(this.props);
  var map = this.props.mapHolderRef.getMap();
   bermudaTriangle = new google.maps.Polygon({
     paths: _.map(this.props.geometry.coordinates[0],function(coords){return{lat:parseFloat(coords[1]),lng:parseFloat(coords[0])};}),
     strokeColor: '#FF0000',
     strokeOpacity: 0.3,
     strokeWeight: 1,
     fillColor: '#FF0000',
     fillOpacity: 0.15
   });
   bermudaTriangle.setMap(map);
 },
 render:function(){
   return(<div></div>);
  }
});

module.exports = Polygon;
