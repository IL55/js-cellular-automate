'use strict';

var App3AppDispatcher = require('../dispatcher/App3AppDispatcher');
var Config = require('../config/config');

var ChangeRuleActionCreators = {
  changeRule: function(ruleName) {
    App3AppDispatcher.handleViewAction({
      actionType: Config.RULE_CHANGED,
      ruleName: ruleName
    });
  }
};

module.exports = ChangeRuleActionCreators;
