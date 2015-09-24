var React = require('react/addons');
var Map = require('./map');
var Panel = require('./panel');
var Chat = require('./chat');

var Index = React.createClass({
 getInitialState:function(){
  return {
   polygones:[],
   chats:[]
  };
 },
 handleChat:function(event,opts,a){
  console.log('handle chat');
  console.log(opts);
  this.setState({chats:this.state.chats.concat([opts])});
  console.log(this.state.chats.length);
 },

 componentWillMount: function(){
  console.log('wrerer');
 },
 componentDidMount:function(){
  console.log('qwewew');
 },
 render:function(){
  var polygones = this.state;
  return(
   <div className="map-container">
      <Map className="map" source="/nbh" handleChat={this.handleChat}/>
      <div className="chats">
      {this.state.chats.map((chat,index) => {
       console.log(chat);
        return (
         <Chat key={chat.ID_NIL} {...chat}/>
        )
      })}
     </div>
  </div>
  )
 }
});

module.exports = Index;
