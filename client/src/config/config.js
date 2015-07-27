/*
 * Constants
 */

var keyMirror = require('react/lib/keyMirror');
var _ = require('lodash');

var config = {};

config.actions = keyMirror({
  RULE_CHANGED: null,
  NEW_STEPS_NUMBER: null,
  INITIAL_LAYER_SIZE_CHANGED: null
});

config.automat = {
  initialLayerSizes: _.range(50, 1000, 50)
};

module.exports = config;
