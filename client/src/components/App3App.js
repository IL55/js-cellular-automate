'use strict';

var React = require('react/addons');

var SvgComponent = require('./SvgComponent');
var AutomatView = require('./AutomatView');

var MainStoreStore = require('../stores/MainStoreStore');

// CSS
require('bootstrap/dist/css/bootstrap.min.css');
require('normalize.css');
require('../styles/main.css');

var Grid = require('react-bootstrap/lib/Grid');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');


function getAutomateState() {
  return {
    automate: MainStoreStore.getAutomate()
  };
}


var App3App = React.createClass({
  getInitialState: function() {
    return getAutomateState();
  },

  componentDidMount: function() {
    MainStoreStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    MainStoreStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <Grid>
        <Row className='show-grid'>
          <Col xs={12} md={8}>
            <SvgComponent size="1200" automateResult={this.state.automate.automateResult}>
            </SvgComponent>
          </Col>
          <Col xs={6} md={4}>
            <AutomatView automate={this.state.automate}>
            </AutomatView>
          </Col>
        </Row>
      </Grid>
    );
  },

  /**
   * Event handler for 'change' events coming from the TodoStore
   */
  _onChange: function() {
    this.setState(getAutomateState());
  }
});

module.exports = App3App;
