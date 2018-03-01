'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _common = require('./../common/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nodeinfo = function (_wepy$component) {
  _inherits(Nodeinfo, _wepy$component);

  function Nodeinfo() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, Nodeinfo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Nodeinfo.__proto__ || Object.getPrototypeOf(Nodeinfo)).call.apply(_ref, [this].concat(args))), _this2), _this2.data = {
      nodeinfo: {},
      avatar: {
        diff: '/static/img/node_large.png',
        large: '../images/node_large.png'
      }
      // 请求数据
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }
  // 模板初始绑定数据


  _createClass(Nodeinfo, [{
    key: 'request',
    value: function request(options) {
      var _this = this;
      var id = options.id;

      var url = _common.URLS.nodes.show + '?id=' + id;

      _common.HTTP.get(url).then(function (data) {
        _this.node = data;
        // 处理头像URL
        data.avatar_large = data.avatar_large.replace('//', 'https://');
        // 过滤HTML标签
        if (data.header) {
          data.header = data.header.replace(/<([^>]*)>/g, '');
        }
        _this.nodeinfo = data;
        _this.$apply();
      });
    }
    // 页面的生命周期函数

  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Nodeinfo;
}(_wepy2.default.component);

exports.default = Nodeinfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVJbmZvLmpzIl0sIm5hbWVzIjpbIk5vZGVpbmZvIiwiZGF0YSIsIm5vZGVpbmZvIiwiYXZhdGFyIiwiZGlmZiIsImxhcmdlIiwib3B0aW9ucyIsIl90aGlzIiwiaWQiLCJ1cmwiLCJub2RlcyIsInNob3ciLCJnZXQiLCJ0aGVuIiwibm9kZSIsImF2YXRhcl9sYXJnZSIsInJlcGxhY2UiLCJoZWFkZXIiLCIkYXBwbHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzZMQUVuQkMsSSxHQUFPO0FBQ0xDLGdCQUFVLEVBREw7QUFFTEMsY0FBUTtBQUNOQyxjQUFNLDRCQURBO0FBRU5DLGVBQU87QUFGRDtBQUtWO0FBUE8sSzs7QUFEUDs7Ozs7NEJBU1NDLE8sRUFBUztBQUNoQixVQUFJQyxRQUFRLElBQVo7QUFDQSxVQUFJQyxLQUFLRixRQUFRRSxFQUFqQjs7QUFFQSxVQUFJQyxNQUFNLGFBQUtDLEtBQUwsQ0FBV0MsSUFBWCxHQUFrQixNQUFsQixHQUEyQkgsRUFBckM7O0FBRUEsbUJBQUtJLEdBQUwsQ0FBU0gsR0FBVCxFQUFjSSxJQUFkLENBQW1CLFVBQUNaLElBQUQsRUFBVTtBQUMzQk0sY0FBTU8sSUFBTixHQUFhYixJQUFiO0FBQ0E7QUFDQUEsYUFBS2MsWUFBTCxHQUFvQmQsS0FBS2MsWUFBTCxDQUFrQkMsT0FBbEIsQ0FBMEIsSUFBMUIsRUFBZ0MsVUFBaEMsQ0FBcEI7QUFDQTtBQUNBLFlBQUlmLEtBQUtnQixNQUFULEVBQWlCO0FBQ2ZoQixlQUFLZ0IsTUFBTCxHQUFjaEIsS0FBS2dCLE1BQUwsQ0FBWUQsT0FBWixDQUFvQixZQUFwQixFQUFrQyxFQUFsQyxDQUFkO0FBQ0Q7QUFDRFQsY0FBTUwsUUFBTixHQUFpQkQsSUFBakI7QUFDQU0sY0FBTVcsTUFBTjtBQUNELE9BVkQ7QUFXRDtBQUNEOzs7OzZCQUNVLENBQUU7Ozs7RUE3QndCLGVBQUtDLFM7O2tCQUF0Qm5CLFEiLCJmaWxlIjoibm9kZUluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHsgVVJMUywgSFRUUCB9IGZyb20gJy4uL2NvbW1vbidcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlaW5mbyBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICAvLyDmqKHmnb/liJ3lp4vnu5HlrprmlbDmja5cbiAgICBkYXRhID0ge1xuICAgICAgbm9kZWluZm86IHt9LFxuICAgICAgYXZhdGFyOiB7XG4gICAgICAgIGRpZmY6ICcvc3RhdGljL2ltZy9ub2RlX2xhcmdlLnBuZycsXG4gICAgICAgIGxhcmdlOiAnLi4vaW1hZ2VzL25vZGVfbGFyZ2UucG5nJ1xuICAgICAgfVxuICAgIH1cbiAgICAvLyDor7fmsYLmlbDmja5cbiAgICByZXF1ZXN0IChvcHRpb25zKSB7XG4gICAgICBsZXQgX3RoaXMgPSB0aGlzXG4gICAgICBsZXQgaWQgPSBvcHRpb25zLmlkXG5cbiAgICAgIGxldCB1cmwgPSBVUkxTLm5vZGVzLnNob3cgKyAnP2lkPScgKyBpZFxuXG4gICAgICBIVFRQLmdldCh1cmwpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgX3RoaXMubm9kZSA9IGRhdGFcbiAgICAgICAgLy8g5aSE55CG5aS05YOPVVJMXG4gICAgICAgIGRhdGEuYXZhdGFyX2xhcmdlID0gZGF0YS5hdmF0YXJfbGFyZ2UucmVwbGFjZSgnLy8nLCAnaHR0cHM6Ly8nKVxuICAgICAgICAvLyDov4fmu6RIVE1M5qCH562+XG4gICAgICAgIGlmIChkYXRhLmhlYWRlcikge1xuICAgICAgICAgIGRhdGEuaGVhZGVyID0gZGF0YS5oZWFkZXIucmVwbGFjZSgvPChbXj5dKik+L2csICcnKVxuICAgICAgICB9XG4gICAgICAgIF90aGlzLm5vZGVpbmZvID0gZGF0YVxuICAgICAgICBfdGhpcy4kYXBwbHkoKVxuICAgICAgfSlcbiAgICB9XG4gICAgLy8g6aG16Z2i55qE55Sf5ZG95ZGo5pyf5Ye95pWwXG4gICAgb25Mb2FkICgpIHt9XG4gIH1cbiJdfQ==