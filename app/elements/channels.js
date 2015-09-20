var React = require('react');
var Channel = require('./channel');

var Channels = React.createClass({
 componentDidMount:function(){
  console.log('channels');
  console.log(this.props);
 },
 render:function(){
  return (<div id="channels" className="channels">
  <ul>
   {this.props.polygones.map((channel,index) => {
    return (<Channel />);
   })}
  </ul>
  </div>);
 }
});

module.exports = Channels;
