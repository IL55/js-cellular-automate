'use strict';

var React = require('react/addons');

var AutomateActions = require('../actions/AutomateActions');

require('styles/AutomatRuleView.less');

var AutomatRuleView = React.createClass({
  onMyClick: function() {
    AutomateActions.changeRule(this.props.rule.get('id'));
  },

  render: function () {
    var ruleDigits = this.props.rule.get('id').split('');
    var ruleItems = ruleDigits.map(function(ruleDigit, i) {
      if (ruleDigit === '1') {
        return <div className="black-rect-div" key={i}></div>;
      } else {
        return <div className="white-rect-div" key={i}></div>;
      }
    });

    var ruleResult;
    if (this.props.rule.get('result') === '1') {
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
