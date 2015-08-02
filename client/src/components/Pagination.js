'use strict';

var React = require('react/addons');

var AutomateActions = require('actions/AutomateActions');

require('styles/Pagination.less');

var Pagination = React.createClass({
  prevPage: function() {
    AutomateActions.prevPage();
  },

  nextPage: function() {
    AutomateActions.nextPage();
  },

  render: function () {

    return (
        <div className="Pagination">
          <button type="button" className="btn btn-default" onClick={this.prevPage}>
            <span className="glyphicon glyphicon-arrow-up" aria-hidden="true">Prev</span>
          </button>
          <div>
            <span>Page: {this.props.pageNumber}</span>
          </div>
          <button type="button" className="btn btn-default" onClick={this.nextPage}>
            <span className="glyphicon glyphicon-arrow-down" aria-hidden="true">Next</span>
          </button>
        </div>
      );
  }
});

module.exports = Pagination;
