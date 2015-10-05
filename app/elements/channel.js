var React = require('react');
var mui = require('material-ui'),
  Avatar = mui.Avatar,
  ListItem = mui.ListItem,
  ThemeManager = new mui.Styles.ThemeManager();

var Channel = React.createClass({
 childContextTypes : { muiTheme: React.PropTypes.object },
  getChildContext: function() { return { muiTheme: ThemeManager.getCurrentTheme() }; },
 componentDidMount:function(){
  console.log('channel');
  console.log(this.props);
 },
 render:function(){
   var channelName = this.props.properties.NIL;
    return (<ListItem onClick={this.props.onClick}
     //leftAvatar={<Avatar>{channelName[0]}</Avatar>}
     //rightIconButton={rightIconMenu}
     className="channel"
     primaryText={channelName}></ListItem>);
 }
});

module.exports = Channel;
