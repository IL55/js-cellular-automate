'use strict';

var React = require('react/addons');

var AutomatLine = require('./AutomatLine');
var _ = require('lodash');


require('styles/SvgComponent.less');

function getInitialState(size) {
  return {
    size: size,
    mouseX: 0,
    mouseY: 0
  };
}

// array of rules
var automat = {};

automat.rules = {
  '000': '0',
  '001': '1',
  '010': '1',
  '011': '0',
  '100': '0',
  '101': '1',
  '110': '0',
  '111': '1'
};

automat.chunkSize = 3;

automat.initialLayer = _.fill(Array(100), '1');
automat.initialLayer[automat.initialLayer.length / 2] = '0';

var getNextResult = function(prevResult, rules, chunkSize) {
  // can't update border - no enough data
  var borderSize = Math.floor(chunkSize / 2);
  var result = _.slice(prevResult, 0, borderSize);
  for (var i = 0; i <= prevResult.length - chunkSize; i++) {
    // get first chunkSize
    var pattern = _.slice(prevResult, i, i + chunkSize).join('');
    result.push(rules[pattern]);
  }

  result = result.concat(_.slice(prevResult, prevResult.length - borderSize, prevResult.length));

  return result;
};

var generateNLayers = function(automatSettings, getNextLayer, layersNumber) {
  var result = [automatSettings.initialLayer];
  var prevLayer = automatSettings.initialLayer;
  for (var i = 0; i < layersNumber; i++) {
    var nextLayer = getNextLayer(prevLayer, automatSettings.rules, automatSettings.chunkSize);
    prevLayer = nextLayer;
    result.push(nextLayer);
  }

  return result;
};

var automatResult = generateNLayers(automat, getNextResult, 100);

var SvgComponent = React.createClass({
  getInitialState: function() {
    return getInitialState(this.props.size);
  },

  componentWillReceiveProps: function() {
    return this.setState(getInitialState(this.props.size));
  },

  render: function () {
    var vm = this;
    var size = vm.state.size;
    var viewBox = [0, 0, size, size].join(' ');
    //var c = size / 2;
    var viewSettings = {
      cellSize: 10,
      cellPad: 0
    };

    var getNextYLine = function(lineNumber) {
      return (viewSettings.cellSize + viewSettings.cellPad) * lineNumber;
    };


    return (
      <svg xmlns="http://www.w3.org/svg/2000"
        className="border border--silver"
        viewBox={ viewBox }
        width={ size }
        height={ size }
        fill="none">

        {
          automatResult.map(function(line, i) {
            return <AutomatLine y={getNextYLine(i)} line={line} viewSettings={viewSettings} key={i} />;
          })
        }
      </svg>
    );
  }
});


module.exports = SvgComponent;
