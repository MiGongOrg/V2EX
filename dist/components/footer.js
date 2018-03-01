'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_wepy$component) {
  _inherits(Footer, _wepy$component);

  function Footer() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, Footer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Footer.__proto__ || Object.getPrototypeOf(Footer)).call.apply(_ref, [this].concat(args))), _this2), _this2.data = {
      footer: {
        title: 'V2EX',
        slogan: 'way to explore'
      }
      // 请求数据
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }
  // 模板初始绑定数据


  _createClass(Footer, [{
    key: 'request',
    value: function request() {
      var _this = this;
      _wepy2.default.request({
        url: 'https://www.v2ex.com/api/site/info.json',
        header: {
          'Content-Type': 'application/json'
        },
        success: function success(result) {
          _this.footer = result.data;
          _this.$apply();
        }
      });
    }
    // 页面的生命周期函数

  }, {
    key: 'onLoad',
    value: function onLoad() {
      // let _this = this
      // _this.request()
    }
  }]);

  return Footer;
}(_wepy2.default.component);

exports.default = Footer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5qcyJdLCJuYW1lcyI6WyJGb290ZXIiLCJkYXRhIiwiZm9vdGVyIiwidGl0bGUiLCJzbG9nYW4iLCJfdGhpcyIsInJlcXVlc3QiLCJ1cmwiLCJoZWFkZXIiLCJzdWNjZXNzIiwicmVzdWx0IiwiJGFwcGx5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7Ozt5TEFFbkJDLEksR0FBTztBQUNMQyxjQUFRO0FBQ05DLGVBQU8sTUFERDtBQUVOQyxnQkFBUTtBQUZGO0FBS1Y7QUFOTyxLOztBQURQOzs7Ozs4QkFRVztBQUNULFVBQUlDLFFBQVEsSUFBWjtBQUNBLHFCQUFLQyxPQUFMLENBQWE7QUFDWEMsYUFBSyx5Q0FETTtBQUVYQyxnQkFBUTtBQUNOLDBCQUFnQjtBQURWLFNBRkc7QUFLWEMsaUJBQVMsaUJBQVVDLE1BQVYsRUFBa0I7QUFDekJMLGdCQUFNSCxNQUFOLEdBQWVRLE9BQU9ULElBQXRCO0FBQ0FJLGdCQUFNTSxNQUFOO0FBQ0Q7QUFSVSxPQUFiO0FBVUQ7QUFDRDs7Ozs2QkFDVTtBQUNSO0FBQ0E7QUFDRDs7OztFQTFCaUMsZUFBS0MsUzs7a0JBQXBCWixNIiwiZmlsZSI6ImZvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICAvLyDmqKHmnb/liJ3lp4vnu5HlrprmlbDmja5cbiAgICBkYXRhID0ge1xuICAgICAgZm9vdGVyOiB7XG4gICAgICAgIHRpdGxlOiAnVjJFWCcsXG4gICAgICAgIHNsb2dhbjogJ3dheSB0byBleHBsb3JlJ1xuICAgICAgfVxuICAgIH1cbiAgICAvLyDor7fmsYLmlbDmja5cbiAgICByZXF1ZXN0ICgpIHtcbiAgICAgIGxldCBfdGhpcyA9IHRoaXNcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LnYyZXguY29tL2FwaS9zaXRlL2luZm8uanNvbicsXG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgIF90aGlzLmZvb3RlciA9IHJlc3VsdC5kYXRhXG4gICAgICAgICAgX3RoaXMuJGFwcGx5KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgLy8g6aG16Z2i55qE55Sf5ZG95ZGo5pyf5Ye95pWwXG4gICAgb25Mb2FkICgpIHtcbiAgICAgIC8vIGxldCBfdGhpcyA9IHRoaXNcbiAgICAgIC8vIF90aGlzLnJlcXVlc3QoKVxuICAgIH1cbiAgfVxuIl19