'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _postItem = require('./../components/postItem.js');

var _postItem2 = _interopRequireDefault(_postItem);

var _common = require('./../common/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// 引入组件


var NewPost = function (_wepy$page) {
  _inherits(NewPost, _wepy$page);

  function NewPost() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, NewPost);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = NewPost.__proto__ || Object.getPrototypeOf(NewPost)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
      'navigationBarTitleText': '最新'
      // 模板初始绑定数据
    }, _this2.data = {
      list: []
      // 声明页面中将要使用到的组件
    }, _this2.$repeat = { "list": { "com": "postItem", "props": "item" } }, _this2.$props = { "postItem": { "xmlns:v-bind": { "value": "", "for": "list", "item": "item", "index": "index", "key": "key" }, "v-bind:item.once": { "value": "item", "type": "item", "for": "list", "item": "item", "index": "index", "key": "key" } } }, _this2.$events = {}, _this2.components = {
      postItem: _postItem2.default
      // 请求数据
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }
  // 页面配置


  _createClass(NewPost, [{
    key: 'request',
    value: function request() {
      var _this = this;

      var url = _common.URLS.topics.latest;

      _common.HTTP.get(url).then(function (data) {
        var type = 'avatar_large';
        // 头像URL替换
        data = _common.Utils.replace(data, type);

        _this.list = data;
        _this.$apply();
      });
    }

    // 生命周期函数，页面加载

  }, {
    key: 'onLoad',
    value: function onLoad() {
      var _this = this;
      _this.request();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy5qcyJdLCJuYW1lcyI6WyJOZXdQb3N0IiwiY29uZmlnIiwiZGF0YSIsImxpc3QiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJwb3N0SXRlbSIsIl90aGlzIiwidXJsIiwidG9waWNzIiwibGF0ZXN0IiwiZ2V0IiwidGhlbiIsInR5cGUiLCJyZXBsYWNlIiwiJGFwcGx5IiwicmVxdWVzdCIsInN0b3BQdWxsRG93blJlZnJlc2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7OztBQUZBOzs7SUFJcUJBLE87Ozs7Ozs7Ozs7Ozs7OzJMQUVuQkMsTSxHQUFTO0FBQ1AsZ0NBQTBCO0FBRTVCO0FBSFMsSyxTQUlUQyxJLEdBQU87QUFDTEMsWUFBTTtBQUVSO0FBSE8sSyxTQUlSQyxPLEdBQVUsRUFBQyxRQUFPLEVBQUMsT0FBTSxVQUFQLEVBQWtCLFNBQVEsTUFBMUIsRUFBUixFLFNBQ2JDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sTUFBbEIsRUFBeUIsUUFBTyxNQUFoQyxFQUF1QyxTQUFRLE9BQS9DLEVBQXVELE9BQU0sS0FBN0QsRUFBaEIsRUFBb0Ysb0JBQW1CLEVBQUMsU0FBUSxNQUFULEVBQWdCLFFBQU8sTUFBdkIsRUFBOEIsT0FBTSxNQUFwQyxFQUEyQyxRQUFPLE1BQWxELEVBQXlELFNBQVEsT0FBakUsRUFBeUUsT0FBTSxLQUEvRSxFQUF2RyxFQUFaLEUsU0FDVEMsTyxHQUFVLEUsU0FDVEMsVSxHQUFhO0FBQ1JDO0FBRUY7QUFIVSxLOztBQVpWOzs7Ozs4QkFnQlc7QUFDVCxVQUFJQyxRQUFRLElBQVo7O0FBRUEsVUFBSUMsTUFBTSxhQUFLQyxNQUFMLENBQVlDLE1BQXRCOztBQUVBLG1CQUFLQyxHQUFMLENBQVNILEdBQVQsRUFBY0ksSUFBZCxDQUFtQixVQUFDWixJQUFELEVBQVU7QUFDM0IsWUFBSWEsT0FBTyxjQUFYO0FBQ0E7QUFDQWIsZUFBTyxjQUFNYyxPQUFOLENBQWNkLElBQWQsRUFBb0JhLElBQXBCLENBQVA7O0FBRUFOLGNBQU1OLElBQU4sR0FBYUQsSUFBYjtBQUNBTyxjQUFNUSxNQUFOO0FBQ0QsT0FQRDtBQVFEOztBQUVEOzs7OzZCQUNVO0FBQ1IsVUFBSVIsUUFBUSxJQUFaO0FBQ0FBLFlBQU1TLE9BQU47QUFDRDtBQUNEOzs7OzhCQUNXLENBQUU7QUFDYjs7Ozt3Q0FDcUI7QUFDbkI7QUFDQSxxQkFBS0MsbUJBQUw7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7OztFQTlDa0MsZUFBS0MsSTs7a0JBQXJCcEIsTyIsImZpbGUiOiJuZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgLy8g5byV5YWl57uE5Lu2XG4gIGltcG9ydCBQb3N0SXRlbSBmcm9tICcuLi9jb21wb25lbnRzL3Bvc3RJdGVtJ1xuICBpbXBvcnQgeyBVdGlscywgVVJMUywgSFRUUCB9IGZyb20gJy4uL2NvbW1vbidcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdQb3N0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAvLyDpobXpnaLphY3nva5cbiAgICBjb25maWcgPSB7XG4gICAgICAnbmF2aWdhdGlvbkJhclRpdGxlVGV4dCc6ICfmnIDmlrAnXG4gICAgfVxuICAgIC8vIOaooeadv+WIneWni+e7keWumuaVsOaNrlxuICAgIGRhdGEgPSB7XG4gICAgICBsaXN0OiBbXVxuICAgIH1cbiAgICAvLyDlo7DmmI7pobXpnaLkuK3lsIbopoHkvb/nlKjliLDnmoTnu4Tku7ZcbiAgICRyZXBlYXQgPSB7XCJsaXN0XCI6e1wiY29tXCI6XCJwb3N0SXRlbVwiLFwicHJvcHNcIjpcIml0ZW1cIn19O1xyXG4kcHJvcHMgPSB7XCJwb3N0SXRlbVwiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwibGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwifSxcInYtYmluZDppdGVtLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJsaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBwb3N0SXRlbTogUG9zdEl0ZW1cbiAgICB9XG4gICAgLy8g6K+35rGC5pWw5o2uXG4gICAgcmVxdWVzdCAoKSB7XG4gICAgICBsZXQgX3RoaXMgPSB0aGlzXG5cbiAgICAgIGxldCB1cmwgPSBVUkxTLnRvcGljcy5sYXRlc3RcblxuICAgICAgSFRUUC5nZXQodXJsKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGxldCB0eXBlID0gJ2F2YXRhcl9sYXJnZSdcbiAgICAgICAgLy8g5aS05YOPVVJM5pu/5o2iXG4gICAgICAgIGRhdGEgPSBVdGlscy5yZXBsYWNlKGRhdGEsIHR5cGUpXG5cbiAgICAgICAgX3RoaXMubGlzdCA9IGRhdGFcbiAgICAgICAgX3RoaXMuJGFwcGx5KClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8g55Sf5ZG95ZGo5pyf5Ye95pWw77yM6aG16Z2i5Yqg6L29XG4gICAgb25Mb2FkICgpIHtcbiAgICAgIGxldCBfdGhpcyA9IHRoaXNcbiAgICAgIF90aGlzLnJlcXVlc3QoKVxuICAgIH1cbiAgICAvLyDnlJ/lkb3lkajmnJ/lh73mlbDvvIzliJ3mrKHmuLLmn5PlrozmiJBcbiAgICBvblJlYWR5ICgpIHt9XG4gICAgLy8g55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAgb25QdWxsRG93blJlZnJlc2ggKCkge1xuICAgICAgLy8g5Yqg6L295pWw5o2u5a6M5oiQ5ZCO5YGc5q2i5LiL5ouJ54q25oCBXG4gICAgICB3ZXB5LnN0b3BQdWxsRG93blJlZnJlc2goKVxuICAgICAgLy8g5LiL5ouJ5pu05paw77yM5pqC5LiN6YeN5paw6I635Y+W5pWw5o2u77yM6YG/5YWN6K+35rGC6L+H5LqO6aKR57mBXG4gICAgICAvLyBsZXQgX3RoaXMgPSB0aGlzXG4gICAgICAvLyBfdGhpcy5yZXF1ZXN0KClcbiAgICB9XG4gIH1cbiJdfQ==