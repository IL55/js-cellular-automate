'use strict';

var React = require('react/addons');

var ChangeInitialLayerSizeActionCreators = require('../actions/ChangeInitialLayerSizeActionCreators');
var Config = require('../config/config');

require('styles/InitialLayerSize.less');

var InitialLayerSize = React.createClass({
  onChange: function(e) {
    var initialLayerSize = parseInt(e.target.value, 10);
    ChangeInitialLayerSizeActionCreators.changeInitialLayerSize(initialLayerSize);
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
