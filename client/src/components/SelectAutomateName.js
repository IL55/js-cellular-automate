'use strict';

var React = require('react/addons');
var AutomateActions = require('../actions/AutomateActions');

require('styles/SelectAutomateName.less');

var SelectAutomateName = React.createClass({
  onChange: function(e) {
    var automateName = parseInt(e.target.value, 10);
    AutomateActions.changeAutomateName(automateName);
  },
  render: function () {
    return (
      <span>
        <select onChange={this.onChange} className="SelectAutomateName">
          {
            this.props.automates.map(function(automate, i) {
              return <option value={automate.get('result')} key={i}>{automate.get('name')}</option>;
            })
          }
        </select>
      </span>
      );
  }
});

module.exports = SelectAutomateName;
