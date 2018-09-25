'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _common = require('./../common/index.js');

var _wepyUtils = require('./../npm/wepy-utils/index.js');

var _userPosts = require('./../components/userPosts.js');

var _userPosts2 = _interopRequireDefault(_userPosts);

var _footer = require('./../components/footer.js');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// 引入组件


var User = function (_wepy$page) {
  _inherits(User, _wepy$page);

  function User() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, User);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = User.__proto__ || Object.getPrototypeOf(User)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      user: {
        twitter: false,
        website: false,
        location: false,
        github: false,
        btc: false
      }
      // 声明页面中将要使用到的组件
    }, _this.$repeat = {}, _this.$props = { "userPosts": { "xmlns:v-bind": "", "v-bind:syncUser.sync": "user" } }, _this.$events = {}, _this.components = {
      userPosts: _userPosts2.default,
      footer: _footer2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // 模板初始绑定数据


  _createClass(User, [{
    key: 'request',
    value: function request(options) {
      var _this2 = this;

      var id = options.id;
      var url = _common.API.members;
      var params = {
        id: id
      };
      _wepyUtils.HTTP.get({
        url: url,
        params: params,
        mask: true
      }).then(function (data) {
        // 格式化加入时间
        var date = new Date(data.created * 1000);
        data.created = date.toLocaleString();
        // 处理头像URL
        data.avatar_large = data.avatar_large.replace('//', 'https://');

        var userAvatar = data.avatar_large.split('?s=24');

        if (userAvatar.length > 1) {
          data.avatar_large = data.avatar_large.replace('?s=24', '?s=100');
        } else {
          data.avatar_large = data.avatar_large.replace('_mini', '_large');
        }

        _this2.user = data;
        _this2.$apply();
        // 设置当前页面的标题
        _wepy2.default.setNavigationBarTitle({
          title: _this2.user.username
        });
      });
    }
    // 生命周期函数，页面加载

  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      // 导航条 Loading
      _wepy2.default.showNavigationBarLoading();
      this.request(options);

      // 调用组件 userPosts 中的 request 方法，并传递参数对象 options
      this.$invoke('userPosts', 'request', options);
    }
    // 生命周期函数，初次渲染完成

  }, {
    key: 'onReady',
    value: function onReady() {
      // 隐藏导航条 Loading
      _wepy2.default.hideNavigationBarLoading();
    }
  }]);

  return User;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(User , 'pages/user'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsiVXNlciIsImRhdGEiLCJ1c2VyIiwidHdpdHRlciIsIndlYnNpdGUiLCJsb2NhdGlvbiIsImdpdGh1YiIsImJ0YyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInVzZXJQb3N0cyIsImZvb3RlciIsIm9wdGlvbnMiLCJpZCIsInVybCIsIm1lbWJlcnMiLCJwYXJhbXMiLCJnZXQiLCJtYXNrIiwidGhlbiIsImRhdGUiLCJEYXRlIiwiY3JlYXRlZCIsInRvTG9jYWxlU3RyaW5nIiwiYXZhdGFyX2xhcmdlIiwicmVwbGFjZSIsInVzZXJBdmF0YXIiLCJzcGxpdCIsImxlbmd0aCIsIiRhcHBseSIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInRpdGxlIiwidXNlcm5hbWUiLCJzaG93TmF2aWdhdGlvbkJhckxvYWRpbmciLCJyZXF1ZXN0IiwiJGludm9rZSIsImhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVFOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFMQTs7O0lBT3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFFbkJDLEksR0FBTztBQUNMQyxZQUFNO0FBQ0pDLGlCQUFTLEtBREw7QUFFSkMsaUJBQVMsS0FGTDtBQUdKQyxrQkFBVSxLQUhOO0FBSUpDLGdCQUFRLEtBSko7QUFLSkMsYUFBSztBQUxEO0FBUVI7QUFUTyxLLFFBVVJDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLGFBQVksRUFBQyxnQkFBZSxFQUFoQixFQUFtQix3QkFBdUIsTUFBMUMsRUFBYixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxvQ0FEUTtBQUVSQztBQUZRLEs7O0FBZFY7Ozs7OzRCQWtCU0MsTyxFQUFTO0FBQUE7O0FBQ2hCLFVBQUlDLEtBQUtELFFBQVFDLEVBQWpCO0FBQ0EsVUFBSUMsTUFBTSxZQUFJQyxPQUFkO0FBQ0EsVUFBSUMsU0FBUztBQUNYSCxZQUFJQTtBQURPLE9BQWI7QUFHQSxzQkFBS0ksR0FBTCxDQUFTO0FBQ1BILGFBQUtBLEdBREU7QUFFUEUsZ0JBQVFBLE1BRkQ7QUFHUEUsY0FBTTtBQUhDLE9BQVQsRUFJR0MsSUFKSCxDQUlRLFVBQUNwQixJQUFELEVBQVU7QUFDaEI7QUFDQSxZQUFJcUIsT0FBTyxJQUFJQyxJQUFKLENBQVN0QixLQUFLdUIsT0FBTCxHQUFlLElBQXhCLENBQVg7QUFDQXZCLGFBQUt1QixPQUFMLEdBQWVGLEtBQUtHLGNBQUwsRUFBZjtBQUNBO0FBQ0F4QixhQUFLeUIsWUFBTCxHQUFvQnpCLEtBQUt5QixZQUFMLENBQWtCQyxPQUFsQixDQUEwQixJQUExQixFQUFnQyxVQUFoQyxDQUFwQjs7QUFFQSxZQUFJQyxhQUFhM0IsS0FBS3lCLFlBQUwsQ0FBa0JHLEtBQWxCLENBQXdCLE9BQXhCLENBQWpCOztBQUVBLFlBQUlELFdBQVdFLE1BQVgsR0FBb0IsQ0FBeEIsRUFBMkI7QUFDekI3QixlQUFLeUIsWUFBTCxHQUFvQnpCLEtBQUt5QixZQUFMLENBQWtCQyxPQUFsQixDQUEwQixPQUExQixFQUFtQyxRQUFuQyxDQUFwQjtBQUNELFNBRkQsTUFFTztBQUNMMUIsZUFBS3lCLFlBQUwsR0FBb0J6QixLQUFLeUIsWUFBTCxDQUFrQkMsT0FBbEIsQ0FBMEIsT0FBMUIsRUFBbUMsUUFBbkMsQ0FBcEI7QUFDRDs7QUFFRCxlQUFLekIsSUFBTCxHQUFZRCxJQUFaO0FBQ0EsZUFBSzhCLE1BQUw7QUFDQTtBQUNBLHVCQUFLQyxxQkFBTCxDQUEyQjtBQUN6QkMsaUJBQU8sT0FBSy9CLElBQUwsQ0FBVWdDO0FBRFEsU0FBM0I7QUFHRCxPQXpCRDtBQTBCRDtBQUNEOzs7OzJCQUNRcEIsTyxFQUFTO0FBQ2Y7QUFDQSxxQkFBS3FCLHdCQUFMO0FBQ0EsV0FBS0MsT0FBTCxDQUFhdEIsT0FBYjs7QUFFQTtBQUNBLFdBQUt1QixPQUFMLENBQWEsV0FBYixFQUEwQixTQUExQixFQUFxQ3ZCLE9BQXJDO0FBQ0Q7QUFDRDs7Ozs4QkFDVztBQUNUO0FBQ0EscUJBQUt3Qix3QkFBTDtBQUNEOzs7O0VBakUrQixlQUFLQyxJOztrQkFBbEJ2QyxJIiwiZmlsZSI6InVzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLy8g5byV5YWl57uE5Lu2XG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB7IEFQSSwgVE9PTCB9IGZyb20gJ0AvY29tbW9uJ1xuICBpbXBvcnQgeyBIVFRQIH0gZnJvbSAnd2VweS11dGlscydcbiAgaW1wb3J0IFVzZXJQb3N0cyBmcm9tICcuLi9jb21wb25lbnRzL3VzZXJQb3N0cydcbiAgaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3RlcidcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAvLyDmqKHmnb/liJ3lp4vnu5HlrprmlbDmja5cbiAgICBkYXRhID0ge1xuICAgICAgdXNlcjoge1xuICAgICAgICB0d2l0dGVyOiBmYWxzZSxcbiAgICAgICAgd2Vic2l0ZTogZmFsc2UsXG4gICAgICAgIGxvY2F0aW9uOiBmYWxzZSxcbiAgICAgICAgZ2l0aHViOiBmYWxzZSxcbiAgICAgICAgYnRjOiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICAvLyDlo7DmmI7pobXpnaLkuK3lsIbopoHkvb/nlKjliLDnmoTnu4Tku7ZcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1widXNlclBvc3RzXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpzeW5jVXNlci5zeW5jXCI6XCJ1c2VyXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIHVzZXJQb3N0czogVXNlclBvc3RzLFxuICAgICAgZm9vdGVyOiBGb290ZXJcbiAgICB9XG4gICAgcmVxdWVzdCAob3B0aW9ucykge1xuICAgICAgbGV0IGlkID0gb3B0aW9ucy5pZFxuICAgICAgbGV0IHVybCA9IEFQSS5tZW1iZXJzXG4gICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICBpZDogaWRcbiAgICAgIH1cbiAgICAgIEhUVFAuZ2V0KHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICBtYXNrOiB0cnVlXG4gICAgICB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIC8vIOagvOW8j+WMluWKoOWFpeaXtumXtFxuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGRhdGEuY3JlYXRlZCAqIDEwMDApXG4gICAgICAgIGRhdGEuY3JlYXRlZCA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoKVxuICAgICAgICAvLyDlpITnkIblpLTlg49VUkxcbiAgICAgICAgZGF0YS5hdmF0YXJfbGFyZ2UgPSBkYXRhLmF2YXRhcl9sYXJnZS5yZXBsYWNlKCcvLycsICdodHRwczovLycpXG5cbiAgICAgICAgbGV0IHVzZXJBdmF0YXIgPSBkYXRhLmF2YXRhcl9sYXJnZS5zcGxpdCgnP3M9MjQnKVxuXG4gICAgICAgIGlmICh1c2VyQXZhdGFyLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBkYXRhLmF2YXRhcl9sYXJnZSA9IGRhdGEuYXZhdGFyX2xhcmdlLnJlcGxhY2UoJz9zPTI0JywgJz9zPTEwMCcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGF0YS5hdmF0YXJfbGFyZ2UgPSBkYXRhLmF2YXRhcl9sYXJnZS5yZXBsYWNlKCdfbWluaScsICdfbGFyZ2UnKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51c2VyID0gZGF0YVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIC8vIOiuvue9ruW9k+WJjemhtemdoueahOagh+mimFxuICAgICAgICB3ZXB5LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XG4gICAgICAgICAgdGl0bGU6IHRoaXMudXNlci51c2VybmFtZVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG4gICAgLy8g55Sf5ZG95ZGo5pyf5Ye95pWw77yM6aG16Z2i5Yqg6L29XG4gICAgb25Mb2FkIChvcHRpb25zKSB7XG4gICAgICAvLyDlr7zoiKrmnaEgTG9hZGluZ1xuICAgICAgd2VweS5zaG93TmF2aWdhdGlvbkJhckxvYWRpbmcoKVxuICAgICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMpXG5cbiAgICAgIC8vIOiwg+eUqOe7hOS7tiB1c2VyUG9zdHMg5Lit55qEIHJlcXVlc3Qg5pa55rOV77yM5bm25Lyg6YCS5Y+C5pWw5a+56LGhIG9wdGlvbnNcbiAgICAgIHRoaXMuJGludm9rZSgndXNlclBvc3RzJywgJ3JlcXVlc3QnLCBvcHRpb25zKVxuICAgIH1cbiAgICAvLyDnlJ/lkb3lkajmnJ/lh73mlbDvvIzliJ3mrKHmuLLmn5PlrozmiJBcbiAgICBvblJlYWR5ICgpIHtcbiAgICAgIC8vIOmakOiXj+WvvOiIquadoSBMb2FkaW5nXG4gICAgICB3ZXB5LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpXG4gICAgfVxuICB9XG4iXX0=