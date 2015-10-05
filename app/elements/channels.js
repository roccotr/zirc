var React = require('react');
var Channel = require('./channel');
var mui = require('material-ui'),
 List = mui.List, Paper = mui.Paper, ThemeManager = new mui.Styles.ThemeManager();

var Channels = React.createClass({
 childContextTypes : { muiTheme: React.PropTypes.object },
  getChildContext: function() { return { muiTheme: ThemeManager.getCurrentTheme() } },
 componentDidMount:function(){
  console.log('channels');
  console.log(this.props);
 },
 handleClick:function(channel,event){
  console.log(event);
  console.log(channel);
  this.props.handleChat(event,channel);
 },
 render:function(){
  return (
  <Paper zDepth={1} id="channels" className="channels">
  <List subheader="Channels">
   {this.props.polygones.map((channel,index) => {
    return (<Channel {...channel} onClick={this.handleClick.bind(this,channel)}/>);
   })}
  </List>
 </Paper>
);
 }
});

module.exports = Channels;
