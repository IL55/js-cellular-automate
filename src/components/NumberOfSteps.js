'use strict';

var React = require('react/addons');
var NewStepsNumberActionCreators = require('../actions/NewStepsNumberActionCreators');

require('styles/NumberOfSteps.less');

var NumberOfSteps = React.createClass({
  handleChange: function(event) {
    NewStepsNumberActionCreators.newStepsNumber(event.target.value);
  },

  render: function () {
    return (
        <span className="NumberOfSteps">
          Steps:<input
                  type="number"
                  value={this.props.numberOfSteps}
                  onChange={this.handleChange} />
        </span>
      );
  }
});

module.exports = NumberOfSteps;
