var React = require('react');
var Message = require('./message');

var ContextChat = React.createClass({

render:function(){
 console.log(this.props.messages);
 return (
  <div className="context-chat">
   {this.props.messages.map((message,index) => {
    return (<Message {...message} />);
   })}
 </div>);
}
});

module.exports = ContextChat;
