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
      'navigationBarTitleText': '最新'
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
        mask: true
      }).then(function (data) {
        var type = 'avatar_large';
        // 头像URL替换
        data = _common.TOOL.replace(data, type);
        _this2.list = data;
        _this2.$apply();
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
      // 加载数据完成后停止下拉状态
      _wepy2.default.stopPullDownRefresh();
      // 下拉更新，暂不重新获取数据，避免请求过于频繁
      // let _this = this
      // _this.request()
    }
  }]);

  return NewPost;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(NewPost , 'pages/new'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy5qcyJdLCJuYW1lcyI6WyJOZXdQb3N0IiwiY29uZmlnIiwiZGF0YSIsImxpc3QiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJwb3N0SXRlbSIsInVybCIsInRvcGljcyIsImxhdGVzdCIsImdldCIsIm1hc2siLCJ0aGVuIiwidHlwZSIsInJlcGxhY2UiLCIkYXBwbHkiLCJyZXF1ZXN0Iiwic3RvcFB1bGxEb3duUmVmcmVzaCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBRW5CQyxNLEdBQVM7QUFDUCxnQ0FBMEI7QUFFNUI7QUFIUyxLLFFBSVRDLEksR0FBTztBQUNMQyxZQUFNO0FBRVI7QUFITyxLLFFBSVJDLE8sR0FBVSxFQUFDLFFBQU8sRUFBQyxPQUFNLFVBQVAsRUFBa0IsU0FBUSxNQUExQixFQUFSLEUsUUFDYkMsTSxHQUFTLEVBQUMsWUFBVyxFQUFDLGdCQUFlLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxNQUFsQixFQUF5QixRQUFPLE1BQWhDLEVBQXVDLFNBQVEsT0FBL0MsRUFBdUQsT0FBTSxLQUE3RCxFQUFoQixFQUFvRixvQkFBbUIsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsUUFBTyxNQUF2QixFQUE4QixPQUFNLE1BQXBDLEVBQTJDLFFBQU8sTUFBbEQsRUFBeUQsU0FBUSxPQUFqRSxFQUF5RSxPQUFNLEtBQS9FLEVBQXZHLEVBQVosRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFFRjtBQUhVLEs7O0FBWlY7Ozs7OzhCQWdCVztBQUFBOztBQUNULFVBQUlDLE1BQU0sWUFBSUMsTUFBSixDQUFXQyxNQUFyQjtBQUNBLHNCQUFLQyxHQUFMLENBQVM7QUFDUEgsYUFBS0EsR0FERTtBQUVQSSxjQUFNO0FBRkMsT0FBVCxFQUdHQyxJQUhILENBR1EsVUFBQ1osSUFBRCxFQUFVO0FBQ2hCLFlBQUlhLE9BQU8sY0FBWDtBQUNBO0FBQ0FiLGVBQU8sYUFBS2MsT0FBTCxDQUFhZCxJQUFiLEVBQW1CYSxJQUFuQixDQUFQO0FBQ0EsZUFBS1osSUFBTCxHQUFZRCxJQUFaO0FBQ0EsZUFBS2UsTUFBTDtBQUNELE9BVEQ7QUFVRDtBQUNEOzs7OzZCQUNVO0FBQ1IsV0FBS0MsT0FBTDtBQUNEO0FBQ0Q7Ozs7OEJBQ1csQ0FBRTtBQUNiOzs7O3dDQUNxQjtBQUNuQjtBQUNBLHFCQUFLQyxtQkFBTDtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7O0VBM0NrQyxlQUFLQyxJOztrQkFBckJwQixPIiwiZmlsZSI6Im5ldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgeyBBUEksIFRPT0wgfSBmcm9tICdAL2NvbW1vbidcbiAgaW1wb3J0IHsgSFRUUCB9IGZyb20gJ3dlcHktdXRpbHMnXG4gIGltcG9ydCBQb3N0SXRlbSBmcm9tICcuLi9jb21wb25lbnRzL3Bvc3RJdGVtJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld1Bvc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIC8vIOmhtemdoumFjee9rlxuICAgIGNvbmZpZyA9IHtcbiAgICAgICduYXZpZ2F0aW9uQmFyVGl0bGVUZXh0JzogJ+acgOaWsCdcbiAgICB9XG4gICAgLy8g5qih5p2/5Yid5aeL57uR5a6a5pWw5o2uXG4gICAgZGF0YSA9IHtcbiAgICAgIGxpc3Q6IFtdXG4gICAgfVxuICAgIC8vIOWjsOaYjumhtemdouS4reWwhuimgeS9v+eUqOWIsOeahOe7hOS7tlxuICAgJHJlcGVhdCA9IHtcImxpc3RcIjp7XCJjb21cIjpcInBvc3RJdGVtXCIsXCJwcm9wc1wiOlwiaXRlbVwifX07XHJcbiRwcm9wcyA9IHtcInBvc3RJdGVtXCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJsaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCJ9LFwidi1iaW5kOml0ZW0ub25jZVwiOntcInZhbHVlXCI6XCJpdGVtXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcImxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIn19fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIHBvc3RJdGVtOiBQb3N0SXRlbVxuICAgIH1cbiAgICAvLyDor7fmsYLmlbDmja5cbiAgICByZXF1ZXN0ICgpIHtcbiAgICAgIGxldCB1cmwgPSBBUEkudG9waWNzLmxhdGVzdFxuICAgICAgSFRUUC5nZXQoe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgbWFzazogdHJ1ZVxuICAgICAgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBsZXQgdHlwZSA9ICdhdmF0YXJfbGFyZ2UnXG4gICAgICAgIC8vIOWktOWDj1VSTOabv+aNolxuICAgICAgICBkYXRhID0gVE9PTC5yZXBsYWNlKGRhdGEsIHR5cGUpXG4gICAgICAgIHRoaXMubGlzdCA9IGRhdGFcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSlcbiAgICB9XG4gICAgLy8g55Sf5ZG95ZGo5pyf5Ye95pWw77yM6aG16Z2i5Yqg6L29XG4gICAgb25Mb2FkICgpIHtcbiAgICAgIHRoaXMucmVxdWVzdCgpXG4gICAgfVxuICAgIC8vIOeUn+WRveWRqOacn+WHveaVsO+8jOWIneasoea4suafk+WujOaIkFxuICAgIG9uUmVhZHkgKCkge31cbiAgICAvLyDnm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICBvblB1bGxEb3duUmVmcmVzaCAoKSB7XG4gICAgICAvLyDliqDovb3mlbDmja7lrozmiJDlkI7lgZzmraLkuIvmi4nnirbmgIFcbiAgICAgIHdlcHkuc3RvcFB1bGxEb3duUmVmcmVzaCgpXG4gICAgICAvLyDkuIvmi4nmm7TmlrDvvIzmmoLkuI3ph43mlrDojrflj5bmlbDmja7vvIzpgb/lhY3or7fmsYLov4fkuo7popHnuYFcbiAgICAgIC8vIGxldCBfdGhpcyA9IHRoaXNcbiAgICAgIC8vIF90aGlzLnJlcXVlc3QoKVxuICAgIH1cbiAgfVxuIl19