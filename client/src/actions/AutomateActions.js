'use strict';

var Reflux = require('reflux');

var AutomateActions = Reflux.createActions([
  'changeInitialLayerSize',
  'changeRule',
  'newStepsNumber',
  'nextPage',
  'prevPage',
  'changeAutomateName'
]);
module.exports = AutomateActions;
