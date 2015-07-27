'use strict';

var App3AppDispatcher = require('../dispatcher/App3AppDispatcher');
var Config = require('../config/config');

var ChangeInitialLayerSizeActionCreators = {
  changeInitialLayerSize: function(initialLayerSize) {
    App3AppDispatcher.handleViewAction({
      actionType: Config.actions.INITIAL_LAYER_SIZE_CHANGED,
      initialLayerSize: initialLayerSize
    });
  }
};

module.exports = ChangeInitialLayerSizeActionCreators;
