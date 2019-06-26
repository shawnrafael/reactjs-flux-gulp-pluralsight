"use strict";

var React = require("react");
var _ = require("lodash");

var SelectInput = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    options: React.PropTypes.array.isRequired,
    onChange: React.PropTypes.func.isRequired,
    value: React.PropTypes.string,
    error: React.PropTypes.string
  },

  render: function() {
    var listItem = function(Item) {
      if (this.props.value === Item.id) {
        return (
          <option key={Item.id} value={Item.id} selected="selected">
            {Item.firstName} {Item.lastName}
          </option>
        );
      }
      return (
        <option key={Item.id} value={Item.id}>
          {Item.firstName} {Item.lastName}
        </option>
      );
    };

    var wrapperClass = "form-group";

    return (
      <div className={wrapperClass}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <select
          className="form-control"
          name={this.props.name}
          onChange={this.props.onChange}
        >
          {this.props.options.map(listItem, this)}
        </select>
      </div>
    );
  }
});

module.exports = SelectInput;
