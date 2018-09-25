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

var HotPost = function (_wepy$page) {
  _inherits(HotPost, _wepy$page);

  function HotPost() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HotPost);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HotPost.__proto__ || Object.getPrototypeOf(HotPost)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      'navigationBarTitleText': '热门',
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


  _createClass(HotPost, [{
    key: 'request',
    value: function request() {
      var _this2 = this;

      var url = _common.API.topics.hot;
      _wepyUtils.HTTP.get({
        url: url,
        mask: true
      }).then(function (data) {
        var type = 'avatar_large';
        // 头像URL替换
        data = _common.TOOL.replace(data, type);
        _this2.list = data;
        _this2.$apply();
        // 加载数据完成后停止下拉状态
        _wepy2.default.stopPullDownRefresh();
      }).catch(function (err) {
        console.log(err);
        _wepy2.default.stopPullDownRefresh();
      });
    }
    // 生命周期函数，页面加载

  }, {
    key: 'onLoad',
    value: function onLoad() {
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
      // 下拉更新，请求数据
      this.request();
    }
  }]);

  return HotPost;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(HotPost , 'pages/hot'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvdC5qcyJdLCJuYW1lcyI6WyJIb3RQb3N0IiwiY29uZmlnIiwiZGF0YSIsImxpc3QiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJwb3N0SXRlbSIsInVybCIsInRvcGljcyIsImhvdCIsImdldCIsIm1hc2siLCJ0aGVuIiwidHlwZSIsInJlcGxhY2UiLCIkYXBwbHkiLCJzdG9wUHVsbERvd25SZWZyZXNoIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBRW5CQyxNLEdBQVM7QUFDUCxnQ0FBMEIsSUFEbkI7QUFFUCwrQkFBeUI7QUFFM0I7QUFKUyxLLFFBS1RDLEksR0FBTztBQUNMQyxZQUFNO0FBRVI7QUFITyxLLFFBSVJDLE8sR0FBVSxFQUFDLFFBQU8sRUFBQyxPQUFNLFVBQVAsRUFBa0IsU0FBUSxNQUExQixFQUFSLEUsUUFDYkMsTSxHQUFTLEVBQUMsWUFBVyxFQUFDLGdCQUFlLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxNQUFsQixFQUF5QixRQUFPLE1BQWhDLEVBQXVDLFNBQVEsT0FBL0MsRUFBdUQsT0FBTSxLQUE3RCxFQUFoQixFQUFvRixvQkFBbUIsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsUUFBTyxNQUF2QixFQUE4QixPQUFNLE1BQXBDLEVBQTJDLFFBQU8sTUFBbEQsRUFBeUQsU0FBUSxPQUFqRSxFQUF5RSxPQUFNLEtBQS9FLEVBQXZHLEVBQVosRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFFRjtBQUhVLEs7O0FBYlY7Ozs7OzhCQWlCVztBQUFBOztBQUNULFVBQUlDLE1BQU0sWUFBSUMsTUFBSixDQUFXQyxHQUFyQjtBQUNBLHNCQUFLQyxHQUFMLENBQVM7QUFDUEgsYUFBS0EsR0FERTtBQUVQSSxjQUFNO0FBRkMsT0FBVCxFQUdHQyxJQUhILENBR1EsVUFBQ1osSUFBRCxFQUFVO0FBQ2hCLFlBQUlhLE9BQU8sY0FBWDtBQUNBO0FBQ0FiLGVBQU8sYUFBS2MsT0FBTCxDQUFhZCxJQUFiLEVBQW1CYSxJQUFuQixDQUFQO0FBQ0EsZUFBS1osSUFBTCxHQUFZRCxJQUFaO0FBQ0EsZUFBS2UsTUFBTDtBQUNBO0FBQ0EsdUJBQUtDLG1CQUFMO0FBQ0QsT0FYRCxFQVdHQyxLQVhILENBV1MsVUFBQ0MsR0FBRCxFQUFTO0FBQ2hCQyxnQkFBUUMsR0FBUixDQUFZRixHQUFaO0FBQ0EsdUJBQUtGLG1CQUFMO0FBQ0QsT0FkRDtBQWVEO0FBQ0Q7Ozs7NkJBQ1U7QUFDUixXQUFLSyxPQUFMO0FBQ0Q7QUFDRDs7Ozs4QkFDVyxDQUFFO0FBQ2I7Ozs7d0NBQ3FCO0FBQ25CO0FBQ0EsV0FBS0EsT0FBTDtBQUNEOzs7O0VBOUNrQyxlQUFLQyxJOztrQkFBckJ4QixPIiwiZmlsZSI6ImhvdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgeyBBUEksIFRPT0wgfSBmcm9tICdAL2NvbW1vbidcbiAgaW1wb3J0IHsgSFRUUCB9IGZyb20gJ3dlcHktdXRpbHMnXG4gIGltcG9ydCBQb3N0SXRlbSBmcm9tICcuLi9jb21wb25lbnRzL3Bvc3RJdGVtJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvdFBvc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIC8vIOmhtemdoumFjee9rlxuICAgIGNvbmZpZyA9IHtcbiAgICAgICduYXZpZ2F0aW9uQmFyVGl0bGVUZXh0JzogJ+eDremXqCcsXG4gICAgICAnZW5hYmxlUHVsbERvd25SZWZyZXNoJzogdHJ1ZVxuICAgIH1cbiAgICAvLyDmqKHmnb/liJ3lp4vnu5HlrprmlbDmja5cbiAgICBkYXRhID0ge1xuICAgICAgbGlzdDogW11cbiAgICB9XG4gICAgLy8g5aOw5piO6aG16Z2i5Lit5bCG6KaB5L2/55So5Yiw55qE57uE5Lu2XG4gICAkcmVwZWF0ID0ge1wibGlzdFwiOntcImNvbVwiOlwicG9zdEl0ZW1cIixcInByb3BzXCI6XCJpdGVtXCJ9fTtcclxuJHByb3BzID0ge1wicG9zdEl0ZW1cIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcImxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIn0sXCJ2LWJpbmQ6aXRlbS5vbmNlXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwibGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwifX19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgcG9zdEl0ZW06IFBvc3RJdGVtXG4gICAgfVxuICAgIC8vIOivt+axguaVsOaNrlxuICAgIHJlcXVlc3QgKCkge1xuICAgICAgbGV0IHVybCA9IEFQSS50b3BpY3MuaG90XG4gICAgICBIVFRQLmdldCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBtYXNrOiB0cnVlXG4gICAgICB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGxldCB0eXBlID0gJ2F2YXRhcl9sYXJnZSdcbiAgICAgICAgLy8g5aS05YOPVVJM5pu/5o2iXG4gICAgICAgIGRhdGEgPSBUT09MLnJlcGxhY2UoZGF0YSwgdHlwZSlcbiAgICAgICAgdGhpcy5saXN0ID0gZGF0YVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIC8vIOWKoOi9veaVsOaNruWujOaIkOWQjuWBnOatouS4i+aLieeKtuaAgVxuICAgICAgICB3ZXB5LnN0b3BQdWxsRG93blJlZnJlc2goKVxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIHdlcHkuc3RvcFB1bGxEb3duUmVmcmVzaCgpXG4gICAgICB9KVxuICAgIH1cbiAgICAvLyDnlJ/lkb3lkajmnJ/lh73mlbDvvIzpobXpnaLliqDovb1cbiAgICBvbkxvYWQgKCkge1xuICAgICAgdGhpcy5yZXF1ZXN0KClcbiAgICB9XG4gICAgLy8g55Sf5ZG95ZGo5pyf5Ye95pWw77yM5Yid5qyh5riy5p+T5a6M5oiQXG4gICAgb25SZWFkeSAoKSB7fVxuICAgIC8vIOebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgIG9uUHVsbERvd25SZWZyZXNoICgpIHtcbiAgICAgIC8vIOS4i+aLieabtOaWsO+8jOivt+axguaVsOaNrlxuICAgICAgdGhpcy5yZXF1ZXN0KClcbiAgICB9XG4gIH1cbiJdfQ==