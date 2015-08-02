'use strict';

var React = require('react/addons');

var AutomateActions = require('../actions/AutomateActions');

require('styles/AutomatRuleView.less');

var AutomatRuleView = React.createClass({
  onMyClick: function() {
    AutomateActions.changeRule(this.props.ruleName);
  },

  render: function () {
    return (
        <td onClick={this.onMyClick} className="AutomatRuleView">
          <div>
            {this.props.ruleName}
          </div>
          <div>
            {this.props.ruleResult}
          </div>
        </td>
      );
  }
});

module.exports = AutomatRuleView;
