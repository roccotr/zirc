var React = require('react');

var mui = require('material-ui'),
Paper = mui.Paper, ThemeManager = new mui.Styles.ThemeManager();


var Search = React.createClass({
 childContextTypes : { muiTheme: React.PropTypes.object },
  getChildContext: function() { return { muiTheme: ThemeManager.getCurrentTheme() } },
 componentDidMount:function(){
  console.log('search');
  /*var map = this.props.mapHolderRef.getMap();
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(this.getDOMNode().children[0]);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);*/
 },
 render: function(){
  return (<Paper id="searchbox-container" zDepth={1} className="searchbox-container"><input id="searchbox" className="searchbox" type="text" placeholder="Search Box" /></Paper>);
 }
});

module.exports = Search;
