var React = require('react');
var mui = require('material-ui'),
    AppBar = mui.AppBar, TextField = mui.TextField,
    ThemeManager = new mui.Styles.ThemeManager();

//ThemeManager.setTheme(ThemeManager.types.DARK);

var Chat = React.createClass({
 handleClick:function(event){
  console.log(event);
 },
 childContextTypes : { muiTheme: React.PropTypes.object },
 getChildContext: function() { return { muiTheme: ThemeManager.getCurrentTheme() }; },
 componetDidMount:function(){
  console.log(this.props);
 },
 render : function(){
  return(
   <div className="chat">
   <AppBar
     title="Title"
     iconClassNameRight="mui docs-icon-navigation-expand-more" className="chat-app-bar-up" />
   <AppBar className="chat-app-bar-down" />
    <div id="contextChat" className="context-chat"></div>
     <TextField className="input" onKeyPress={this.handleClick} />
   </div>
  );
 }
});

module.exports = Chat;
