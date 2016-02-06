(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["ReactPagify"] = factory(require("react"));
	else
		root["ReactPagify"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Context = function (_React$Component) {
	  _inherits(Context, _React$Component);
	
	  function Context() {
	    _classCallCheck(this, Context);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Context).apply(this, arguments));
	  }
	
	  _createClass(Context, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        segments: this.props.segments,
	        onSelect: this.props.onSelect
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var onSelect = _props.onSelect;
	      var segments = _props.segments;
	
	      var props = _objectWithoutProperties(_props, ['onSelect', 'segments']);
	
	      return _react2.default.createElement(
	        'div',
	        props,
	        this.props.children
	      );
	    }
	  }]);
	
	  return Context;
	}(_react2.default.Component);
	
	Context.propTypes = {
	  children: _react2.default.PropTypes.any,
	  onSelect: _react2.default.PropTypes.func,
	  segments: _react2.default.PropTypes.object
	};
	Context.childContextTypes = {
	  onSelect: _react2.default.PropTypes.func,
	  segments: _react2.default.PropTypes.object
	};
	
	var Segment = function (_React$Component2) {
	  _inherits(Segment, _React$Component2);
	
	  function Segment() {
	    _classCallCheck(this, Segment);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Segment).apply(this, arguments));
	  }
	
	  _createClass(Segment, [{
	    key: 'render',
	    value: function render() {
	      var context = this.context;
	      var props = this.props;
	      var segments = context.segments;
	      var onSelect = context.onSelect;
	      var pages = segments[props.field];
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        pages.map(function (page) {
	          return _react2.default.createElement(
	            'span',
	            _extends({}, props, {
	              key: 'page-' + page,
	              onClick: function onClick(e) {
	                return onSelect(page, e);
	              } }),
	            page
	          );
	        })
	      );
	    }
	  }]);
	
	  return Segment;
	}(_react2.default.Component);
	
	Segment.propTypes = {
	  field: _react2.default.PropTypes.string.isRequired
	};
	Segment.contextTypes = {
	  onSelect: _react2.default.PropTypes.func,
	  segments: _react2.default.PropTypes.object
	};
	
	var Ellipsis = function (_React$Component3) {
	  _inherits(Ellipsis, _React$Component3);
	
	  function Ellipsis() {
	    _classCallCheck(this, Ellipsis);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Ellipsis).apply(this, arguments));
	  }
	
	  _createClass(Ellipsis, [{
	    key: 'render',
	    value: function render() {
	      var context = this.context;
	      var props = this.props;
	      var segments = context.segments;
	      var children = props.children;
	      var previousPages = segments[props.previousField];
	      var nextPages = segments[props.nextField];
	      var showEllipsis = nextPages[0] - previousPages.slice(-1)[0] > 1;
	
	      if (showEllipsis) {
	        return _react2.default.createElement(
	          'span',
	          props,
	          children
	        );
	      }
	
	      return null;
	    }
	  }]);
	
	  return Ellipsis;
	}(_react2.default.Component);
	
	Ellipsis.propTypes = {
	  children: _react2.default.PropTypes.any.isRequired,
	  previousField: _react2.default.PropTypes.string.isRequired,
	  nextField: _react2.default.PropTypes.string.isRequired
	};
	Ellipsis.defaultProps = {
	  children: '…'
	};
	Ellipsis.contextTypes = {
	  segments: _react2.default.PropTypes.object
	};
	
	exports.default = {
	  Context: Context,
	  Segment: Segment,
	  Ellipsis: Ellipsis
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-pagify.js.map