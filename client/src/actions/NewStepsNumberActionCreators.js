'use strict';
var App3AppDispatcher = require('../dispatcher/App3AppDispatcher');
var Config = require('../config/config');


var NewStepsNumberActionCreators = {
  newStepsNumber: function(numberOfSteps) {
    App3AppDispatcher.handleViewAction({
      actionType: Config.NEW_STEPS_NUMBER,
      numberOfSteps: numberOfSteps
    });
  }
};

module.exports = NewStepsNumberActionCreators;
