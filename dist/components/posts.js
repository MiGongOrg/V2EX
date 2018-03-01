'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Posts = function (_wepy$component) {
  _inherits(Posts, _wepy$component);

  function Posts() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Posts);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Posts.__proto__ || Object.getPrototypeOf(Posts)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      list: [{ id: 1, title: 'title1' }, { id: 2, title: 'title2' }]
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // 模板初始绑定数据


  return Posts;
}(_wepy2.default.component);

exports.default = Posts;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzLmpzIl0sIm5hbWVzIjpbIlBvc3RzIiwiZGF0YSIsImxpc3QiLCJpZCIsInRpdGxlIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBRW5CQyxJLEdBQU87QUFDTEMsWUFBTSxDQUFDLEVBQUNDLElBQUksQ0FBTCxFQUFRQyxPQUFPLFFBQWYsRUFBRCxFQUEyQixFQUFDRCxJQUFJLENBQUwsRUFBUUMsT0FBTyxRQUFmLEVBQTNCO0FBREQsSzs7QUFEUDs7OztFQURpQyxlQUFLQyxTOztrQkFBbkJMLEsiLCJmaWxlIjoicG9zdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3N0cyBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICAvLyDmqKHmnb/liJ3lp4vnu5HlrprmlbDmja5cbiAgICBkYXRhID0ge1xuICAgICAgbGlzdDogW3tpZDogMSwgdGl0bGU6ICd0aXRsZTEnfSwge2lkOiAyLCB0aXRsZTogJ3RpdGxlMid9XVxuICAgIH1cbiAgfVxuIl19