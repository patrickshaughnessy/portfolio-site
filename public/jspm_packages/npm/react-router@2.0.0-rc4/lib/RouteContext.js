/* */ 
(function(process) {
  'use strict';
  exports.__esModule = true;
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {'default': obj};
  }
  var _warning = require('./warning');
  var _warning2 = _interopRequireDefault(_warning);
  var _react = require('react');
  var _react2 = _interopRequireDefault(_react);
  var object = _react2['default'].PropTypes.object;
  var RouteContext = {
    propTypes: {route: object.isRequired},
    childContextTypes: {route: object.isRequired},
    getChildContext: function getChildContext() {
      return {route: this.props.route};
    },
    componentWillMount: function componentWillMount() {
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'The `RouteContext` mixin is deprecated. You can provide `this.props.route` on context with your own `contextTypes`. See http://bit.ly/1MHiOst') : undefined;
    }
  };
  exports['default'] = RouteContext;
  module.exports = exports['default'];
})(require('process'));
