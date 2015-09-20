var React = require('react');
var mui = require('material-ui'),
    AppBar = mui.AppBar,
    ThemeManager = new mui.Styles.ThemeManager();

//ThemeManager.setTheme(ThemeManager.types.DARK);

var Chat = React.createClass({
 childContextTypes : { muiTheme: React.PropTypes.object },
  getChildContext: function() { return { muiTheme: ThemeManager.getCurrentTheme() } },
 render : function(){
  return(
   <AppBar
     title="Title"
     iconClassNameRight="muidocs-icon-navigation-expand-more" />
  );
 }
});

module.exports = Chat;
