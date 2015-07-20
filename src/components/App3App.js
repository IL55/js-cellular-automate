'use strict';

var React = require('react/addons');

var SvgComponent = require('./SvgComponent');

// CSS
require('normalize.css');
require('../styles/main.css');

var App3App = React.createClass({
  render: function() {
    return (
      <div className="main">
        <SvgComponent size="1200">
        </SvgComponent>
      </div>
    );
  }
});

module.exports = App3App;
