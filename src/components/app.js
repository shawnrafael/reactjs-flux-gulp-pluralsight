/*eslint-disable strict */
var React = require("react");
var Header = require("./common/header");
var Routehandler = require("react-router").RouteHandler;
$ = jQuery = require("jquery");

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <Routehandler />
        </div>
      </div>
    );
  }
});

module.exports = App;
