'use strict';

var React = require('react/addons');

var AutomatElement = require('./AutomatElement');


require('styles/AutomatLine.less');

var AutomatLine = React.createClass({
  render: function () {
    //console.log('Line render ' + this.props.line);
    var viewSettings = this.props.viewSettings;
    var transform = 'translate(0, ' + this.props.y + ' )';
    return (
        <g transform={transform}>
        {
          this.props.line.map(function(item, i) {
            return <AutomatElement color={item} key={i} elementNumber={i} viewSettings={viewSettings} />;
          })
        }
        </g>
      );
  }
});

module.exports = AutomatLine;
