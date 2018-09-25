'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _common = require('./../common/index.js');

var _wepyUtils = require('./../npm/wepy-utils/index.js');

var _postItem = require('./../components/postItem.js');

var _postItem2 = _interopRequireDefault(_postItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewPost = function (_wepy$page) {
  _inherits(NewPost, _wepy$page);

  function NewPost() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NewPost);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NewPost.__proto__ || Object.getPrototypeOf(NewPost)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      'navigationBarTitleText': '最新',
      'enablePullDownRefresh': true
      // 模板初始绑定数据
    }, _this.data = {
      list: []
      // 声明页面中将要使用到的组件
    }, _this.$repeat = { "list": { "com": "postItem", "props": "item" } }, _this.$props = { "postItem": { "xmlns:v-bind": { "value": "", "for": "list", "item": "item", "index": "index", "key": "key" }, "v-bind:item.once": { "value": "item", "type": "item", "for": "list", "item": "item", "index": "index", "key": "key" } } }, _this.$events = {}, _this.components = {
      postItem: _postItem2.default
      // 请求数据
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // 页面配置


  _createClass(NewPost, [{
    key: 'request',
    value: function request() {
      var _this2 = this;

      var url = _common.API.topics.latest;
      _wepyUtils.HTTP.get({
        url: url,
        mask: true,
        loading: false
      }).then(function (data) {
        var type = 'avatar_large';
        // 头像URL替换
        data = _common.TOOL.replace(data, type);
        _this2.list = data;
        _this2.$apply();
        // 加载数据完成后停止下拉状态
        setTimeout(function () {
          _wepy2.default.stopPullDownRefresh();
          _wepy2.default.hideNavigationBarLoading();
        }, 1000);
      }).catch(function (err) {
        console.log(err);
        setTimeout(function () {
          _wepy2.default.stopPullDownRefresh();
          _wepy2.default.hideNavigationBarLoading();
        }, 1000);
      });
    }
    // 生命周期函数，页面加载

  }, {
    key: 'onLoad',
    value: function onLoad() {
      _wepy2.default.showNavigationBarLoading();
      this.request();
    }
    // 生命周期函数，初次渲染完成

  }, {
    key: 'onReady',
    value: function onReady() {}
    // 监听用户下拉动作

  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      _wepy2.default.showNavigationBarLoading();
      // 下拉更新，请求数据
      this.request();
    }
  }]);

  return NewPost;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(NewPost , 'pages/new'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy5qcyJdLCJuYW1lcyI6WyJOZXdQb3N0IiwiY29uZmlnIiwiZGF0YSIsImxpc3QiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJwb3N0SXRlbSIsInVybCIsInRvcGljcyIsImxhdGVzdCIsImdldCIsIm1hc2siLCJsb2FkaW5nIiwidGhlbiIsInR5cGUiLCJyZXBsYWNlIiwiJGFwcGx5Iiwic2V0VGltZW91dCIsInN0b3BQdWxsRG93blJlZnJlc2giLCJoaWRlTmF2aWdhdGlvbkJhckxvYWRpbmciLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJzaG93TmF2aWdhdGlvbkJhckxvYWRpbmciLCJyZXF1ZXN0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFFbkJDLE0sR0FBUztBQUNQLGdDQUEwQixJQURuQjtBQUVQLCtCQUF5QjtBQUUzQjtBQUpTLEssUUFLVEMsSSxHQUFPO0FBQ0xDLFlBQU07QUFFUjtBQUhPLEssUUFJUkMsTyxHQUFVLEVBQUMsUUFBTyxFQUFDLE9BQU0sVUFBUCxFQUFrQixTQUFRLE1BQTFCLEVBQVIsRSxRQUNiQyxNLEdBQVMsRUFBQyxZQUFXLEVBQUMsZ0JBQWUsRUFBQyxTQUFRLEVBQVQsRUFBWSxPQUFNLE1BQWxCLEVBQXlCLFFBQU8sTUFBaEMsRUFBdUMsU0FBUSxPQUEvQyxFQUF1RCxPQUFNLEtBQTdELEVBQWhCLEVBQW9GLG9CQUFtQixFQUFDLFNBQVEsTUFBVCxFQUFnQixRQUFPLE1BQXZCLEVBQThCLE9BQU0sTUFBcEMsRUFBMkMsUUFBTyxNQUFsRCxFQUF5RCxTQUFRLE9BQWpFLEVBQXlFLE9BQU0sS0FBL0UsRUFBdkcsRUFBWixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQUVGO0FBSFUsSzs7QUFiVjs7Ozs7OEJBaUJXO0FBQUE7O0FBQ1QsVUFBSUMsTUFBTSxZQUFJQyxNQUFKLENBQVdDLE1BQXJCO0FBQ0Esc0JBQUtDLEdBQUwsQ0FBUztBQUNQSCxhQUFLQSxHQURFO0FBRVBJLGNBQU0sSUFGQztBQUdQQyxpQkFBUztBQUhGLE9BQVQsRUFJR0MsSUFKSCxDQUlRLFVBQUNiLElBQUQsRUFBVTtBQUNoQixZQUFJYyxPQUFPLGNBQVg7QUFDQTtBQUNBZCxlQUFPLGFBQUtlLE9BQUwsQ0FBYWYsSUFBYixFQUFtQmMsSUFBbkIsQ0FBUDtBQUNBLGVBQUtiLElBQUwsR0FBWUQsSUFBWjtBQUNBLGVBQUtnQixNQUFMO0FBQ0E7QUFDQUMsbUJBQVcsWUFBTTtBQUNmLHlCQUFLQyxtQkFBTDtBQUNBLHlCQUFLQyx3QkFBTDtBQUNELFNBSEQsRUFHRyxJQUhIO0FBSUQsT0FmRCxFQWVHQyxLQWZILENBZVMsVUFBQ0MsR0FBRCxFQUFTO0FBQ2hCQyxnQkFBUUMsR0FBUixDQUFZRixHQUFaO0FBQ0FKLG1CQUFXLFlBQU07QUFDZix5QkFBS0MsbUJBQUw7QUFDQSx5QkFBS0Msd0JBQUw7QUFDRCxTQUhELEVBR0csSUFISDtBQUlELE9BckJEO0FBc0JEO0FBQ0Q7Ozs7NkJBQ1U7QUFDUixxQkFBS0ssd0JBQUw7QUFDQSxXQUFLQyxPQUFMO0FBQ0Q7QUFDRDs7Ozs4QkFDVyxDQUFFO0FBQ2I7Ozs7d0NBQ3FCO0FBQ25CLHFCQUFLRCx3QkFBTDtBQUNBO0FBQ0EsV0FBS0MsT0FBTDtBQUNEOzs7O0VBdkRrQyxlQUFLQyxJOztrQkFBckI1QixPIiwiZmlsZSI6Im5ldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgeyBBUEksIFRPT0wgfSBmcm9tICdAL2NvbW1vbidcbiAgaW1wb3J0IHsgSFRUUCB9IGZyb20gJ3dlcHktdXRpbHMnXG4gIGltcG9ydCBQb3N0SXRlbSBmcm9tICcuLi9jb21wb25lbnRzL3Bvc3RJdGVtJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld1Bvc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIC8vIOmhtemdoumFjee9rlxuICAgIGNvbmZpZyA9IHtcbiAgICAgICduYXZpZ2F0aW9uQmFyVGl0bGVUZXh0JzogJ+acgOaWsCcsXG4gICAgICAnZW5hYmxlUHVsbERvd25SZWZyZXNoJzogdHJ1ZVxuICAgIH1cbiAgICAvLyDmqKHmnb/liJ3lp4vnu5HlrprmlbDmja5cbiAgICBkYXRhID0ge1xuICAgICAgbGlzdDogW11cbiAgICB9XG4gICAgLy8g5aOw5piO6aG16Z2i5Lit5bCG6KaB5L2/55So5Yiw55qE57uE5Lu2XG4gICAkcmVwZWF0ID0ge1wibGlzdFwiOntcImNvbVwiOlwicG9zdEl0ZW1cIixcInByb3BzXCI6XCJpdGVtXCJ9fTtcclxuJHByb3BzID0ge1wicG9zdEl0ZW1cIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcImxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIn0sXCJ2LWJpbmQ6aXRlbS5vbmNlXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwibGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwifX19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgcG9zdEl0ZW06IFBvc3RJdGVtXG4gICAgfVxuICAgIC8vIOivt+axguaVsOaNrlxuICAgIHJlcXVlc3QgKCkge1xuICAgICAgbGV0IHVybCA9IEFQSS50b3BpY3MubGF0ZXN0XG4gICAgICBIVFRQLmdldCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBtYXNrOiB0cnVlLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBsZXQgdHlwZSA9ICdhdmF0YXJfbGFyZ2UnXG4gICAgICAgIC8vIOWktOWDj1VSTOabv+aNolxuICAgICAgICBkYXRhID0gVE9PTC5yZXBsYWNlKGRhdGEsIHR5cGUpXG4gICAgICAgIHRoaXMubGlzdCA9IGRhdGFcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAvLyDliqDovb3mlbDmja7lrozmiJDlkI7lgZzmraLkuIvmi4nnirbmgIFcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgd2VweS5zdG9wUHVsbERvd25SZWZyZXNoKClcbiAgICAgICAgICB3ZXB5LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpXG4gICAgICAgIH0sIDEwMDApXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgd2VweS5zdG9wUHVsbERvd25SZWZyZXNoKClcbiAgICAgICAgICB3ZXB5LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpXG4gICAgICAgIH0sIDEwMDApXG4gICAgICB9KVxuICAgIH1cbiAgICAvLyDnlJ/lkb3lkajmnJ/lh73mlbDvvIzpobXpnaLliqDovb1cbiAgICBvbkxvYWQgKCkge1xuICAgICAgd2VweS5zaG93TmF2aWdhdGlvbkJhckxvYWRpbmcoKVxuICAgICAgdGhpcy5yZXF1ZXN0KClcbiAgICB9XG4gICAgLy8g55Sf5ZG95ZGo5pyf5Ye95pWw77yM5Yid5qyh5riy5p+T5a6M5oiQXG4gICAgb25SZWFkeSAoKSB7fVxuICAgIC8vIOebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgIG9uUHVsbERvd25SZWZyZXNoICgpIHtcbiAgICAgIHdlcHkuc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nKClcbiAgICAgIC8vIOS4i+aLieabtOaWsO+8jOivt+axguaVsOaNrlxuICAgICAgdGhpcy5yZXF1ZXN0KClcbiAgICB9XG4gIH1cbiJdfQ==