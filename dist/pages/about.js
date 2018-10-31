'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_wepy$page) {
  _inherits(About, _wepy$page);

  function About() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, About);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = About.__proto__ || Object.getPrototypeOf(About)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      'navigationBarTitleText': '关于',
      'enablePullDownRefresh': true
      // 页面所需数据均需在这里声明，用于模板数据绑定
    }, _this.data = {}, _this.methods = {
      // 跳转给赞小程序
      navigateToMiniProgram: function navigateToMiniProgram() {
        _wepy2.default.navigateToMiniProgram({
          appId: 'wx18a2ac992306a5a4',
          path: 'pages/apps/largess/detail?id=ffLsPqOjD7E%3D',
          success: function success(res) {
            console.log('打开成功');
          }
        });
      },

      // 复制微信号
      copyWechat: function copyWechat(e) {
        var text = e.target.dataset.text;
        _wepy2.default.setClipboardData({
          data: text,
          success: function success(res) {
            console.log('复制微信号成功！');
          }
        });
      }
    }, _this.components = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // 只在 Page 实例中存在的配置数据，对应于原生的 page.json 文件

  // 事件处理函数（集中保存在 methods 对象中）

  // 声明页面中将要使用到的组件，或声明组件中所引用的子组件


  _createClass(About, [{
    key: 'onLoad',

    // 在 Page 和 Component 共用的生命周期函数
    value: function onLoad() {
      console.log('onLoad About...');
    }
  }]);

  return About;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(About , 'pages/about'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmpzIl0sIm5hbWVzIjpbIkFib3V0IiwiY29uZmlnIiwiZGF0YSIsIm1ldGhvZHMiLCJuYXZpZ2F0ZVRvTWluaVByb2dyYW0iLCJhcHBJZCIsInBhdGgiLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImxvZyIsImNvcHlXZWNoYXQiLCJlIiwidGV4dCIsInRhcmdldCIsImRhdGFzZXQiLCJzZXRDbGlwYm9hcmREYXRhIiwiY29tcG9uZW50cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUVuQkMsTSxHQUFTO0FBQ1AsZ0NBQTBCLElBRG5CO0FBRVAsK0JBQXlCO0FBRTNCO0FBSlMsSyxRQUtUQyxJLEdBQU8sRSxRQUVQQyxPLEdBQVU7QUFDUjtBQUNBQywyQkFGUSxtQ0FFaUI7QUFDdkIsdUJBQUtBLHFCQUFMLENBQTJCO0FBQ3pCQyxpQkFBTyxvQkFEa0I7QUFFekJDLGdCQUFNLDZDQUZtQjtBQUd6QkMsbUJBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUN0QkMsb0JBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0Q7QUFMd0IsU0FBM0I7QUFPRCxPQVZPOztBQVdSO0FBQ0FDLGdCQVpRLHNCQVlJQyxDQVpKLEVBWU87QUFDYixZQUFJQyxPQUFPRCxFQUFFRSxNQUFGLENBQVNDLE9BQVQsQ0FBaUJGLElBQTVCO0FBQ0EsdUJBQUtHLGdCQUFMLENBQXNCO0FBQ3BCZCxnQkFBTVcsSUFEYztBQUVwQk4sbUJBQVMsaUJBQUNDLEdBQUQsRUFBUztBQUNoQkMsb0JBQVFDLEdBQVIsQ0FBWSxVQUFaO0FBQ0Q7QUFKbUIsU0FBdEI7QUFNRDtBQXBCTyxLLFFBdUJWTyxVLEdBQWEsRTs7QUEvQmI7O0FBT0E7O0FBdUJBOzs7Ozs7QUFFQTs2QkFDVTtBQUNSUixjQUFRQyxHQUFSLENBQVksaUJBQVo7QUFDRDs7OztFQXBDZ0MsZUFBS1EsSTs7a0JBQW5CbEIsSyIsImZpbGUiOiJhYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEFib3V0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAvLyDlj6rlnKggUGFnZSDlrp7kvovkuK3lrZjlnKjnmoTphY3nva7mlbDmja7vvIzlr7nlupTkuo7ljp/nlJ/nmoQgcGFnZS5qc29uIOaWh+S7tlxuICAgIGNvbmZpZyA9IHtcbiAgICAgICduYXZpZ2F0aW9uQmFyVGl0bGVUZXh0JzogJ+WFs+S6jicsXG4gICAgICAnZW5hYmxlUHVsbERvd25SZWZyZXNoJzogdHJ1ZVxuICAgIH1cbiAgICAvLyDpobXpnaLmiYDpnIDmlbDmja7lnYfpnIDlnKjov5nph4zlo7DmmI7vvIznlKjkuo7mqKHmnb/mlbDmja7nu5HlrppcbiAgICBkYXRhID0ge31cbiAgICAvLyDkuovku7blpITnkIblh73mlbDvvIjpm4bkuK3kv53lrZjlnKggbWV0aG9kcyDlr7nosaHkuK3vvIlcbiAgICBtZXRob2RzID0ge1xuICAgICAgLy8g6Lez6L2s57uZ6LWe5bCP56iL5bqPXG4gICAgICBuYXZpZ2F0ZVRvTWluaVByb2dyYW0gKCkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG9NaW5pUHJvZ3JhbSh7XG4gICAgICAgICAgYXBwSWQ6ICd3eDE4YTJhYzk5MjMwNmE1YTQnLFxuICAgICAgICAgIHBhdGg6ICdwYWdlcy9hcHBzL2xhcmdlc3MvZGV0YWlsP2lkPWZmTHNQcU9qRDdFJTNEJyxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5omT5byA5oiQ5YqfJylcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgLy8g5aSN5Yi25b6u5L+h5Y+3XG4gICAgICBjb3B5V2VjaGF0IChlKSB7XG4gICAgICAgIGxldCB0ZXh0ID0gZS50YXJnZXQuZGF0YXNldC50ZXh0XG4gICAgICAgIHdlcHkuc2V0Q2xpcGJvYXJkRGF0YSh7XG4gICAgICAgICAgZGF0YTogdGV4dCxcbiAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5aSN5Yi25b6u5L+h5Y+35oiQ5Yqf77yBJylcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIC8vIOWjsOaYjumhtemdouS4reWwhuimgeS9v+eUqOWIsOeahOe7hOS7tu+8jOaIluWjsOaYjue7hOS7tuS4reaJgOW8leeUqOeahOWtkOe7hOS7tlxuICAgIGNvbXBvbmVudHMgPSB7fVxuICAgIC8vIOWcqCBQYWdlIOWSjCBDb21wb25lbnQg5YWx55So55qE55Sf5ZG95ZGo5pyf5Ye95pWwXG4gICAgb25Mb2FkICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdvbkxvYWQgQWJvdXQuLi4nKVxuICAgIH1cbiAgfVxuIl19