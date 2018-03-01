'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _commentEdit = require('./../components/commentEdit.js');

var _commentEdit2 = _interopRequireDefault(_commentEdit);

var _comment = require('./../components/comment.js');

var _comment2 = _interopRequireDefault(_comment);

var _footer = require('./../components/footer.js');

var _footer2 = _interopRequireDefault(_footer);

var _wxParse = require('./../common/wxParse/wxParse.js');

var _wxParse2 = _interopRequireDefault(_wxParse);

var _common = require('./../common/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// 引入组件


var Article = function (_wepy$page) {
  _inherits(Article, _wepy$page);

  function Article() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, Article);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Article.__proto__ || Object.getPrototypeOf(Article)).call.apply(_ref, [this].concat(args))), _this2), _this2.data = {
      article: {},
      avatar: {
        diff: '/static/img/node_normal.png',
        normal: '../images/node_normal.png'
      }
    }, _this2.methods = {
      wxParseTagATap: function wxParseTagATap() {
        console.log('点击了链接');
      },
      wxParseImgLoad: function wxParseImgLoad(event) {
        console.log('ImgLoad');
      },

      // 预览图片
      wxParseImgTap: function wxParseImgTap(e) {
        var that = this;
        var nowImgUrl = e.target.dataset.src;
        var tagFrom = e.target.dataset.from;
        if (typeof tagFrom !== 'undefined' && tagFrom.length > 0) {
          _wepy2.default.previewImage({
            current: nowImgUrl, // 当前显示图片的http链接
            urls: that.bindData[tagFrom].imageUrls // 需要预览的图片http链接列表
          });
        }
      },

      // 文章转发
      onShareAppMessage: function onShareAppMessage() {
        return {
          success: function success() {
            console.log('转发成功了');
          },
          fail: function fail() {
            console.log('转发失败');
          }
        };
      }
    }, _this2.components = {
      commentEdit: _commentEdit2.default,
      comment: _comment2.default,
      footer: _footer2.default
      // 请求数据
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }
  // 模板初始绑定数据

  // 声明页面中将要使用到的组件


  _createClass(Article, [{
    key: 'request',
    value: function request(options) {
      var _this = this;
      var id = options.id;
      var url = _common.URLS.topics.show + '?id=' + id;

      _common.HTTP.get(url).then(function (data) {
        _this.node = data;
        var type = 'avatar_large';
        // 头像URL替换
        data = _common.Utils.replace(data, type);

        var article = data[0];
        var rendered = article.content_rendered;

        _wxParse2.default.wxParse('rendered', 'html', rendered, _this, 0);

        _this.article = article;

        _this.$apply();
        // 设置当前页面的标题
        _wepy2.default.setNavigationBarTitle({
          title: _this.article.title
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
      // 调用组件 comment 中的 request 方法，并传递参数对象 options
      this.$invoke('comment', 'request', options);
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

  return Article;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Article , 'pages/article'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUuanMiXSwibmFtZXMiOlsiQXJ0aWNsZSIsImRhdGEiLCJhcnRpY2xlIiwiYXZhdGFyIiwiZGlmZiIsIm5vcm1hbCIsIm1ldGhvZHMiLCJ3eFBhcnNlVGFnQVRhcCIsImNvbnNvbGUiLCJsb2ciLCJ3eFBhcnNlSW1nTG9hZCIsImV2ZW50Iiwid3hQYXJzZUltZ1RhcCIsImUiLCJ0aGF0Iiwibm93SW1nVXJsIiwidGFyZ2V0IiwiZGF0YXNldCIsInNyYyIsInRhZ0Zyb20iLCJmcm9tIiwibGVuZ3RoIiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsInVybHMiLCJiaW5kRGF0YSIsImltYWdlVXJscyIsIm9uU2hhcmVBcHBNZXNzYWdlIiwic3VjY2VzcyIsImZhaWwiLCJjb21wb25lbnRzIiwiY29tbWVudEVkaXQiLCJjb21tZW50IiwiZm9vdGVyIiwib3B0aW9ucyIsIl90aGlzIiwiaWQiLCJ1cmwiLCJ0b3BpY3MiLCJzaG93IiwiZ2V0IiwidGhlbiIsIm5vZGUiLCJ0eXBlIiwicmVwbGFjZSIsInJlbmRlcmVkIiwiY29udGVudF9yZW5kZXJlZCIsInd4UGFyc2UiLCIkYXBwbHkiLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJ0aXRsZSIsInNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZyIsInJlcXVlc3QiLCIkaW52b2tlIiwiaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nIiwic3RvcFB1bGxEb3duUmVmcmVzaCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7O0FBTEE7OztJQU9xQkEsTzs7Ozs7Ozs7Ozs7Ozs7MkxBRW5CQyxJLEdBQU87QUFDTEMsZUFBUyxFQURKO0FBRUxDLGNBQVE7QUFDTkMsY0FBTSw2QkFEQTtBQUVOQyxnQkFBUTtBQUZGO0FBRkgsSyxTQU9QQyxPLEdBQVU7QUFDUkMsb0JBRFEsNEJBQ1U7QUFDaEJDLGdCQUFRQyxHQUFSLENBQVksT0FBWjtBQUNELE9BSE87QUFJUkMsb0JBSlEsMEJBSVFDLEtBSlIsRUFJZTtBQUNyQkgsZ0JBQVFDLEdBQVIsQ0FBWSxTQUFaO0FBQ0QsT0FOTzs7QUFPUjtBQUNBRyxtQkFSUSx5QkFRT0MsQ0FSUCxFQVFVO0FBQ2hCLFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQUlDLFlBQVlGLEVBQUVHLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQkMsR0FBakM7QUFDQSxZQUFJQyxVQUFVTixFQUFFRyxNQUFGLENBQVNDLE9BQVQsQ0FBaUJHLElBQS9CO0FBQ0EsWUFBSSxPQUFRRCxPQUFSLEtBQXFCLFdBQXJCLElBQW9DQSxRQUFRRSxNQUFSLEdBQWlCLENBQXpELEVBQTREO0FBQzFELHlCQUFLQyxZQUFMLENBQWtCO0FBQ2hCQyxxQkFBU1IsU0FETyxFQUNJO0FBQ3BCUyxrQkFBTVYsS0FBS1csUUFBTCxDQUFjTixPQUFkLEVBQXVCTyxTQUZiLENBRXVCO0FBRnZCLFdBQWxCO0FBSUQ7QUFDRixPQWxCTzs7QUFtQlI7QUFDQUMsdUJBcEJRLCtCQW9CYTtBQUNuQixlQUFPO0FBQ0xDLG1CQUFTLG1CQUFZO0FBQ25CcEIsb0JBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0QsV0FISTtBQUlMb0IsZ0JBQU0sZ0JBQVk7QUFDaEJyQixvQkFBUUMsR0FBUixDQUFZLE1BQVo7QUFDRDtBQU5JLFNBQVA7QUFRRDtBQTdCTyxLLFNBZ0NWcUIsVSxHQUFhO0FBQ1hDLHdDQURXO0FBRVhDLGdDQUZXO0FBR1hDO0FBRUY7QUFMYSxLOztBQXhDYjs7QUF1Q0E7Ozs7OzRCQU9TQyxPLEVBQVM7QUFDaEIsVUFBSUMsUUFBUSxJQUFaO0FBQ0EsVUFBSUMsS0FBS0YsUUFBUUUsRUFBakI7QUFDQSxVQUFJQyxNQUFNLGFBQUtDLE1BQUwsQ0FBWUMsSUFBWixHQUFtQixNQUFuQixHQUE0QkgsRUFBdEM7O0FBRUEsbUJBQUtJLEdBQUwsQ0FBU0gsR0FBVCxFQUFjSSxJQUFkLENBQW1CLFVBQUN4QyxJQUFELEVBQVU7QUFDM0JrQyxjQUFNTyxJQUFOLEdBQWF6QyxJQUFiO0FBQ0EsWUFBSTBDLE9BQU8sY0FBWDtBQUNBO0FBQ0ExQyxlQUFPLGNBQU0yQyxPQUFOLENBQWMzQyxJQUFkLEVBQW9CMEMsSUFBcEIsQ0FBUDs7QUFFQSxZQUFJekMsVUFBVUQsS0FBSyxDQUFMLENBQWQ7QUFDQSxZQUFJNEMsV0FBVzNDLFFBQVE0QyxnQkFBdkI7O0FBRUEsMEJBQVFDLE9BQVIsQ0FBZ0IsVUFBaEIsRUFBNEIsTUFBNUIsRUFBb0NGLFFBQXBDLEVBQThDVixLQUE5QyxFQUFxRCxDQUFyRDs7QUFFQUEsY0FBTWpDLE9BQU4sR0FBZ0JBLE9BQWhCOztBQUVBaUMsY0FBTWEsTUFBTjtBQUNBO0FBQ0EsdUJBQUtDLHFCQUFMLENBQTJCO0FBQ3pCQyxpQkFBT2YsTUFBTWpDLE9BQU4sQ0FBY2dEO0FBREksU0FBM0I7QUFHRCxPQWxCRDtBQW1CRDtBQUNEOzs7OzJCQUNRaEIsTyxFQUFTO0FBQ2Y7QUFDQSxxQkFBS2lCLHdCQUFMO0FBQ0EsVUFBSWhCLFFBQVEsSUFBWjtBQUNBQSxZQUFNaUIsT0FBTixDQUFjbEIsT0FBZDtBQUNBO0FBQ0EsV0FBS21CLE9BQUwsQ0FBYSxTQUFiLEVBQXdCLFNBQXhCLEVBQW1DbkIsT0FBbkM7QUFDRDtBQUNEOzs7OzhCQUNXO0FBQ1Q7QUFDQSxxQkFBS29CLHdCQUFMO0FBQ0Q7QUFDRDs7Ozt3Q0FDcUI7QUFDbkI7QUFDQSxxQkFBS0MsbUJBQUw7QUFDRDs7OztFQTFGa0MsZUFBS0MsSTs7a0JBQXJCeEQsTyIsImZpbGUiOiJhcnRpY2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIC8vIOW8leWFpee7hOS7tlxuICBpbXBvcnQgQ29tbWVudEVkaXQgZnJvbSAnLi4vY29tcG9uZW50cy9jb21tZW50RWRpdCdcbiAgaW1wb3J0IENvbW1lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9jb21tZW50J1xuICBpbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xuICBpbXBvcnQgV3hQYXJzZSBmcm9tICcuLi9jb21tb24vd3hQYXJzZS93eFBhcnNlJ1xuICBpbXBvcnQgeyBVdGlscywgVVJMUywgSFRUUCB9IGZyb20gJy4uL2NvbW1vbidcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBBcnRpY2xlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAvLyDmqKHmnb/liJ3lp4vnu5HlrprmlbDmja5cbiAgICBkYXRhID0ge1xuICAgICAgYXJ0aWNsZToge30sXG4gICAgICBhdmF0YXI6IHtcbiAgICAgICAgZGlmZjogJy9zdGF0aWMvaW1nL25vZGVfbm9ybWFsLnBuZycsXG4gICAgICAgIG5vcm1hbDogJy4uL2ltYWdlcy9ub2RlX25vcm1hbC5wbmcnXG4gICAgICB9XG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB3eFBhcnNlVGFnQVRhcCAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCfngrnlh7vkuobpk77mjqUnKVxuICAgICAgfSxcbiAgICAgIHd4UGFyc2VJbWdMb2FkIChldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZygnSW1nTG9hZCcpXG4gICAgICB9LFxuICAgICAgLy8g6aKE6KeI5Zu+54mHXG4gICAgICB3eFBhcnNlSW1nVGFwIChlKSB7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpc1xuICAgICAgICB2YXIgbm93SW1nVXJsID0gZS50YXJnZXQuZGF0YXNldC5zcmNcbiAgICAgICAgdmFyIHRhZ0Zyb20gPSBlLnRhcmdldC5kYXRhc2V0LmZyb21cbiAgICAgICAgaWYgKHR5cGVvZiAodGFnRnJvbSkgIT09ICd1bmRlZmluZWQnICYmIHRhZ0Zyb20ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHdlcHkucHJldmlld0ltYWdlKHtcbiAgICAgICAgICAgIGN1cnJlbnQ6IG5vd0ltZ1VybCwgLy8g5b2T5YmN5pi+56S65Zu+54mH55qEaHR0cOmTvuaOpVxuICAgICAgICAgICAgdXJsczogdGhhdC5iaW5kRGF0YVt0YWdGcm9tXS5pbWFnZVVybHMgLy8g6ZyA6KaB6aKE6KeI55qE5Zu+54mHaHR0cOmTvuaOpeWIl+ihqFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyDmlofnq6Dovazlj5FcbiAgICAgIG9uU2hhcmVBcHBNZXNzYWdlICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygn6L2s5Y+R5oiQ5Yqf5LqGJylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfovazlj5HlpLHotKUnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyDlo7DmmI7pobXpnaLkuK3lsIbopoHkvb/nlKjliLDnmoTnu4Tku7ZcbiAgICBjb21wb25lbnRzID0ge1xuICAgICAgY29tbWVudEVkaXQ6IENvbW1lbnRFZGl0LFxuICAgICAgY29tbWVudDogQ29tbWVudCxcbiAgICAgIGZvb3RlcjogRm9vdGVyXG4gICAgfVxuICAgIC8vIOivt+axguaVsOaNrlxuICAgIHJlcXVlc3QgKG9wdGlvbnMpIHtcbiAgICAgIGxldCBfdGhpcyA9IHRoaXNcbiAgICAgIGxldCBpZCA9IG9wdGlvbnMuaWRcbiAgICAgIGxldCB1cmwgPSBVUkxTLnRvcGljcy5zaG93ICsgJz9pZD0nICsgaWRcblxuICAgICAgSFRUUC5nZXQodXJsKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIF90aGlzLm5vZGUgPSBkYXRhXG4gICAgICAgIGxldCB0eXBlID0gJ2F2YXRhcl9sYXJnZSdcbiAgICAgICAgLy8g5aS05YOPVVJM5pu/5o2iXG4gICAgICAgIGRhdGEgPSBVdGlscy5yZXBsYWNlKGRhdGEsIHR5cGUpXG5cbiAgICAgICAgbGV0IGFydGljbGUgPSBkYXRhWzBdXG4gICAgICAgIGxldCByZW5kZXJlZCA9IGFydGljbGUuY29udGVudF9yZW5kZXJlZFxuXG4gICAgICAgIFd4UGFyc2Uud3hQYXJzZSgncmVuZGVyZWQnLCAnaHRtbCcsIHJlbmRlcmVkLCBfdGhpcywgMClcblxuICAgICAgICBfdGhpcy5hcnRpY2xlID0gYXJ0aWNsZVxuXG4gICAgICAgIF90aGlzLiRhcHBseSgpXG4gICAgICAgIC8vIOiuvue9ruW9k+WJjemhtemdoueahOagh+mimFxuICAgICAgICB3ZXB5LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XG4gICAgICAgICAgdGl0bGU6IF90aGlzLmFydGljbGUudGl0bGVcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuICAgIC8vIOeUn+WRveWRqOacn+WHveaVsO+8jOmhtemdouWKoOi9vVxuICAgIG9uTG9hZCAob3B0aW9ucykge1xuICAgICAgLy8g5a+86Iiq5p2hIExvYWRpbmdcbiAgICAgIHdlcHkuc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nKClcbiAgICAgIGxldCBfdGhpcyA9IHRoaXNcbiAgICAgIF90aGlzLnJlcXVlc3Qob3B0aW9ucylcbiAgICAgIC8vIOiwg+eUqOe7hOS7tiBjb21tZW50IOS4reeahCByZXF1ZXN0IOaWueazle+8jOW5tuS8oOmAkuWPguaVsOWvueixoSBvcHRpb25zXG4gICAgICB0aGlzLiRpbnZva2UoJ2NvbW1lbnQnLCAncmVxdWVzdCcsIG9wdGlvbnMpXG4gICAgfVxuICAgIC8vIOeUn+WRveWRqOacn+WHveaVsO+8jOWIneasoea4suafk+WujOaIkFxuICAgIG9uUmVhZHkgKCkge1xuICAgICAgLy8g6ZqQ6JeP5a+86Iiq5p2hIExvYWRpbmdcbiAgICAgIHdlcHkuaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKClcbiAgICB9XG4gICAgLy8g55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAgb25QdWxsRG93blJlZnJlc2ggKCkge1xuICAgICAgLy8g5Yqg6L295pWw5o2u5a6M5oiQ5ZCO5YGc5q2i5LiL5ouJ54q25oCBXG4gICAgICB3ZXB5LnN0b3BQdWxsRG93blJlZnJlc2goKVxuICAgIH1cbiAgfVxuIl19