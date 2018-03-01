'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _commentItem = require('./commentItem.js');

var _commentItem2 = _interopRequireDefault(_commentItem);

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
      comment: []
      // 声明页面中将要使用到的组件
    }, _this2.$repeat = { "comment": { "com": "commentItem", "props": "item" } }, _this2.$props = { "commentItem": { "xmlns:v-bind": { "value": "", "for": "comment", "item": "item", "index": "index", "key": "key" }, "v-bind:item.once": { "value": "item", "type": "item", "for": "comment", "item": "item", "index": "index", "key": "key" }, "v-bind:index.once": { "value": "index", "type": "index", "for": "comment", "item": "item", "index": "index", "key": "key" } } }, _this2.$events = {}, _this2.components = {
      commentItem: _commentItem2.default
      // 请求数据
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }
  // 模板初始绑定数据


  _createClass(Comment, [{
    key: 'request',
    value: function request(options) {
      var _this = this;
      var id = options.id;

      var url = _common.URLS.replies + '?topic_id=' + id;

      _common.HTTP.get(url).then(function (data) {
        var type = 'avatar_normal';
        // 头像URL替换
        data = _common.Utils.replace(data, type);

        _this.comment = data;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnQuanMiXSwibmFtZXMiOlsiQ29tbWVudCIsImRhdGEiLCJjb21tZW50IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY29tbWVudEl0ZW0iLCJvcHRpb25zIiwiX3RoaXMiLCJpZCIsInVybCIsInJlcGxpZXMiLCJnZXQiLCJ0aGVuIiwidHlwZSIsInJlcGxhY2UiLCIkYXBwbHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7O0FBRkE7OztJQUlxQkEsTzs7Ozs7Ozs7Ozs7Ozs7MkxBRW5CQyxJLEdBQU87QUFDTEMsZUFBUztBQUVYO0FBSE8sSyxTQUlSQyxPLEdBQVUsRUFBQyxXQUFVLEVBQUMsT0FBTSxhQUFQLEVBQXFCLFNBQVEsTUFBN0IsRUFBWCxFLFNBQ2JDLE0sR0FBUyxFQUFDLGVBQWMsRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sU0FBbEIsRUFBNEIsUUFBTyxNQUFuQyxFQUEwQyxTQUFRLE9BQWxELEVBQTBELE9BQU0sS0FBaEUsRUFBaEIsRUFBdUYsb0JBQW1CLEVBQUMsU0FBUSxNQUFULEVBQWdCLFFBQU8sTUFBdkIsRUFBOEIsT0FBTSxTQUFwQyxFQUE4QyxRQUFPLE1BQXJELEVBQTRELFNBQVEsT0FBcEUsRUFBNEUsT0FBTSxLQUFsRixFQUExRyxFQUFtTSxxQkFBb0IsRUFBQyxTQUFRLE9BQVQsRUFBaUIsUUFBTyxPQUF4QixFQUFnQyxPQUFNLFNBQXRDLEVBQWdELFFBQU8sTUFBdkQsRUFBOEQsU0FBUSxPQUF0RSxFQUE4RSxPQUFNLEtBQXBGLEVBQXZOLEVBQWYsRSxTQUNUQyxPLEdBQVUsRSxTQUNUQyxVLEdBQWE7QUFDUkM7QUFFRjtBQUhVLEs7O0FBUlY7Ozs7OzRCQVlTQyxPLEVBQVM7QUFDaEIsVUFBSUMsUUFBUSxJQUFaO0FBQ0EsVUFBSUMsS0FBS0YsUUFBUUUsRUFBakI7O0FBRUEsVUFBSUMsTUFBTSxhQUFLQyxPQUFMLEdBQWUsWUFBZixHQUE4QkYsRUFBeEM7O0FBRUEsbUJBQUtHLEdBQUwsQ0FBU0YsR0FBVCxFQUFjRyxJQUFkLENBQW1CLFVBQUNiLElBQUQsRUFBVTtBQUMzQixZQUFJYyxPQUFPLGVBQVg7QUFDQTtBQUNBZCxlQUFPLGNBQU1lLE9BQU4sQ0FBY2YsSUFBZCxFQUFvQmMsSUFBcEIsQ0FBUDs7QUFFQU4sY0FBTVAsT0FBTixHQUFnQkQsSUFBaEI7QUFDQVEsY0FBTVEsTUFBTjtBQUNELE9BUEQ7QUFRRDtBQUNEOzs7OzZCQUNVLENBQUU7Ozs7RUE3QnVCLGVBQUtDLFM7O2tCQUFyQmxCLE8iLCJmaWxlIjoiY29tbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAvLyDlvJXlhaXnu4Tku7ZcbiAgaW1wb3J0IENvbW1lbnRJdGVtIGZyb20gJy4vY29tbWVudEl0ZW0nXG4gIGltcG9ydCB7IFV0aWxzLCBVUkxTLCBIVFRQIH0gZnJvbSAnLi4vY29tbW9uJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1lbnQgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgLy8g5qih5p2/5Yid5aeL57uR5a6a5pWw5o2uXG4gICAgZGF0YSA9IHtcbiAgICAgIGNvbW1lbnQ6IFtdXG4gICAgfVxuICAgIC8vIOWjsOaYjumhtemdouS4reWwhuimgeS9v+eUqOWIsOeahOe7hOS7tlxuICAgJHJlcGVhdCA9IHtcImNvbW1lbnRcIjp7XCJjb21cIjpcImNvbW1lbnRJdGVtXCIsXCJwcm9wc1wiOlwiaXRlbVwifX07XHJcbiRwcm9wcyA9IHtcImNvbW1lbnRJdGVtXCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJjb21tZW50XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCJ9LFwidi1iaW5kOml0ZW0ub25jZVwiOntcInZhbHVlXCI6XCJpdGVtXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcImNvbW1lbnRcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIn0sXCJ2LWJpbmQ6aW5kZXgub25jZVwiOntcInZhbHVlXCI6XCJpbmRleFwiLFwidHlwZVwiOlwiaW5kZXhcIixcImZvclwiOlwiY29tbWVudFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwifX19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgY29tbWVudEl0ZW06IENvbW1lbnRJdGVtXG4gICAgfVxuICAgIC8vIOivt+axguaVsOaNrlxuICAgIHJlcXVlc3QgKG9wdGlvbnMpIHtcbiAgICAgIGxldCBfdGhpcyA9IHRoaXNcbiAgICAgIGxldCBpZCA9IG9wdGlvbnMuaWRcblxuICAgICAgbGV0IHVybCA9IFVSTFMucmVwbGllcyArICc/dG9waWNfaWQ9JyArIGlkXG5cbiAgICAgIEhUVFAuZ2V0KHVybCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBsZXQgdHlwZSA9ICdhdmF0YXJfbm9ybWFsJ1xuICAgICAgICAvLyDlpLTlg49VUkzmm7/mjaJcbiAgICAgICAgZGF0YSA9IFV0aWxzLnJlcGxhY2UoZGF0YSwgdHlwZSlcblxuICAgICAgICBfdGhpcy5jb21tZW50ID0gZGF0YVxuICAgICAgICBfdGhpcy4kYXBwbHkoKVxuICAgICAgfSlcbiAgICB9XG4gICAgLy8g6aG16Z2i55qE55Sf5ZG95ZGo5pyf5Ye95pWwXG4gICAgb25Mb2FkICgpIHt9XG4gIH1cbiJdfQ==