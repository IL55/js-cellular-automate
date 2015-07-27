'use strict';

var React = require('react/addons');
var AutomatRuleView = require('./AutomatRuleView');
var NumberOfSteps = require('./NumberOfSteps');
var _ = require('lodash');
var Table = require('react-bootstrap/lib/Table');
var InitialLayerSize = require('./InitialLayerSize');


require('styles/AutomatView.less');

var AutomatView = React.createClass({

  render: function () {
    return (
        <div>
          <div>
            Automat rules (click for change)
          </div>
          <Table>
            <tr>
              <td>
                <NumberOfSteps numberOfSteps={this.props.automate.numberOfSteps}>
                </NumberOfSteps>
              </td>
              <td>
                <InitialLayerSize initialLayerSize={this.props.automate.initialLayerSize}>
                </InitialLayerSize>
              </td>
            </tr>
          </Table>
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
