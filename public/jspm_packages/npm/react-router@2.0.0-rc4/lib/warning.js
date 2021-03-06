/* */ 
(function(process) {
  'use strict';
  exports.__esModule = true;
  exports['default'] = routerWarning;
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {'default': obj};
  }
  var _warning = require('warning');
  var _warning2 = _interopRequireDefault(_warning);
  function routerWarning(falseToWarn, message) {
    message = '[react-router] ' + message;
    process.env.NODE_ENV !== 'production' ? _warning2['default'](falseToWarn, message) : undefined;
  }
  module.exports = exports['default'];
})(require('process'));
