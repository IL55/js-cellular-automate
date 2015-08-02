'use strict';

var React = require('react/addons');

var AutomateActions = require('../actions/AutomateActions');

require('styles/AutomatRuleView.less');

var AutomatRuleView = React.createClass({
  onMyClick: function() {
    AutomateActions.changeRule(this.props.ruleName);
  },

  render: function () {
    var rule = this.props.ruleName.split('');
    var ruleItems = rule.map(function(ruleItem, i) {
      if (ruleItem === '0') {
        return <div className="black-rect-div" key={i}></div>;
      } else {
        return <div className="white-rect-div" key={i}></div>;
      }
    });

    var ruleResult;
    if (this.props.ruleResult === '0') {
      ruleResult = <div className="black-rect-div"></div>;
    } else {
      ruleResult = <div className="white-rect-div"></div>;
    }


    return (
        <td className="AutomatRuleView">
          <div className="text-nowrap">
              {ruleItems}
          </div>
          <div className="clickable" onClick={this.onMyClick}>
            {ruleResult}
          </div>
        </td>
      );
  }
});

module.exports = AutomatRuleView;
