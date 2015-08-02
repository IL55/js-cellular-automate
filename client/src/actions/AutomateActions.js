'use strict';

var Reflux = require('reflux');

var AutomateActions = Reflux.createActions([
  'changeInitialLayer',
  'changeRule',
  'newStepsNumber',
  'nextPage',
  'prevPage'
]);
module.exports = AutomateActions;
