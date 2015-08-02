/*
 * Constants
 */

var _ = require('lodash');

var config = {};

config.automat = {
  initialLayerSizes: _.range(50, 1000, 50)
};

module.exports = config;
