'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _userPosts = require('./../components/userPosts.js');

var _userPosts2 = _interopRequireDefault(_userPosts);

var _footer = require('./../components/footer.js');

var _footer2 = _interopRequireDefault(_footer);

var _common = require('./../common/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// 引入组件


var User = function (_wepy$page) {
  _inherits(User, _wepy$page);

  function User() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, User);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = User.__proto__ || Object.getPrototypeOf(User)).call.apply(_ref, [this].concat(args))), _this2), _this2.data = {
      user: {
        twitter: false,
        website: false,
        location: false,
        github: false,
        btc: false
      }
      // 声明页面中将要使用到的组件
    }, _this2.$repeat = {}, _this2.$props = { "userPosts": { "xmlns:v-bind": "", "v-bind:syncUser.sync": "user" } }, _this2.$events = {}, _this2.components = {
      userPosts: _userPosts2.default,
      footer: _footer2.default
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }
  // 模板初始绑定数据


  _createClass(User, [{
    key: 'request',
    value: function request(options) {
      var _this = this;
      var id = options.id;
      var url = _common.URLS.members + '?id=' + id;

      _common.HTTP.get(url).then(function (data) {
        // 格式化加入时间
        var date = new Date(data.created * 1000);
        data.created = date.toLocaleString();
        // 处理头像URL
        data.avatar_large = data.avatar_large.replace('//', 'https://');

        _this.user = data;
        _this.$apply();
        // 设置当前页面的标题
        _wepy2.default.setNavigationBarTitle({
          title: _this.user.username
        });
      });
    }
    // 生命周期函数，页面加载

  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      // 导航条 Loading
      _wepy2.default.showNavigationBarLoading();
      var _this = this;
      _this.request(options);

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsiVXNlciIsImRhdGEiLCJ1c2VyIiwidHdpdHRlciIsIndlYnNpdGUiLCJsb2NhdGlvbiIsImdpdGh1YiIsImJ0YyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInVzZXJQb3N0cyIsImZvb3RlciIsIm9wdGlvbnMiLCJfdGhpcyIsImlkIiwidXJsIiwibWVtYmVycyIsImdldCIsInRoZW4iLCJkYXRlIiwiRGF0ZSIsImNyZWF0ZWQiLCJ0b0xvY2FsZVN0cmluZyIsImF2YXRhcl9sYXJnZSIsInJlcGxhY2UiLCIkYXBwbHkiLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJ0aXRsZSIsInVzZXJuYW1lIiwic2hvd05hdmlnYXRpb25CYXJMb2FkaW5nIiwicmVxdWVzdCIsIiRpbnZva2UiLCJoaWRlTmF2aWdhdGlvbkJhckxvYWRpbmciLCJzdG9wUHVsbERvd25SZWZyZXNoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUU7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7OztBQUpBOzs7SUFNcUJBLEk7Ozs7Ozs7Ozs7Ozs7O3FMQUVuQkMsSSxHQUFPO0FBQ0xDLFlBQU07QUFDSkMsaUJBQVMsS0FETDtBQUVKQyxpQkFBUyxLQUZMO0FBR0pDLGtCQUFVLEtBSE47QUFJSkMsZ0JBQVEsS0FKSjtBQUtKQyxhQUFLO0FBTEQ7QUFRUjtBQVRPLEssU0FVUkMsTyxHQUFVLEUsU0FDYkMsTSxHQUFTLEVBQUMsYUFBWSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHdCQUF1QixNQUExQyxFQUFiLEUsU0FDVEMsTyxHQUFVLEUsU0FDVEMsVSxHQUFhO0FBQ1JDLG9DQURRO0FBRVJDO0FBRlEsSzs7QUFkVjs7Ozs7NEJBa0JTQyxPLEVBQVM7QUFDaEIsVUFBSUMsUUFBUSxJQUFaO0FBQ0EsVUFBSUMsS0FBS0YsUUFBUUUsRUFBakI7QUFDQSxVQUFJQyxNQUFNLGFBQUtDLE9BQUwsR0FBZSxNQUFmLEdBQXdCRixFQUFsQzs7QUFFQSxtQkFBS0csR0FBTCxDQUFTRixHQUFULEVBQWNHLElBQWQsQ0FBbUIsVUFBQ25CLElBQUQsRUFBVTtBQUMzQjtBQUNBLFlBQUlvQixPQUFPLElBQUlDLElBQUosQ0FBU3JCLEtBQUtzQixPQUFMLEdBQWUsSUFBeEIsQ0FBWDtBQUNBdEIsYUFBS3NCLE9BQUwsR0FBZUYsS0FBS0csY0FBTCxFQUFmO0FBQ0E7QUFDQXZCLGFBQUt3QixZQUFMLEdBQW9CeEIsS0FBS3dCLFlBQUwsQ0FBa0JDLE9BQWxCLENBQTBCLElBQTFCLEVBQWdDLFVBQWhDLENBQXBCOztBQUVBWCxjQUFNYixJQUFOLEdBQWFELElBQWI7QUFDQWMsY0FBTVksTUFBTjtBQUNBO0FBQ0EsdUJBQUtDLHFCQUFMLENBQTJCO0FBQ3pCQyxpQkFBT2QsTUFBTWIsSUFBTixDQUFXNEI7QUFETyxTQUEzQjtBQUdELE9BYkQ7QUFjRDtBQUNEOzs7OzJCQUNRaEIsTyxFQUFTO0FBQ2Y7QUFDQSxxQkFBS2lCLHdCQUFMO0FBQ0EsVUFBSWhCLFFBQVEsSUFBWjtBQUNBQSxZQUFNaUIsT0FBTixDQUFjbEIsT0FBZDs7QUFFQTtBQUNBLFdBQUttQixPQUFMLENBQWEsV0FBYixFQUEwQixTQUExQixFQUFxQ25CLE9BQXJDO0FBQ0Q7QUFDRDs7Ozs4QkFDVztBQUNUO0FBQ0EscUJBQUtvQix3QkFBTDtBQUNEO0FBQ0Q7Ozs7d0NBQ3FCO0FBQ25CO0FBQ0EscUJBQUtDLG1CQUFMO0FBQ0Q7Ozs7RUExRCtCLGVBQUtDLEk7O2tCQUFsQnBDLEkiLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAvLyDlvJXlhaXnu4Tku7ZcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IFVzZXJQb3N0cyBmcm9tICcuLi9jb21wb25lbnRzL3VzZXJQb3N0cydcbiAgaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3RlcidcbiAgaW1wb3J0IHsgVVJMUywgSFRUUCB9IGZyb20gJy4uL2NvbW1vbidcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAvLyDmqKHmnb/liJ3lp4vnu5HlrprmlbDmja5cbiAgICBkYXRhID0ge1xuICAgICAgdXNlcjoge1xuICAgICAgICB0d2l0dGVyOiBmYWxzZSxcbiAgICAgICAgd2Vic2l0ZTogZmFsc2UsXG4gICAgICAgIGxvY2F0aW9uOiBmYWxzZSxcbiAgICAgICAgZ2l0aHViOiBmYWxzZSxcbiAgICAgICAgYnRjOiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICAvLyDlo7DmmI7pobXpnaLkuK3lsIbopoHkvb/nlKjliLDnmoTnu4Tku7ZcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1widXNlclBvc3RzXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpzeW5jVXNlci5zeW5jXCI6XCJ1c2VyXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIHVzZXJQb3N0czogVXNlclBvc3RzLFxuICAgICAgZm9vdGVyOiBGb290ZXJcbiAgICB9XG4gICAgcmVxdWVzdCAob3B0aW9ucykge1xuICAgICAgbGV0IF90aGlzID0gdGhpc1xuICAgICAgbGV0IGlkID0gb3B0aW9ucy5pZFxuICAgICAgbGV0IHVybCA9IFVSTFMubWVtYmVycyArICc/aWQ9JyArIGlkXG5cbiAgICAgIEhUVFAuZ2V0KHVybCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAvLyDmoLzlvI/ljJbliqDlhaXml7bpl7RcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShkYXRhLmNyZWF0ZWQgKiAxMDAwKVxuICAgICAgICBkYXRhLmNyZWF0ZWQgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKClcbiAgICAgICAgLy8g5aSE55CG5aS05YOPVVJMXG4gICAgICAgIGRhdGEuYXZhdGFyX2xhcmdlID0gZGF0YS5hdmF0YXJfbGFyZ2UucmVwbGFjZSgnLy8nLCAnaHR0cHM6Ly8nKVxuXG4gICAgICAgIF90aGlzLnVzZXIgPSBkYXRhXG4gICAgICAgIF90aGlzLiRhcHBseSgpXG4gICAgICAgIC8vIOiuvue9ruW9k+WJjemhtemdoueahOagh+mimFxuICAgICAgICB3ZXB5LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XG4gICAgICAgICAgdGl0bGU6IF90aGlzLnVzZXIudXNlcm5hbWVcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuICAgIC8vIOeUn+WRveWRqOacn+WHveaVsO+8jOmhtemdouWKoOi9vVxuICAgIG9uTG9hZCAob3B0aW9ucykge1xuICAgICAgLy8g5a+86Iiq5p2hIExvYWRpbmdcbiAgICAgIHdlcHkuc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nKClcbiAgICAgIGxldCBfdGhpcyA9IHRoaXNcbiAgICAgIF90aGlzLnJlcXVlc3Qob3B0aW9ucylcblxuICAgICAgLy8g6LCD55So57uE5Lu2IHVzZXJQb3N0cyDkuK3nmoQgcmVxdWVzdCDmlrnms5XvvIzlubbkvKDpgJLlj4LmlbDlr7nosaEgb3B0aW9uc1xuICAgICAgdGhpcy4kaW52b2tlKCd1c2VyUG9zdHMnLCAncmVxdWVzdCcsIG9wdGlvbnMpXG4gICAgfVxuICAgIC8vIOeUn+WRveWRqOacn+WHveaVsO+8jOWIneasoea4suafk+WujOaIkFxuICAgIG9uUmVhZHkgKCkge1xuICAgICAgLy8g6ZqQ6JeP5a+86Iiq5p2hIExvYWRpbmdcbiAgICAgIHdlcHkuaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKClcbiAgICB9XG4gICAgLy8g55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAgb25QdWxsRG93blJlZnJlc2ggKCkge1xuICAgICAgLy8g5Yqg6L295pWw5o2u5a6M5oiQ5ZCO5YGc5q2i5LiL5ouJ54q25oCBXG4gICAgICB3ZXB5LnN0b3BQdWxsRG93blJlZnJlc2goKVxuICAgIH1cbiAgfVxuIl19