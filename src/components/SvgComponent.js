'use strict';

var React = require('react/addons');

var AutomatLine = require('./AutomatLine');


require('styles/SvgComponent.less');

var SvgComponent = React.createClass({
  render: function () {
    var vm = this;
    var size = vm.props.size;
    var viewBox = [0, 0, size, size].join(' ');
    //var c = size / 2;
    var viewSettings = {
      cellSize: 6,
      cellPad: 0
    };

    var getNextYLine = function(lineNumber) {
      return (viewSettings.cellSize + viewSettings.cellPad) * lineNumber;
    };

    var automateResult = [];
    if (vm.props.automateResult) {
      automateResult = vm.props.automateResult;
    }

    return (
      <svg xmlns="http://www.w3.org/svg/2000"
        className="border border--silver"
        viewBox={ viewBox }
        width={ size }
        height={ size }
        fill="none">

        {
          automateResult.map(function(line, i) {
            return <AutomatLine y={getNextYLine(i)} line={line} viewSettings={viewSettings} key={i} />;
          })
        }
      </svg>
    );
  }
});


module.exports = SvgComponent;
