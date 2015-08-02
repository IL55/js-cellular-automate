'use strict';

var Reflux = require('reflux');
var AutomateActions = require('../actions/AutomateActions');
//var Config = require('../config/config');

var automate = require('./AutomateModel');

var MainStoreStore = Reflux.createStore({
  /**
   * initial setup
   */
  init: function() {
    this.automate = automate;

    this.listenTo(AutomateActions.changeInitialLayer, this.changeInitialLayer);
    this.listenTo(AutomateActions.changeRule, this.changeRule);
    this.listenTo(AutomateActions.newStepsNumber, this.newStepsNumber);
  },
  /**
   * Get the entire collection of TODOs.
   * @return {object}
   */
  getAutomate: function() {
    return this.automate;
  },

  newStepsNumber: function(numberOfSteps) {
    automate.partialUpdateAutomateResult(numberOfSteps);
    // Pass on to listeners
    this.trigger(this.automate);
  },

  changeRule: function(ruleName) {
    automate.changeRule(ruleName);
    automate.updateAutomateResult();
    // Pass on to listeners
    this.trigger(this.automate);
  },

  changeInitialLayer: function(initialLayerSize) {
    automate.initialLayerSize = initialLayerSize;
    automate.updateAutomateResult();
    // Pass on to listeners
    this.trigger(this.automate);
  }
});

module.exports = MainStoreStore;
