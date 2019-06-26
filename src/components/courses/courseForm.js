"use strict";

var React = require("react");
var Input = require("../common/textInput");
var SelectInput = require("../common/selectInput");

var CourseForm = React.createClass({
  propTypes: {
    course: React.PropTypes.object.isReaquired,
    authors: React.PropTypes.array.isReaquired,
    onSave: React.PropTypes.func.isReaquired,
    onChange: React.PropTypes.func.isReaquired,
    errors: React.PropTypes.object
  },

  render: function() {
    return (
      <form>
        <h1>Manage Course</h1>

        <Input
          name="title"
          label="Title"
          value={this.props.course.title}
          onChange={this.props.onChange}
          error={this.props.errors.title}
        />

        <SelectInput
          name="author"
          label="Author"
          value={this.props.course.author.id}
          options={this.props.authors}
          onChange={this.props.onChange}
        />

        <Input
          name="category"
          label="Category"
          value={this.props.course.category}
          onChange={this.props.onChange}
          error={this.props.errors.category}
        />

        <Input
          name="length"
          label="Length"
          value={this.props.course.length}
          onChange={this.props.onChange}
          error={this.props.errors.length}
        />

        <input
          type="submit"
          value="Save"
          className="btn btn-default"
          onClick={this.props.onSave}
        />
      </form>
    );
  }
});

module.exports = CourseForm;
