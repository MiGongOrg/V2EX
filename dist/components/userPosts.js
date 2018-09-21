'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _common = require('./../common/index.js');

var _wepyUtils = require('./../npm/wepy-utils/index.js');

var _postItem = require('./postItem.js');

var _postItem2 = _interopRequireDefault(_postItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comment = function (_wepy$component) {
  _inherits(Comment, _wepy$component);

  function Comment() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Comment);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Comment.__proto__ || Object.getPrototypeOf(Comment)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      list: []
      // 动态传值
    }, _this.props = {
      syncUser: {
        type: String,
        default: 'null'
      }
      // 声明页面中将要使用到的组件
    }, _this.$repeat = { "list": { "com": "postItem", "props": "item" } }, _this.$props = { "postItem": { "xmlns:v-bind": { "value": "", "for": "list", "item": "item", "index": "index", "key": "key" }, "v-bind:item.once": { "value": "item", "type": "item", "for": "list", "item": "item", "index": "index", "key": "key" } } }, _this.$events = {}, _this.components = {
      postItem: _postItem2.default
      // 请求数据
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // 模板初始绑定数据


  _createClass(Comment, [{
    key: 'request',
    value: function request(options) {
      var _this2 = this;

      var username = options.username;
      var url = _common.API.topics.show;
      var params = {
        username: username
      };

      _wepyUtils.HTTP.get({
        url: url,
        params: params,
        mask: true
      }).then(function (data) {
        var type = 'avatar_large';
        // 头像URL替换
        data = _common.TOOL.replace(data, type);
        _this2.list = data;
        _this2.$apply();
      });
    }
    // 页面的生命周期函数

  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Comment;
}(_wepy2.default.component);

exports.default = Comment;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJQb3N0cy5qcyJdLCJuYW1lcyI6WyJDb21tZW50IiwiZGF0YSIsImxpc3QiLCJwcm9wcyIsInN5bmNVc2VyIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJwb3N0SXRlbSIsIm9wdGlvbnMiLCJ1c2VybmFtZSIsInVybCIsInRvcGljcyIsInNob3ciLCJwYXJhbXMiLCJnZXQiLCJtYXNrIiwidGhlbiIsInJlcGxhY2UiLCIkYXBwbHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBRW5CQyxJLEdBQU87QUFDTEMsWUFBTTtBQUVSO0FBSE8sSyxRQUlQQyxLLEdBQVE7QUFDTkMsZ0JBQVU7QUFDUkMsY0FBTUMsTUFERTtBQUVSQyxpQkFBUztBQUZEO0FBS1o7QUFOUSxLLFFBT1RDLE8sR0FBVSxFQUFDLFFBQU8sRUFBQyxPQUFNLFVBQVAsRUFBa0IsU0FBUSxNQUExQixFQUFSLEUsUUFDYkMsTSxHQUFTLEVBQUMsWUFBVyxFQUFDLGdCQUFlLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxNQUFsQixFQUF5QixRQUFPLE1BQWhDLEVBQXVDLFNBQVEsT0FBL0MsRUFBdUQsT0FBTSxLQUE3RCxFQUFoQixFQUFvRixvQkFBbUIsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsUUFBTyxNQUF2QixFQUE4QixPQUFNLE1BQXBDLEVBQTJDLFFBQU8sTUFBbEQsRUFBeUQsU0FBUSxPQUFqRSxFQUF5RSxPQUFNLEtBQS9FLEVBQXZHLEVBQVosRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFFRjtBQUhVLEs7O0FBZlY7Ozs7OzRCQW1CU0MsTyxFQUFTO0FBQUE7O0FBQ2hCLFVBQUlDLFdBQVdELFFBQVFDLFFBQXZCO0FBQ0EsVUFBSUMsTUFBTSxZQUFJQyxNQUFKLENBQVdDLElBQXJCO0FBQ0EsVUFBSUMsU0FBUztBQUNYSixrQkFBVUE7QUFEQyxPQUFiOztBQUlBLHNCQUFLSyxHQUFMLENBQVM7QUFDUEosYUFBS0EsR0FERTtBQUVQRyxnQkFBUUEsTUFGRDtBQUdQRSxjQUFNO0FBSEMsT0FBVCxFQUlHQyxJQUpILENBSVEsVUFBQ3BCLElBQUQsRUFBVTtBQUNoQixZQUFJSSxPQUFPLGNBQVg7QUFDQTtBQUNBSixlQUFPLGFBQUtxQixPQUFMLENBQWFyQixJQUFiLEVBQW1CSSxJQUFuQixDQUFQO0FBQ0EsZUFBS0gsSUFBTCxHQUFZRCxJQUFaO0FBQ0EsZUFBS3NCLE1BQUw7QUFDRCxPQVZEO0FBV0Q7QUFDRDs7Ozs2QkFDVSxDQUFFOzs7O0VBeEN1QixlQUFLQyxTOztrQkFBckJ4QixPIiwiZmlsZSI6InVzZXJQb3N0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgeyBBUEksIFRPT0wgfSBmcm9tICdAL2NvbW1vbidcbiAgaW1wb3J0IHsgSFRUUCB9IGZyb20gJ3dlcHktdXRpbHMnXG4gIGltcG9ydCBQb3N0SXRlbSBmcm9tICcuL3Bvc3RJdGVtJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1lbnQgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgLy8g5qih5p2/5Yid5aeL57uR5a6a5pWw5o2uXG4gICAgZGF0YSA9IHtcbiAgICAgIGxpc3Q6IFtdXG4gICAgfVxuICAgIC8vIOWKqOaAgeS8oOWAvFxuICAgIHByb3BzID0ge1xuICAgICAgc3luY1VzZXI6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAnbnVsbCdcbiAgICAgIH1cbiAgICB9XG4gICAgLy8g5aOw5piO6aG16Z2i5Lit5bCG6KaB5L2/55So5Yiw55qE57uE5Lu2XG4gICAkcmVwZWF0ID0ge1wibGlzdFwiOntcImNvbVwiOlwicG9zdEl0ZW1cIixcInByb3BzXCI6XCJpdGVtXCJ9fTtcclxuJHByb3BzID0ge1wicG9zdEl0ZW1cIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcImxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIn0sXCJ2LWJpbmQ6aXRlbS5vbmNlXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwibGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwifX19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgcG9zdEl0ZW06IFBvc3RJdGVtXG4gICAgfVxuICAgIC8vIOivt+axguaVsOaNrlxuICAgIHJlcXVlc3QgKG9wdGlvbnMpIHtcbiAgICAgIGxldCB1c2VybmFtZSA9IG9wdGlvbnMudXNlcm5hbWVcbiAgICAgIGxldCB1cmwgPSBBUEkudG9waWNzLnNob3dcbiAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZVxuICAgICAgfVxuXG4gICAgICBIVFRQLmdldCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgbWFzazogdHJ1ZVxuICAgICAgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBsZXQgdHlwZSA9ICdhdmF0YXJfbGFyZ2UnXG4gICAgICAgIC8vIOWktOWDj1VSTOabv+aNolxuICAgICAgICBkYXRhID0gVE9PTC5yZXBsYWNlKGRhdGEsIHR5cGUpXG4gICAgICAgIHRoaXMubGlzdCA9IGRhdGFcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSlcbiAgICB9XG4gICAgLy8g6aG16Z2i55qE55Sf5ZG95ZGo5pyf5Ye95pWwXG4gICAgb25Mb2FkICgpIHt9XG4gIH1cbiJdfQ==