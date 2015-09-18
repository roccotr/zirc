
var React = require('react');

var CommentList = require('./comment_list');
var CommentForm = require('./comment_form');


var CommentBox = React.createClass({
  getInitialState : function(){
    return {data:[]};
  },
  loadCommentsFromServer : function(){
   $.ajax({
        url: this.props.url,
        dataType: 'json',
        cache: false,
        success: function(data) {
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
  },
  componetDidMount : function(){
   this.loadCommentsFromServer();
   setInterval(this.loadCommentsFromServer,this.props.timeout);
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
});
/*React.render(
  <CommentBox url="data.json" timeout={2000} />,
  document.getElementById('content')
);*/

module.exports = CommentBox;
