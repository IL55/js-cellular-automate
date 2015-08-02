'use strict';

var React = require('react/addons');
var AutomateActions = require('../actions/AutomateActions');

require('styles/NumberOfSteps.less');

var NumberOfSteps = React.createClass({
  handleChange: function(event) {
    AutomateActions.newStepsNumber(event.target.value);
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
