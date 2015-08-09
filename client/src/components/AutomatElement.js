'use strict';

var React = require('react/addons');


require('styles/AutomatElement.less');

var AutomatElement = React.createClass({

  render: function () {
    var viewSettings = this.props.viewSettings;
    var getNextX = function(elementNumber) {
      return (viewSettings.cellSize + viewSettings.cellPad) * elementNumber;
    };

    var color;
    if (this.props.color === '1') {
      color = 'black-rect';
    } else {
      color = 'white-rect';
    }

    var x = getNextX(this.props.elementNumber);

    return (
        <rect x={x} y="0"
            width={this.props.viewSettings.cellSize}
            height={this.props.viewSettings.cellSize}
            className={color} />
          );
  }
});

module.exports = AutomatElement;
