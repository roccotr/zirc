var React = require('react');

var Search = React.createClass({

 componentDidMount:function(){
  console.log('search');
  var map = this.props.mapHolderRef.getMap();
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(this.getDOMNode().children[0]);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
 },
 render: function(){
  return (<div id="searchbox-container" className="searchbox-container"><input id="searchbox" className="searchbox" type="text" placeholder="Search Box" /></div>);
 }
});

module.exports = Search;
