var React = require('react');
var mui = require('material-ui'),
    AppBar = mui.AppBar
    , IconButton = mui.IconButton
    , TextField = mui.TextField
    , ThemeManager = new mui.Styles.ThemeManager();
var NavigationClose = require('material-ui/lib/svg-icons/navigation/close');
var injectTapEventPlugin = require("react-tap-event-plugin");
var ContextChat = require('./context-chat');

//ThemeManager.setTheme(ThemeManager.types.DARK);


var Chat = React.createClass({
 getInitialState:function(){
  return {
   text:''
  }
 },
 _close:function(e){
  this.props.handleCloseChat(e,this.props.properties.ID_NIL);
 },
 handleSubmit:function(e){
  e.preventDefault();
  this.props.handleSubmit(this.props.properties.ID_NIL,this.state.text);
  this.setState({text:''});
 },
 handleChange:function(e){
  this.setState({text:e.target.value});
  console.log(e);
 },
 childContextTypes : { muiTheme: React.PropTypes.object },
 getChildContext: function() { return { muiTheme: ThemeManager.getCurrentTheme() }; },
 componetDidMount:function(){
  console.log(this.props);
 },

 render : function(){
  injectTapEventPlugin();
  var messages = this.props.messages;
  return(
   <div className="chat">
   <AppBar
     title={this.props.properties.NIL}
     showMenuIconButton={false}
     className="chat-app-bar-up" ><a onClick={this._close}><IconButton><NavigationClose /></IconButton></a></AppBar>
   <AppBar className="chat-app-bar-down" showMenuIconButton={false} />
    <ContextChat key="contextChat" messages={messages} />
    <form onSubmit={this.handleSubmit}>
     <TextField className="input-chat" onChange={this.handleChange} value={this.state.text} />
     </form>
   </div>
  );
 }
});

module.exports = Chat;
