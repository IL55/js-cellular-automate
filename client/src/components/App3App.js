'use strict';

var React = require('react/addons');

// CSS
require('bootstrap/dist/css/bootstrap.min.css');
require('normalize.css');
require('../styles/main.css');

var SvgComponent = require('./SvgComponent');
var AutomatView = require('./AutomatView');
var MainStoreStore = require('../stores/MainStoreStore');


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
    this.unsubscribe = MainStoreStore.listen(this._onChange);
  },

  componentWillUnmount: function() {
    this.unsubscribe();
  },

  render: function() {
    var automateResult = [];
    if (this.state.automate &&
        this.state.automate.automateResult) {
      automateResult = this.state.automate.automateResult;
    }
    return (
      <Grid>
        <Row className='show-grid'>
          <Col xs={12} md={8}>
            <SvgComponent size="1200" automateResult={automateResult}>
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
