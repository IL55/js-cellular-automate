'use strict';

var React = require('react/addons');

var AutomateActions = require('../actions/AutomateActions');
var Config = require('../config/config');

require('styles/InitialLayerSize.less');

var InitialLayerSize = React.createClass({
  onChange: function(e) {
    var initialLayerSize = parseInt(e.target.value, 10);
    AutomateActions.changeInitialLayerSize(initialLayerSize);
  },
  render: function () {
    return (
      <span>
        Initial layer size:
        <select onChange={this.onChange} value={this.props.initialLayerSize} className="InitialLayerSize">
          {
            Config.automat.initialLayerSizes.map(function(size, i) {
              return <option value={size} key={i}>{size}</option>;
            })
          }
        </select>
      </span>
      );
  }
});

module.exports = InitialLayerSize;
