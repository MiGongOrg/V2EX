'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _common = require('./../common/index.js');

var _wepyUtils = require('./../npm/wepy-utils/index.js');

var _commentEdit = require('./../components/commentEdit.js');

var _commentEdit2 = _interopRequireDefault(_commentEdit);

var _comment = require('./../components/comment.js');

var _comment2 = _interopRequireDefault(_comment);

var _footer = require('./../components/footer.js');

var _footer2 = _interopRequireDefault(_footer);

var _wxParse = require('./../common/wxParse/wxParse.js');

var _wxParse2 = _interopRequireDefault(_wxParse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Article = function (_wepy$page) {
  _inherits(Article, _wepy$page);

  function Article() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Article);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Article.__proto__ || Object.getPrototypeOf(Article)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      article: {},
      avatar: {
        diff: '/static/img/node_normal.png',
        normal: '../images/node_normal.png'
      }
    }, _this.methods = {
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
    }, _this.components = {
      commentEdit: _commentEdit2.default,
      comment: _comment2.default,
      footer: _footer2.default
      // 请求数据
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // 模板初始绑定数据

  // 声明页面中将要使用到的组件


  _createClass(Article, [{
    key: 'request',
    value: function request(options) {
      var _this2 = this;

      var id = options.id;
      var url = _common.API.topics.show;
      var params = {
        id: id
      };

      _wepyUtils.HTTP.get({
        url: url,
        params: params,
        mask: true
      }).then(function (data) {
        _this2.node = data;
        var type = 'avatar_large';
        // 头像URL替换
        data = _common.TOOL.replace(data, type);
        var article = data[0];
        var rendered = article.content_rendered;

        _wxParse2.default.wxParse('rendered', 'html', rendered, _this2, 0);

        _this2.article = article;

        _this2.$apply();
        // 设置当前页面的标题
        _wepy2.default.setNavigationBarTitle({
          title: _this2.article.title
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUuanMiXSwibmFtZXMiOlsiQXJ0aWNsZSIsImRhdGEiLCJhcnRpY2xlIiwiYXZhdGFyIiwiZGlmZiIsIm5vcm1hbCIsIm1ldGhvZHMiLCJ3eFBhcnNlVGFnQVRhcCIsImNvbnNvbGUiLCJsb2ciLCJ3eFBhcnNlSW1nTG9hZCIsImV2ZW50Iiwid3hQYXJzZUltZ1RhcCIsImUiLCJ0aGF0Iiwibm93SW1nVXJsIiwidGFyZ2V0IiwiZGF0YXNldCIsInNyYyIsInRhZ0Zyb20iLCJmcm9tIiwibGVuZ3RoIiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsInVybHMiLCJiaW5kRGF0YSIsImltYWdlVXJscyIsIm9uU2hhcmVBcHBNZXNzYWdlIiwic3VjY2VzcyIsImZhaWwiLCJjb21wb25lbnRzIiwiY29tbWVudEVkaXQiLCJjb21tZW50IiwiZm9vdGVyIiwib3B0aW9ucyIsImlkIiwidXJsIiwidG9waWNzIiwic2hvdyIsInBhcmFtcyIsImdldCIsIm1hc2siLCJ0aGVuIiwibm9kZSIsInR5cGUiLCJyZXBsYWNlIiwicmVuZGVyZWQiLCJjb250ZW50X3JlbmRlcmVkIiwid3hQYXJzZSIsIiRhcHBseSIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInRpdGxlIiwic2hvd05hdmlnYXRpb25CYXJMb2FkaW5nIiwicmVxdWVzdCIsIiRpbnZva2UiLCJoaWRlTmF2aWdhdGlvbkJhckxvYWRpbmciLCJzdG9wUHVsbERvd25SZWZyZXNoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFFbkJDLEksR0FBTztBQUNMQyxlQUFTLEVBREo7QUFFTEMsY0FBUTtBQUNOQyxjQUFNLDZCQURBO0FBRU5DLGdCQUFRO0FBRkY7QUFGSCxLLFFBT1BDLE8sR0FBVTtBQUNSQyxvQkFEUSw0QkFDVTtBQUNoQkMsZ0JBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0QsT0FITztBQUlSQyxvQkFKUSwwQkFJUUMsS0FKUixFQUllO0FBQ3JCSCxnQkFBUUMsR0FBUixDQUFZLFNBQVo7QUFDRCxPQU5POztBQU9SO0FBQ0FHLG1CQVJRLHlCQVFPQyxDQVJQLEVBUVU7QUFDaEIsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSUMsWUFBWUYsRUFBRUcsTUFBRixDQUFTQyxPQUFULENBQWlCQyxHQUFqQztBQUNBLFlBQUlDLFVBQVVOLEVBQUVHLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQkcsSUFBL0I7QUFDQSxZQUFJLE9BQVFELE9BQVIsS0FBcUIsV0FBckIsSUFBb0NBLFFBQVFFLE1BQVIsR0FBaUIsQ0FBekQsRUFBNEQ7QUFDMUQseUJBQUtDLFlBQUwsQ0FBa0I7QUFDaEJDLHFCQUFTUixTQURPLEVBQ0k7QUFDcEJTLGtCQUFNVixLQUFLVyxRQUFMLENBQWNOLE9BQWQsRUFBdUJPLFNBRmIsQ0FFdUI7QUFGdkIsV0FBbEI7QUFJRDtBQUNGLE9BbEJPOztBQW1CUjtBQUNBQyx1QkFwQlEsK0JBb0JhO0FBQ25CLGVBQU87QUFDTEMsbUJBQVMsbUJBQVk7QUFDbkJwQixvQkFBUUMsR0FBUixDQUFZLE9BQVo7QUFDRCxXQUhJO0FBSUxvQixnQkFBTSxnQkFBWTtBQUNoQnJCLG9CQUFRQyxHQUFSLENBQVksTUFBWjtBQUNEO0FBTkksU0FBUDtBQVFEO0FBN0JPLEssUUFnQ1ZxQixVLEdBQWE7QUFDWEMsd0NBRFc7QUFFWEMsZ0NBRlc7QUFHWEM7QUFFRjtBQUxhLEs7O0FBeENiOztBQXVDQTs7Ozs7NEJBT1NDLE8sRUFBUztBQUFBOztBQUNoQixVQUFJQyxLQUFLRCxRQUFRQyxFQUFqQjtBQUNBLFVBQUlDLE1BQU0sWUFBSUMsTUFBSixDQUFXQyxJQUFyQjtBQUNBLFVBQUlDLFNBQVM7QUFDWEosWUFBSUE7QUFETyxPQUFiOztBQUlBLHNCQUFLSyxHQUFMLENBQVM7QUFDUEosYUFBS0EsR0FERTtBQUVQRyxnQkFBUUEsTUFGRDtBQUdQRSxjQUFNO0FBSEMsT0FBVCxFQUlHQyxJQUpILENBSVEsVUFBQ3pDLElBQUQsRUFBVTtBQUNoQixlQUFLMEMsSUFBTCxHQUFZMUMsSUFBWjtBQUNBLFlBQUkyQyxPQUFPLGNBQVg7QUFDQTtBQUNBM0MsZUFBTyxhQUFLNEMsT0FBTCxDQUFhNUMsSUFBYixFQUFtQjJDLElBQW5CLENBQVA7QUFDQSxZQUFJMUMsVUFBVUQsS0FBSyxDQUFMLENBQWQ7QUFDQSxZQUFJNkMsV0FBVzVDLFFBQVE2QyxnQkFBdkI7O0FBRUEsMEJBQVFDLE9BQVIsQ0FBZ0IsVUFBaEIsRUFBNEIsTUFBNUIsRUFBb0NGLFFBQXBDLFVBQW9ELENBQXBEOztBQUVBLGVBQUs1QyxPQUFMLEdBQWVBLE9BQWY7O0FBRUEsZUFBSytDLE1BQUw7QUFDQTtBQUNBLHVCQUFLQyxxQkFBTCxDQUEyQjtBQUN6QkMsaUJBQU8sT0FBS2pELE9BQUwsQ0FBYWlEO0FBREssU0FBM0I7QUFHRCxPQXJCRDtBQXNCRDtBQUNEOzs7OzJCQUNRakIsTyxFQUFTO0FBQ2Y7QUFDQSxxQkFBS2tCLHdCQUFMO0FBQ0EsV0FBS0MsT0FBTCxDQUFhbkIsT0FBYjtBQUNBO0FBQ0EsV0FBS29CLE9BQUwsQ0FBYSxTQUFiLEVBQXdCLFNBQXhCLEVBQW1DcEIsT0FBbkM7QUFDRDtBQUNEOzs7OzhCQUNXO0FBQ1Q7QUFDQSxxQkFBS3FCLHdCQUFMO0FBQ0Q7QUFDRDs7Ozt3Q0FDcUI7QUFDbkI7QUFDQSxxQkFBS0MsbUJBQUw7QUFDRDs7OztFQTlGa0MsZUFBS0MsSTs7a0JBQXJCekQsTyIsImZpbGUiOiJhcnRpY2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB7IEFQSSwgVE9PTCB9IGZyb20gJ0AvY29tbW9uJ1xuICBpbXBvcnQgeyBIVFRQIH0gZnJvbSAnd2VweS11dGlscydcbiAgaW1wb3J0IENvbW1lbnRFZGl0IGZyb20gJy4uL2NvbXBvbmVudHMvY29tbWVudEVkaXQnXG4gIGltcG9ydCBDb21tZW50IGZyb20gJy4uL2NvbXBvbmVudHMvY29tbWVudCdcbiAgaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3RlcidcbiAgaW1wb3J0IFd4UGFyc2UgZnJvbSAnLi4vY29tbW9uL3d4UGFyc2Uvd3hQYXJzZSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBBcnRpY2xlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAvLyDmqKHmnb/liJ3lp4vnu5HlrprmlbDmja5cbiAgICBkYXRhID0ge1xuICAgICAgYXJ0aWNsZToge30sXG4gICAgICBhdmF0YXI6IHtcbiAgICAgICAgZGlmZjogJy9zdGF0aWMvaW1nL25vZGVfbm9ybWFsLnBuZycsXG4gICAgICAgIG5vcm1hbDogJy4uL2ltYWdlcy9ub2RlX25vcm1hbC5wbmcnXG4gICAgICB9XG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB3eFBhcnNlVGFnQVRhcCAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCfngrnlh7vkuobpk77mjqUnKVxuICAgICAgfSxcbiAgICAgIHd4UGFyc2VJbWdMb2FkIChldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZygnSW1nTG9hZCcpXG4gICAgICB9LFxuICAgICAgLy8g6aKE6KeI5Zu+54mHXG4gICAgICB3eFBhcnNlSW1nVGFwIChlKSB7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpc1xuICAgICAgICB2YXIgbm93SW1nVXJsID0gZS50YXJnZXQuZGF0YXNldC5zcmNcbiAgICAgICAgdmFyIHRhZ0Zyb20gPSBlLnRhcmdldC5kYXRhc2V0LmZyb21cbiAgICAgICAgaWYgKHR5cGVvZiAodGFnRnJvbSkgIT09ICd1bmRlZmluZWQnICYmIHRhZ0Zyb20ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHdlcHkucHJldmlld0ltYWdlKHtcbiAgICAgICAgICAgIGN1cnJlbnQ6IG5vd0ltZ1VybCwgLy8g5b2T5YmN5pi+56S65Zu+54mH55qEaHR0cOmTvuaOpVxuICAgICAgICAgICAgdXJsczogdGhhdC5iaW5kRGF0YVt0YWdGcm9tXS5pbWFnZVVybHMgLy8g6ZyA6KaB6aKE6KeI55qE5Zu+54mHaHR0cOmTvuaOpeWIl+ihqFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyDmlofnq6Dovazlj5FcbiAgICAgIG9uU2hhcmVBcHBNZXNzYWdlICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygn6L2s5Y+R5oiQ5Yqf5LqGJylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfovazlj5HlpLHotKUnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyDlo7DmmI7pobXpnaLkuK3lsIbopoHkvb/nlKjliLDnmoTnu4Tku7ZcbiAgICBjb21wb25lbnRzID0ge1xuICAgICAgY29tbWVudEVkaXQ6IENvbW1lbnRFZGl0LFxuICAgICAgY29tbWVudDogQ29tbWVudCxcbiAgICAgIGZvb3RlcjogRm9vdGVyXG4gICAgfVxuICAgIC8vIOivt+axguaVsOaNrlxuICAgIHJlcXVlc3QgKG9wdGlvbnMpIHtcbiAgICAgIGxldCBpZCA9IG9wdGlvbnMuaWRcbiAgICAgIGxldCB1cmwgPSBBUEkudG9waWNzLnNob3dcbiAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgIGlkOiBpZFxuICAgICAgfVxuXG4gICAgICBIVFRQLmdldCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgbWFzazogdHJ1ZVxuICAgICAgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLm5vZGUgPSBkYXRhXG4gICAgICAgIGxldCB0eXBlID0gJ2F2YXRhcl9sYXJnZSdcbiAgICAgICAgLy8g5aS05YOPVVJM5pu/5o2iXG4gICAgICAgIGRhdGEgPSBUT09MLnJlcGxhY2UoZGF0YSwgdHlwZSlcbiAgICAgICAgbGV0IGFydGljbGUgPSBkYXRhWzBdXG4gICAgICAgIGxldCByZW5kZXJlZCA9IGFydGljbGUuY29udGVudF9yZW5kZXJlZFxuXG4gICAgICAgIFd4UGFyc2Uud3hQYXJzZSgncmVuZGVyZWQnLCAnaHRtbCcsIHJlbmRlcmVkLCB0aGlzLCAwKVxuXG4gICAgICAgIHRoaXMuYXJ0aWNsZSA9IGFydGljbGVcblxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIC8vIOiuvue9ruW9k+WJjemhtemdoueahOagh+mimFxuICAgICAgICB3ZXB5LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XG4gICAgICAgICAgdGl0bGU6IHRoaXMuYXJ0aWNsZS50aXRsZVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG4gICAgLy8g55Sf5ZG95ZGo5pyf5Ye95pWw77yM6aG16Z2i5Yqg6L29XG4gICAgb25Mb2FkIChvcHRpb25zKSB7XG4gICAgICAvLyDlr7zoiKrmnaEgTG9hZGluZ1xuICAgICAgd2VweS5zaG93TmF2aWdhdGlvbkJhckxvYWRpbmcoKVxuICAgICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMpXG4gICAgICAvLyDosIPnlKjnu4Tku7YgY29tbWVudCDkuK3nmoQgcmVxdWVzdCDmlrnms5XvvIzlubbkvKDpgJLlj4LmlbDlr7nosaEgb3B0aW9uc1xuICAgICAgdGhpcy4kaW52b2tlKCdjb21tZW50JywgJ3JlcXVlc3QnLCBvcHRpb25zKVxuICAgIH1cbiAgICAvLyDnlJ/lkb3lkajmnJ/lh73mlbDvvIzliJ3mrKHmuLLmn5PlrozmiJBcbiAgICBvblJlYWR5ICgpIHtcbiAgICAgIC8vIOmakOiXj+WvvOiIquadoSBMb2FkaW5nXG4gICAgICB3ZXB5LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpXG4gICAgfVxuICAgIC8vIOebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgIG9uUHVsbERvd25SZWZyZXNoICgpIHtcbiAgICAgIC8vIOWKoOi9veaVsOaNruWujOaIkOWQjuWBnOatouS4i+aLieeKtuaAgVxuICAgICAgd2VweS5zdG9wUHVsbERvd25SZWZyZXNoKClcbiAgICB9XG4gIH1cbiJdfQ==