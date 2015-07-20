'use strict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var App3AppDispatcher = require('../dispatcher/App3AppDispatcher');

var MainStoreStore = assign({}, EventEmitter.prototype, {

});

MainStoreStore.dispatchToken = App3AppDispatcher.register(function(action) {

  switch(action.type) {
    default:
  }

});

module.exports = MainStoreStore; 
