'use strict';

var Reflux = require('reflux');

var AutomateActions = Reflux.createActions([
  'changeInitialLayer',
  'changeRule',
  'newStepsNumber'
]);
module.exports = AutomateActions;
