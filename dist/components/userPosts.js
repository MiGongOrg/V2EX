'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _postItem = require('./postItem.js');

var _postItem2 = _interopRequireDefault(_postItem);

var _common = require('./../common/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// 引入组件


var Comment = function (_wepy$component) {
  _inherits(Comment, _wepy$component);

  function Comment() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, Comment);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Comment.__proto__ || Object.getPrototypeOf(Comment)).call.apply(_ref, [this].concat(args))), _this2), _this2.data = {
      list: []
      // 动态传值
    }, _this2.props = {
      syncUser: {
        type: String,
        default: 'null'
      }
      // 声明页面中将要使用到的组件
    }, _this2.$repeat = { "list": { "com": "postItem", "props": "item" } }, _this2.$props = { "postItem": { "xmlns:v-bind": { "value": "", "for": "list", "item": "item", "index": "index", "key": "key" }, "v-bind:item.once": { "value": "item", "type": "item", "for": "list", "item": "item", "index": "index", "key": "key" } } }, _this2.$events = {}, _this2.components = {
      postItem: _postItem2.default
      // 请求数据
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }
  // 模板初始绑定数据


  _createClass(Comment, [{
    key: 'request',
    value: function request(options) {
      var _this = this;
      var username = options.username;

      var url = _common.URLS.topics.show + '?username=' + username;

      _common.HTTP.get(url).then(function (data) {
        var type = 'avatar_large';
        // 头像URL替换
        data = _common.Utils.replace(data, type);

        _this.list = data;
        _this.$apply();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJQb3N0cy5qcyJdLCJuYW1lcyI6WyJDb21tZW50IiwiZGF0YSIsImxpc3QiLCJwcm9wcyIsInN5bmNVc2VyIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJwb3N0SXRlbSIsIm9wdGlvbnMiLCJfdGhpcyIsInVzZXJuYW1lIiwidXJsIiwidG9waWNzIiwic2hvdyIsImdldCIsInRoZW4iLCJyZXBsYWNlIiwiJGFwcGx5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7OztBQUZBOzs7SUFJcUJBLE87Ozs7Ozs7Ozs7Ozs7OzJMQUVuQkMsSSxHQUFPO0FBQ0xDLFlBQU07QUFFUjtBQUhPLEssU0FJUEMsSyxHQUFRO0FBQ05DLGdCQUFVO0FBQ1JDLGNBQU1DLE1BREU7QUFFUkMsaUJBQVM7QUFGRDtBQUtaO0FBTlEsSyxTQU9UQyxPLEdBQVUsRUFBQyxRQUFPLEVBQUMsT0FBTSxVQUFQLEVBQWtCLFNBQVEsTUFBMUIsRUFBUixFLFNBQ2JDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sTUFBbEIsRUFBeUIsUUFBTyxNQUFoQyxFQUF1QyxTQUFRLE9BQS9DLEVBQXVELE9BQU0sS0FBN0QsRUFBaEIsRUFBb0Ysb0JBQW1CLEVBQUMsU0FBUSxNQUFULEVBQWdCLFFBQU8sTUFBdkIsRUFBOEIsT0FBTSxNQUFwQyxFQUEyQyxRQUFPLE1BQWxELEVBQXlELFNBQVEsT0FBakUsRUFBeUUsT0FBTSxLQUEvRSxFQUF2RyxFQUFaLEUsU0FDVEMsTyxHQUFVLEUsU0FDVEMsVSxHQUFhO0FBQ1JDO0FBRUY7QUFIVSxLOztBQWZWOzs7Ozs0QkFtQlNDLE8sRUFBUztBQUNoQixVQUFJQyxRQUFRLElBQVo7QUFDQSxVQUFJQyxXQUFXRixRQUFRRSxRQUF2Qjs7QUFFQSxVQUFJQyxNQUFNLGFBQUtDLE1BQUwsQ0FBWUMsSUFBWixHQUFtQixZQUFuQixHQUFrQ0gsUUFBNUM7O0FBRUEsbUJBQUtJLEdBQUwsQ0FBU0gsR0FBVCxFQUFjSSxJQUFkLENBQW1CLFVBQUNuQixJQUFELEVBQVU7QUFDM0IsWUFBSUksT0FBTyxjQUFYO0FBQ0E7QUFDQUosZUFBTyxjQUFNb0IsT0FBTixDQUFjcEIsSUFBZCxFQUFvQkksSUFBcEIsQ0FBUDs7QUFFQVMsY0FBTVosSUFBTixHQUFhRCxJQUFiO0FBQ0FhLGNBQU1RLE1BQU47QUFDRCxPQVBEO0FBUUQ7QUFDRDs7Ozs2QkFDVSxDQUFFOzs7O0VBcEN1QixlQUFLQyxTOztrQkFBckJ2QixPIiwiZmlsZSI6InVzZXJQb3N0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAvLyDlvJXlhaXnu4Tku7ZcbiAgaW1wb3J0IFBvc3RJdGVtIGZyb20gJy4vcG9zdEl0ZW0nXG4gIGltcG9ydCB7IFV0aWxzLCBVUkxTLCBIVFRQIH0gZnJvbSAnLi4vY29tbW9uJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1lbnQgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgLy8g5qih5p2/5Yid5aeL57uR5a6a5pWw5o2uXG4gICAgZGF0YSA9IHtcbiAgICAgIGxpc3Q6IFtdXG4gICAgfVxuICAgIC8vIOWKqOaAgeS8oOWAvFxuICAgIHByb3BzID0ge1xuICAgICAgc3luY1VzZXI6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAnbnVsbCdcbiAgICAgIH1cbiAgICB9XG4gICAgLy8g5aOw5piO6aG16Z2i5Lit5bCG6KaB5L2/55So5Yiw55qE57uE5Lu2XG4gICAkcmVwZWF0ID0ge1wibGlzdFwiOntcImNvbVwiOlwicG9zdEl0ZW1cIixcInByb3BzXCI6XCJpdGVtXCJ9fTtcclxuJHByb3BzID0ge1wicG9zdEl0ZW1cIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcImxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIn0sXCJ2LWJpbmQ6aXRlbS5vbmNlXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwibGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwifX19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgcG9zdEl0ZW06IFBvc3RJdGVtXG4gICAgfVxuICAgIC8vIOivt+axguaVsOaNrlxuICAgIHJlcXVlc3QgKG9wdGlvbnMpIHtcbiAgICAgIGxldCBfdGhpcyA9IHRoaXNcbiAgICAgIGxldCB1c2VybmFtZSA9IG9wdGlvbnMudXNlcm5hbWVcblxuICAgICAgbGV0IHVybCA9IFVSTFMudG9waWNzLnNob3cgKyAnP3VzZXJuYW1lPScgKyB1c2VybmFtZVxuXG4gICAgICBIVFRQLmdldCh1cmwpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgbGV0IHR5cGUgPSAnYXZhdGFyX2xhcmdlJ1xuICAgICAgICAvLyDlpLTlg49VUkzmm7/mjaJcbiAgICAgICAgZGF0YSA9IFV0aWxzLnJlcGxhY2UoZGF0YSwgdHlwZSlcblxuICAgICAgICBfdGhpcy5saXN0ID0gZGF0YVxuICAgICAgICBfdGhpcy4kYXBwbHkoKVxuICAgICAgfSlcbiAgICB9XG4gICAgLy8g6aG16Z2i55qE55Sf5ZG95ZGo5pyf5Ye95pWwXG4gICAgb25Mb2FkICgpIHt9XG4gIH1cbiJdfQ==