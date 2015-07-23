'use strict';

var React = require('react/addons');
var AutomatRuleView = require('./AutomatRuleView');
var NumberOfSteps = require('./NumberOfSteps');
var _ = require('lodash');
var Table = require('react-bootstrap/lib/Table');

require('styles/AutomatView.less');

var AutomatView = React.createClass({

  render: function () {
    return (
        <div>
          <div>
            Automat rules (click for change)
          </div>
          <div>
            <NumberOfSteps numberOfSteps={this.props.automate.numberOfSteps}>
            </NumberOfSteps>
          </div>
          <Table>
            <tr>
            {
              _.map(this.props.automate.rules, function(ruleResult, ruleName) {
                return <AutomatRuleView ruleResult={ruleResult} ruleName={ruleName} key={ruleName}/>;
              })
            }
            </tr>
          </Table>
        </div>
      );
  }
});

module.exports = AutomatView;
