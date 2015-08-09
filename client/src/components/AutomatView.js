'use strict';

var React = require('react/addons');
var AutomatRuleView = require('./AutomatRuleView');
var NumberOfSteps = require('./NumberOfSteps');
var Table = require('react-bootstrap/lib/Table');
var InitialLayerSize = require('./InitialLayerSize');
var Pagination = require('./Pagination');
var SelectAutomateName = require('./SelectAutomateName');


require('styles/AutomatView.less');

var AutomatView = React.createClass({

  render: function () {
    return (
        <div>
          <div>
            Automat {this.props.automate.getAutomatName()}
            <SelectAutomateName automates={this.props.automate.allAutomates} />
          </div>
          <Table>
            <tr>
              <tbody>
                <td>
                  <NumberOfSteps numberOfSteps={this.props.automate.numberOfSteps}>
                  </NumberOfSteps>
                </td>
                <td>
                  <Pagination pageNumber={this.props.automate.pageNumber} />
                </td>
                <td>
                  <InitialLayerSize initialLayerSize={this.props.automate.initialLayerSize}>
                  </InitialLayerSize>
                </td>
              </tbody>
            </tr>
          </Table>
          <Table>
            <tbody>
              <tr>
              {
                this.props.automate.rules.map(function(rule, i) {
                  return <AutomatRuleView rule={rule} key={i}/>;
                })
              }
              </tr>
            </tbody>
          </Table>
        </div>
      );
  }
});

module.exports = AutomatView;
