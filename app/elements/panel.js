var React = require('react');

var Search = require('./search');
var Channels = require('./channels');

var Panel = React.createClass({

 componentDidMount: function(){
   console.log('panel');
   console.log(this.props);
 },
render:function(){
 var {...mapHolderRef} = this.props;
 return (
   <div id="panelMap">
    <Search {...mapHolderRef} />
    <Channels />
   </div>
   );
}
});

module.exports = Panel;
