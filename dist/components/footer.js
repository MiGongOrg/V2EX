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

    var _temp, _this, _ret;

    _classCallCheck(this, Footer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Footer.__proto__ || Object.getPrototypeOf(Footer)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      footer: {
        title: 'V2EX',
        slogan: 'way to explore'
      }
      // 页面的生命周期函数
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // 模板初始绑定数据


  _createClass(Footer, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Footer;
}(_wepy2.default.component);

exports.default = Footer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5qcyJdLCJuYW1lcyI6WyJGb290ZXIiLCJkYXRhIiwiZm9vdGVyIiwidGl0bGUiLCJzbG9nYW4iLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUVuQkMsSSxHQUFPO0FBQ0xDLGNBQVE7QUFDTkMsZUFBTyxNQUREO0FBRU5DLGdCQUFRO0FBRkY7QUFLVjtBQU5PLEs7O0FBRFA7Ozs7OzZCQVFVLENBQUU7Ozs7RUFUc0IsZUFBS0MsUzs7a0JBQXBCTCxNIiwiZmlsZSI6ImZvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICAvLyDmqKHmnb/liJ3lp4vnu5HlrprmlbDmja5cbiAgICBkYXRhID0ge1xuICAgICAgZm9vdGVyOiB7XG4gICAgICAgIHRpdGxlOiAnVjJFWCcsXG4gICAgICAgIHNsb2dhbjogJ3dheSB0byBleHBsb3JlJ1xuICAgICAgfVxuICAgIH1cbiAgICAvLyDpobXpnaLnmoTnlJ/lkb3lkajmnJ/lh73mlbBcbiAgICBvbkxvYWQgKCkge31cbiAgfVxuIl19