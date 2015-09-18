var React = require('react');

var Search = React.createClass({

 componentDidMount:function(){
  console.log('search');
  console.log(this.props);
  var map = this.props.mapHolderRef.getMap();
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(this.getDOMNode());
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
 },
 render: function(){
  return (<input id="pac-input" className="controls" type="text" placeholder="Search Box" />);
 }
});

module.exports = Search;
