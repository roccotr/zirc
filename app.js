var React = require('react');
var App = require('./app/elements/index');
var injectTapEventPlugin = require("react-tap-event-plugin");

window.React = React;

injectTapEventPlugin();

React.render(
  <App />,
  document.getElementById('main')
);
