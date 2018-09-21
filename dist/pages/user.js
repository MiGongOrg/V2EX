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
    // 监听用户下拉动作

  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      // 加载数据完成后停止下拉状态
      _wepy2.default.stopPullDownRefresh();
    }
  }]);

  return User;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(User , 'pages/user'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsiVXNlciIsImRhdGEiLCJ1c2VyIiwidHdpdHRlciIsIndlYnNpdGUiLCJsb2NhdGlvbiIsImdpdGh1YiIsImJ0YyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInVzZXJQb3N0cyIsImZvb3RlciIsIm9wdGlvbnMiLCJpZCIsInVybCIsIm1lbWJlcnMiLCJwYXJhbXMiLCJnZXQiLCJtYXNrIiwidGhlbiIsImRhdGUiLCJEYXRlIiwiY3JlYXRlZCIsInRvTG9jYWxlU3RyaW5nIiwiYXZhdGFyX2xhcmdlIiwicmVwbGFjZSIsInVzZXJBdmF0YXIiLCJzcGxpdCIsImxlbmd0aCIsIiRhcHBseSIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInRpdGxlIiwidXNlcm5hbWUiLCJzaG93TmF2aWdhdGlvbkJhckxvYWRpbmciLCJyZXF1ZXN0IiwiJGludm9rZSIsImhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZyIsInN0b3BQdWxsRG93blJlZnJlc2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFRTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBTEE7OztJQU9xQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBRW5CQyxJLEdBQU87QUFDTEMsWUFBTTtBQUNKQyxpQkFBUyxLQURMO0FBRUpDLGlCQUFTLEtBRkw7QUFHSkMsa0JBQVUsS0FITjtBQUlKQyxnQkFBUSxLQUpKO0FBS0pDLGFBQUs7QUFMRDtBQVFSO0FBVE8sSyxRQVVSQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxhQUFZLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsd0JBQXVCLE1BQTFDLEVBQWIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsb0NBRFE7QUFFUkM7QUFGUSxLOztBQWRWOzs7Ozs0QkFrQlNDLE8sRUFBUztBQUFBOztBQUNoQixVQUFJQyxLQUFLRCxRQUFRQyxFQUFqQjtBQUNBLFVBQUlDLE1BQU0sWUFBSUMsT0FBZDtBQUNBLFVBQUlDLFNBQVM7QUFDWEgsWUFBSUE7QUFETyxPQUFiO0FBR0Esc0JBQUtJLEdBQUwsQ0FBUztBQUNQSCxhQUFLQSxHQURFO0FBRVBFLGdCQUFRQSxNQUZEO0FBR1BFLGNBQU07QUFIQyxPQUFULEVBSUdDLElBSkgsQ0FJUSxVQUFDcEIsSUFBRCxFQUFVO0FBQ2hCO0FBQ0EsWUFBSXFCLE9BQU8sSUFBSUMsSUFBSixDQUFTdEIsS0FBS3VCLE9BQUwsR0FBZSxJQUF4QixDQUFYO0FBQ0F2QixhQUFLdUIsT0FBTCxHQUFlRixLQUFLRyxjQUFMLEVBQWY7QUFDQTtBQUNBeEIsYUFBS3lCLFlBQUwsR0FBb0J6QixLQUFLeUIsWUFBTCxDQUFrQkMsT0FBbEIsQ0FBMEIsSUFBMUIsRUFBZ0MsVUFBaEMsQ0FBcEI7O0FBRUEsWUFBSUMsYUFBYTNCLEtBQUt5QixZQUFMLENBQWtCRyxLQUFsQixDQUF3QixPQUF4QixDQUFqQjs7QUFFQSxZQUFJRCxXQUFXRSxNQUFYLEdBQW9CLENBQXhCLEVBQTJCO0FBQ3pCN0IsZUFBS3lCLFlBQUwsR0FBb0J6QixLQUFLeUIsWUFBTCxDQUFrQkMsT0FBbEIsQ0FBMEIsT0FBMUIsRUFBbUMsUUFBbkMsQ0FBcEI7QUFDRCxTQUZELE1BRU87QUFDTDFCLGVBQUt5QixZQUFMLEdBQW9CekIsS0FBS3lCLFlBQUwsQ0FBa0JDLE9BQWxCLENBQTBCLE9BQTFCLEVBQW1DLFFBQW5DLENBQXBCO0FBQ0Q7O0FBRUQsZUFBS3pCLElBQUwsR0FBWUQsSUFBWjtBQUNBLGVBQUs4QixNQUFMO0FBQ0E7QUFDQSx1QkFBS0MscUJBQUwsQ0FBMkI7QUFDekJDLGlCQUFPLE9BQUsvQixJQUFMLENBQVVnQztBQURRLFNBQTNCO0FBR0QsT0F6QkQ7QUEwQkQ7QUFDRDs7OzsyQkFDUXBCLE8sRUFBUztBQUNmO0FBQ0EscUJBQUtxQix3QkFBTDtBQUNBLFdBQUtDLE9BQUwsQ0FBYXRCLE9BQWI7O0FBRUE7QUFDQSxXQUFLdUIsT0FBTCxDQUFhLFdBQWIsRUFBMEIsU0FBMUIsRUFBcUN2QixPQUFyQztBQUNEO0FBQ0Q7Ozs7OEJBQ1c7QUFDVDtBQUNBLHFCQUFLd0Isd0JBQUw7QUFDRDtBQUNEOzs7O3dDQUNxQjtBQUNuQjtBQUNBLHFCQUFLQyxtQkFBTDtBQUNEOzs7O0VBdEUrQixlQUFLQyxJOztrQkFBbEJ4QyxJIiwiZmlsZSI6InVzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLy8g5byV5YWl57uE5Lu2XG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB7IEFQSSwgVE9PTCB9IGZyb20gJ0AvY29tbW9uJ1xuICBpbXBvcnQgeyBIVFRQIH0gZnJvbSAnd2VweS11dGlscydcbiAgaW1wb3J0IFVzZXJQb3N0cyBmcm9tICcuLi9jb21wb25lbnRzL3VzZXJQb3N0cydcbiAgaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3RlcidcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAvLyDmqKHmnb/liJ3lp4vnu5HlrprmlbDmja5cbiAgICBkYXRhID0ge1xuICAgICAgdXNlcjoge1xuICAgICAgICB0d2l0dGVyOiBmYWxzZSxcbiAgICAgICAgd2Vic2l0ZTogZmFsc2UsXG4gICAgICAgIGxvY2F0aW9uOiBmYWxzZSxcbiAgICAgICAgZ2l0aHViOiBmYWxzZSxcbiAgICAgICAgYnRjOiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICAvLyDlo7DmmI7pobXpnaLkuK3lsIbopoHkvb/nlKjliLDnmoTnu4Tku7ZcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1widXNlclBvc3RzXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpzeW5jVXNlci5zeW5jXCI6XCJ1c2VyXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIHVzZXJQb3N0czogVXNlclBvc3RzLFxuICAgICAgZm9vdGVyOiBGb290ZXJcbiAgICB9XG4gICAgcmVxdWVzdCAob3B0aW9ucykge1xuICAgICAgbGV0IGlkID0gb3B0aW9ucy5pZFxuICAgICAgbGV0IHVybCA9IEFQSS5tZW1iZXJzXG4gICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICBpZDogaWRcbiAgICAgIH1cbiAgICAgIEhUVFAuZ2V0KHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICBtYXNrOiB0cnVlXG4gICAgICB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIC8vIOagvOW8j+WMluWKoOWFpeaXtumXtFxuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGRhdGEuY3JlYXRlZCAqIDEwMDApXG4gICAgICAgIGRhdGEuY3JlYXRlZCA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoKVxuICAgICAgICAvLyDlpITnkIblpLTlg49VUkxcbiAgICAgICAgZGF0YS5hdmF0YXJfbGFyZ2UgPSBkYXRhLmF2YXRhcl9sYXJnZS5yZXBsYWNlKCcvLycsICdodHRwczovLycpXG5cbiAgICAgICAgbGV0IHVzZXJBdmF0YXIgPSBkYXRhLmF2YXRhcl9sYXJnZS5zcGxpdCgnP3M9MjQnKVxuXG4gICAgICAgIGlmICh1c2VyQXZhdGFyLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBkYXRhLmF2YXRhcl9sYXJnZSA9IGRhdGEuYXZhdGFyX2xhcmdlLnJlcGxhY2UoJz9zPTI0JywgJz9zPTEwMCcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGF0YS5hdmF0YXJfbGFyZ2UgPSBkYXRhLmF2YXRhcl9sYXJnZS5yZXBsYWNlKCdfbWluaScsICdfbGFyZ2UnKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51c2VyID0gZGF0YVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIC8vIOiuvue9ruW9k+WJjemhtemdoueahOagh+mimFxuICAgICAgICB3ZXB5LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XG4gICAgICAgICAgdGl0bGU6IHRoaXMudXNlci51c2VybmFtZVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG4gICAgLy8g55Sf5ZG95ZGo5pyf5Ye95pWw77yM6aG16Z2i5Yqg6L29XG4gICAgb25Mb2FkIChvcHRpb25zKSB7XG4gICAgICAvLyDlr7zoiKrmnaEgTG9hZGluZ1xuICAgICAgd2VweS5zaG93TmF2aWdhdGlvbkJhckxvYWRpbmcoKVxuICAgICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMpXG5cbiAgICAgIC8vIOiwg+eUqOe7hOS7tiB1c2VyUG9zdHMg5Lit55qEIHJlcXVlc3Qg5pa55rOV77yM5bm25Lyg6YCS5Y+C5pWw5a+56LGhIG9wdGlvbnNcbiAgICAgIHRoaXMuJGludm9rZSgndXNlclBvc3RzJywgJ3JlcXVlc3QnLCBvcHRpb25zKVxuICAgIH1cbiAgICAvLyDnlJ/lkb3lkajmnJ/lh73mlbDvvIzliJ3mrKHmuLLmn5PlrozmiJBcbiAgICBvblJlYWR5ICgpIHtcbiAgICAgIC8vIOmakOiXj+WvvOiIquadoSBMb2FkaW5nXG4gICAgICB3ZXB5LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpXG4gICAgfVxuICAgIC8vIOebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgIG9uUHVsbERvd25SZWZyZXNoICgpIHtcbiAgICAgIC8vIOWKoOi9veaVsOaNruWujOaIkOWQjuWBnOatouS4i+aLieeKtuaAgVxuICAgICAgd2VweS5zdG9wUHVsbERvd25SZWZyZXNoKClcbiAgICB9XG4gIH1cbiJdfQ==