var React = require('react');

var Channel = React.createClass({
 componentDidMount:function(){
  console.log('channel');
  console.log(this.props);
 },
 render:function(){
    return (<div>channel</div>);
 }
});

module.exports = Channel;
