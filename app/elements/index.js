var React = require('react/addons');
var Map = require('./map');
var Panel = require('./panel');
var Chat = require('./chat');

var Index = React.createClass({
 componentWillMount: function(){
  console.log('wrerer');
 },
 componentDidMount:function(){
  console.log('qwewew');
 },
 render:function(){
  return(
   <div className="map-container">
      <Map className="map" source="/nbh"/>
      <Chat />
  </div>
  )
 }
});

module.exports = Index;
