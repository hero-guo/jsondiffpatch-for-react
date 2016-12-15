'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _main = require('jsondiffpatch/src/main');

var _main2 = _interopRequireDefault(_main);

var _mainFormatters = require('jsondiffpatch/src/main-formatters');

var _mainFormatters2 = _interopRequireDefault(_mainFormatters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by guoguangyu on 2016/10/25.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


require('jsondiffpatch/public/formatters-styles/html.css');
require('jsondiffpatch/public/formatters-styles/annotated.css');

var JsonDiffReact = function (_Component) {
  _inherits(JsonDiffReact, _Component);

  function JsonDiffReact() {
    _classCallCheck(this, JsonDiffReact);

    return _possibleConstructorReturn(this, (JsonDiffReact.__proto__ || Object.getPrototypeOf(JsonDiffReact)).apply(this, arguments));
  }

  _createClass(JsonDiffReact, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          right = _props.right,
          left = _props.left,
          _props$show = _props.show,
          show = _props$show === undefined ? true : _props$show,
          _props$annotated = _props.annotated,
          annotated = _props$annotated === undefined ? false : _props$annotated,
          tips = _props.tips;

      var delta = _main2.default.diff(left, right);
      var html = annotated ? _mainFormatters2.default.annotated.format(delta) : _mainFormatters2.default.html.format(delta, left);
      show ? _mainFormatters2.default.html.showUnchanged() : _mainFormatters2.default.html.hideUnchanged();
      var text = tips || '无差异！';
      return html ? _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: html } }) : _react2.default.createElement(
        'p',
        { style: { fontSize: 12, color: '#999' } },
        text
      );
    }
  }]);

  return JsonDiffReact;
}(_react.Component);

JsonDiffReact.propTypes = {
  right: _react.PropTypes.any,
  left: _react.PropTypes.any,
  show: _react.PropTypes.bool,
  annotated: _react.PropTypes.bool,
  tips: _react.PropTypes.string
};
exports.default = JsonDiffReact;