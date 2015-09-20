var React = require('react');

var Search = require('./search');
var Channels = require('./channels');

var Panel = React.createClass({

 componentDidMount: function(){
   console.log('panel');
   console.log(this.props);
 },
render:function(){
 var {...map} = this.props;
 return (
   <div id="panelMap" className="panel-map">
    <Search {...map} />
    <Channels {...map} />
   </div>
   );
}
});

module.exports = Panel;
