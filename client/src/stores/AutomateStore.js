'use strict';

var Reflux = require('reflux');
var AutomateActions = require('../actions/AutomateActions');
//var Config = require('../config/config');

var automate = require('./AutomateModel');

var AutomateStore = Reflux.createStore({
  /**
   * initial setup
   */
  init: function() {
    this.automate = automate;

    this.listenTo(AutomateActions.changeInitialLayer, this.changeInitialLayer);
    this.listenTo(AutomateActions.changeRule, this.changeRule);
    this.listenTo(AutomateActions.newStepsNumber, this.newStepsNumber);
    this.listenTo(AutomateActions.nextPage, this.nextPage);
    this.listenTo(AutomateActions.prevPage, this.prevPage);
    this.listenTo(AutomateActions.changeAutomateName, this.changeAutomateName);
  },
  /**
   * Get the entire collection of TODOs.
   * @return {object}
   */
  getAutomate: function() {
    return this.automate;
  },

  newStepsNumber: function(numberOfSteps) {
    automate.numberOfSteps = numberOfSteps;
    automate.updateAutomateResult();
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
  },

  prevPage: function() {
    if (automate.pageNumber <= 1) {
      return;
    }
    automate.pageNumber = automate.pageNumber - 1;
    automate.updateAutomateResult();
    // Pass on to listeners
    this.trigger(this.automate);
  },

  nextPage: function() {
    automate.pageNumber = automate.pageNumber + 1;
    automate.updateAutomateResult();
    // Pass on to listeners
    this.trigger(this.automate);
  },

  changeAutomateName: function(newName) {
    automate.setAutomatName(newName);
    automate.updateAutomateResult();
    // Pass on to listeners
    this.trigger(this.automate);
  }
});

module.exports = AutomateStore;
