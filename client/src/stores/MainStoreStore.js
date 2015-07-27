'use strict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var App3AppDispatcher = require('../dispatcher/App3AppDispatcher');
var Config = require('../config/config');

var CHANGE_EVENT = 'change';

var automate = require('./AutomateModel');

var MainStoreStore = assign({}, EventEmitter.prototype, {
  /**
   * Get the entire collection of TODOs.
   * @return {object}
   */
  getAutomate: function() {
    return automate;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

MainStoreStore.dispatchToken = App3AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {
      case Config.actions.RULE_CHANGED:
        automate.changeRule(payload.action.ruleName);
        automate.updateAutomateResult();

        MainStoreStore.emitChange();
        break;

      case Config.actions.NEW_STEPS_NUMBER:
        automate.partialUpdateAutomateResult(payload.action.numberOfSteps);
        MainStoreStore.emitChange();
        break;

      case Config.actions.INITIAL_LAYER_SIZE_CHANGED:
        automate.initialLayerSize = payload.action.initialLayerSize;
        automate.updateAutomateResult();
        MainStoreStore.emitChange();
        break;
    }

    return true; // No errors. Needed by promise in Dispatcher.

});

module.exports = MainStoreStore;
