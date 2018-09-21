'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _common = require('./../common/index.js');

var _wepyUtils = require('./../npm/wepy-utils/index.js');

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
      var _this3 = this;

      var _this = this;
      var id = options.id;
      var url = _common.API.nodes.show;
      var params = {
        id: id
      };

      _wepyUtils.HTTP.get({
        url: url,
        params: params,
        mask: true
      }).then(function (data) {
        _this3.node = data;
        // 处理头像URL
        data.avatar_large = data.avatar_large.replace('//', 'https://');
        // 过滤HTML标签
        if (data.header) {
          data.header = data.header.replace(/<([^>]*)>/g, '');
        }
        _this3.nodeinfo = data;
        _this3.$apply();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVJbmZvLmpzIl0sIm5hbWVzIjpbIk5vZGVpbmZvIiwiZGF0YSIsIm5vZGVpbmZvIiwiYXZhdGFyIiwiZGlmZiIsImxhcmdlIiwib3B0aW9ucyIsIl90aGlzIiwiaWQiLCJ1cmwiLCJub2RlcyIsInNob3ciLCJwYXJhbXMiLCJnZXQiLCJtYXNrIiwidGhlbiIsIm5vZGUiLCJhdmF0YXJfbGFyZ2UiLCJyZXBsYWNlIiwiaGVhZGVyIiwiJGFwcGx5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7Ozs2TEFFbkJDLEksR0FBTztBQUNMQyxnQkFBVSxFQURMO0FBRUxDLGNBQVE7QUFDTkMsY0FBTSw0QkFEQTtBQUVOQyxlQUFPO0FBRkQ7QUFLVjtBQVBPLEs7O0FBRFA7Ozs7OzRCQVNTQyxPLEVBQVM7QUFBQTs7QUFDaEIsVUFBSUMsUUFBUSxJQUFaO0FBQ0EsVUFBSUMsS0FBS0YsUUFBUUUsRUFBakI7QUFDQSxVQUFJQyxNQUFNLFlBQUlDLEtBQUosQ0FBVUMsSUFBcEI7QUFDQSxVQUFJQyxTQUFTO0FBQ1hKLFlBQUlBO0FBRE8sT0FBYjs7QUFJQSxzQkFBS0ssR0FBTCxDQUFTO0FBQ1BKLGFBQUtBLEdBREU7QUFFUEcsZ0JBQVFBLE1BRkQ7QUFHUEUsY0FBTTtBQUhDLE9BQVQsRUFJR0MsSUFKSCxDQUlRLFVBQUNkLElBQUQsRUFBVTtBQUNoQixlQUFLZSxJQUFMLEdBQVlmLElBQVo7QUFDQTtBQUNBQSxhQUFLZ0IsWUFBTCxHQUFvQmhCLEtBQUtnQixZQUFMLENBQWtCQyxPQUFsQixDQUEwQixJQUExQixFQUFnQyxVQUFoQyxDQUFwQjtBQUNBO0FBQ0EsWUFBSWpCLEtBQUtrQixNQUFULEVBQWlCO0FBQ2ZsQixlQUFLa0IsTUFBTCxHQUFjbEIsS0FBS2tCLE1BQUwsQ0FBWUQsT0FBWixDQUFvQixZQUFwQixFQUFrQyxFQUFsQyxDQUFkO0FBQ0Q7QUFDRCxlQUFLaEIsUUFBTCxHQUFnQkQsSUFBaEI7QUFDQSxlQUFLbUIsTUFBTDtBQUNELE9BZEQ7QUFlRDtBQUNEOzs7OzZCQUNVLENBQUU7Ozs7RUFuQ3dCLGVBQUtDLFM7O2tCQUF0QnJCLFEiLCJmaWxlIjoibm9kZUluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHsgQVBJIH0gZnJvbSAnQC9jb21tb24nXG4gIGltcG9ydCB7IEhUVFAgfSBmcm9tICd3ZXB5LXV0aWxzJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGVpbmZvIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIC8vIOaooeadv+WIneWni+e7keWumuaVsOaNrlxuICAgIGRhdGEgPSB7XG4gICAgICBub2RlaW5mbzoge30sXG4gICAgICBhdmF0YXI6IHtcbiAgICAgICAgZGlmZjogJy9zdGF0aWMvaW1nL25vZGVfbGFyZ2UucG5nJyxcbiAgICAgICAgbGFyZ2U6ICcuLi9pbWFnZXMvbm9kZV9sYXJnZS5wbmcnXG4gICAgICB9XG4gICAgfVxuICAgIC8vIOivt+axguaVsOaNrlxuICAgIHJlcXVlc3QgKG9wdGlvbnMpIHtcbiAgICAgIGxldCBfdGhpcyA9IHRoaXNcbiAgICAgIGxldCBpZCA9IG9wdGlvbnMuaWRcbiAgICAgIGxldCB1cmwgPSBBUEkubm9kZXMuc2hvd1xuICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgaWQ6IGlkXG4gICAgICB9XG5cbiAgICAgIEhUVFAuZ2V0KHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICBtYXNrOiB0cnVlXG4gICAgICB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMubm9kZSA9IGRhdGFcbiAgICAgICAgLy8g5aSE55CG5aS05YOPVVJMXG4gICAgICAgIGRhdGEuYXZhdGFyX2xhcmdlID0gZGF0YS5hdmF0YXJfbGFyZ2UucmVwbGFjZSgnLy8nLCAnaHR0cHM6Ly8nKVxuICAgICAgICAvLyDov4fmu6RIVE1M5qCH562+XG4gICAgICAgIGlmIChkYXRhLmhlYWRlcikge1xuICAgICAgICAgIGRhdGEuaGVhZGVyID0gZGF0YS5oZWFkZXIucmVwbGFjZSgvPChbXj5dKik+L2csICcnKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZWluZm8gPSBkYXRhXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0pXG4gICAgfVxuICAgIC8vIOmhtemdoueahOeUn+WRveWRqOacn+WHveaVsFxuICAgIG9uTG9hZCAoKSB7fVxuICB9XG4iXX0=