var React = require('react');


var Message = React.createClass({
 render: function(){
  console.log(this.props);
  return (<div className="message">{this.props.text}</div>);
 }
})

module.exports = Message;
