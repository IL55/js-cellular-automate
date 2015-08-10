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
    var selectedAutomatResult = this.props.automate.getAutomatName();
    var selectedAutomate = this.props.automate.allAutomates.find(function(automate) {
      return automate.get('result') === selectedAutomatResult;
    });
    return (
        <div>
          <div>
            Automat {selectedAutomatResult}
              <SelectAutomateName automates={this.props.automate.allAutomates} selectedAutomate={selectedAutomate}/>
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
