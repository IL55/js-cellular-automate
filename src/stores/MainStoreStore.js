'use strict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var App3AppDispatcher = require('../dispatcher/App3AppDispatcher');
var _ = require('lodash');
var Config = require('../config/config');

var CHANGE_EVENT = 'change';

// array of rules
var automate = {};

automate.rules = {
  '000': '0',
  '001': '1',
  '010': '1',
  '011': '0',
  '100': '0',
  '101': '1',
  '110': '0',
  '111': '1'
};

automate.ruleSize = 3;

automate.initialLayer = _.fill(Array(100), '1');
automate.initialLayer[automate.initialLayer.length / 2] = '0';


var getNextResult = function(prevResult, rules, ruleSize) {
  // can't update border - no enough data
  var borderSize = Math.floor(ruleSize / 2);
  var result = _.slice(prevResult, 0, borderSize);
  for (var i = 0; i <= prevResult.length - ruleSize; i++) {
    // get first ruleSize
    var pattern = _.slice(prevResult, i, i + ruleSize).join('');
    result.push(rules[pattern]);
  }

  result = result.concat(_.slice(prevResult, prevResult.length - borderSize, prevResult.length));

  return result;
};

var generateNLayers = function(automateSettings, initialLayer, getNextLayer, layersNumber) {
  var result = [initialLayer];
  var prevLayer = initialLayer;
  for (var i = 0; i < layersNumber; i++) {
    var nextLayer = getNextLayer(prevLayer, automateSettings.rules, automateSettings.ruleSize);
    prevLayer = nextLayer;
    result.push(nextLayer);
  }

  return result;
};

/**
 * number of automate steps
 * @type {Number}
 */
automate.numberOfSteps = 10;


var updateAutomateResult = function() {
  automate.automateResult = generateNLayers(automate, automate.initialLayer, getNextResult, automate.numberOfSteps);
};

var partialUpdateAutomateResult = function(numberOfSteps) {
  if (numberOfSteps <= 0) {
    automate.numberOfSteps = 1;
    automate.automateResult = [automate.initialLayer];
    return;
  }

  if (automate.numberOfSteps < numberOfSteps) {
    // calculate new steps
    var lastLayer = automate.automateResult.pop();
    var newResult = generateNLayers(automate, lastLayer, getNextResult, numberOfSteps - automate.numberOfSteps);
    automate.automateResult = automate.automateResult.concat(newResult);
  } else {
    // remove
    automate.automateResult = _.slice(automate.automateResult, 0, numberOfSteps);
  }
  automate.numberOfSteps = numberOfSteps;
};


// define initial view
updateAutomateResult();

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
      case Config.RULE_CHANGED:
        // revert rule
        var res;
        if (automate.rules[payload.action.ruleName] === '0') {
          res = '1';
        } else {
          res = '0';
        }
        automate.rules[payload.action.ruleName] = res;
        updateAutomateResult();

        MainStoreStore.emitChange();
        break;
      case Config.NEW_STEPS_NUMBER:
        partialUpdateAutomateResult(payload.action.numberOfSteps);
        MainStoreStore.emitChange();
        break;
    }

    return true; // No errors. Needed by promise in Dispatcher.

});

module.exports = MainStoreStore;
