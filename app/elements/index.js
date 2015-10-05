var React = require('react/addons');
var Map = require('./map');
var Panel = require('./panel');
var Chat = require('./chat');
var io = require('socket.io-client');

var Index = React.createClass({
 getInitialState:function(){
  return {
   polygones:[],
   chats:[],
   messages:{},
   socket:null
  };
 },
 handleChat:function(event,opts,act){
  console.log(opts);
  this.state.messages[opts.properties.ID_NIL] = [];
  this.setState({messages:this.state.messages});
  this.setState({chats:this.state.chats.concat([opts])});
 },
 handleCloseChat:function(event,ID){
  console.log(ID);
  this.setState({chats:this.state.chats.filter((v, i) => v.properties.ID_NIL != ID)});
 },
 handleSubmit:function(index,msg){
  console.log(index,msg);
  this.state.messages[index].push({text:msg,time: new Date(),who:'me'});
  this.setState({messages:this.state.messages});
  this.state.socket.emit('send_msg',{text:msg,time: new Date(),channel:index},function(err){
    console.error(err);
  });
  return true;
 },
 componentWillMount: function(){
  console.log('wrerer');
 },
 componentWillUnmount: function(){
  console.log('wrerer');
 },
 componentDidMount:function(){
  var socket = io();
  var self = this;
  this.setState({socket:socket});
  socket.emit('new_channel','hello world',function(err){
   console.log(err);
  });
  socket.on('recv_msg',function(msg){
   console.log('recv_msg',msg);
   if(msg.channel){
    self.state.messages[msg.channel].push(msg);
    self.setState({messages:self.state.messages});

   }
  })
  console.log(this.state);
 },
 render:function(){
  var polygones = this.state;
  return(
   <div className="map-container">
      <Map className="map" source="/nbh" handleChat={this.handleChat}/>
      <div className="chats">
      {this.state.chats.map((chat,index) => {
       var messages = this.state.messages[chat.properties.ID_NIL];
       console.log(messages);

        return (
         <Chat key={chat.properties.ID_NIL} {...chat} handleCloseChat={this.handleCloseChat} messages={messages} handleSubmit={this.handleSubmit}/>
        )
      })}
     </div>
  </div>
  )
 }
});

module.exports = Index;
