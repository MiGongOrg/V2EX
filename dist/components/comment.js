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

var _commentItem = require('./commentItem.js');

var _commentItem2 = _interopRequireDefault(_commentItem);

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
      comment: []
      // 声明页面中将要使用到的组件
    }, _this.$repeat = { "comment": { "com": "commentItem", "props": "item" } }, _this.$props = { "commentItem": { "xmlns:v-bind": { "value": "", "for": "comment", "item": "item", "index": "index", "key": "key" }, "v-bind:item.once": { "value": "item", "type": "item", "for": "comment", "item": "item", "index": "index", "key": "key" }, "v-bind:index.once": { "value": "index", "type": "index", "for": "comment", "item": "item", "index": "index", "key": "key" } } }, _this.$events = {}, _this.components = {
      commentItem: _commentItem2.default
      // 请求数据
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // 模板初始绑定数据


  _createClass(Comment, [{
    key: 'request',
    value: function request(options) {
      var _this2 = this;

      var id = options.id;
      var url = _common.API.replies;
      var params = {
        'topic_id': id
      };

      _wepyUtils.HTTP.get({
        url: url,
        params: params,
        mask: true
      }).then(function (data) {
        var type = 'avatar_normal';
        // 头像URL替换
        data = _common.TOOL.replace(data, type);
        _this2.comment = data;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnQuanMiXSwibmFtZXMiOlsiQ29tbWVudCIsImRhdGEiLCJjb21tZW50IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY29tbWVudEl0ZW0iLCJvcHRpb25zIiwiaWQiLCJ1cmwiLCJyZXBsaWVzIiwicGFyYW1zIiwiZ2V0IiwibWFzayIsInRoZW4iLCJ0eXBlIiwicmVwbGFjZSIsIiRhcHBseSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFFbkJDLEksR0FBTztBQUNMQyxlQUFTO0FBRVg7QUFITyxLLFFBSVJDLE8sR0FBVSxFQUFDLFdBQVUsRUFBQyxPQUFNLGFBQVAsRUFBcUIsU0FBUSxNQUE3QixFQUFYLEUsUUFDYkMsTSxHQUFTLEVBQUMsZUFBYyxFQUFDLGdCQUFlLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxTQUFsQixFQUE0QixRQUFPLE1BQW5DLEVBQTBDLFNBQVEsT0FBbEQsRUFBMEQsT0FBTSxLQUFoRSxFQUFoQixFQUF1RixvQkFBbUIsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsUUFBTyxNQUF2QixFQUE4QixPQUFNLFNBQXBDLEVBQThDLFFBQU8sTUFBckQsRUFBNEQsU0FBUSxPQUFwRSxFQUE0RSxPQUFNLEtBQWxGLEVBQTFHLEVBQW1NLHFCQUFvQixFQUFDLFNBQVEsT0FBVCxFQUFpQixRQUFPLE9BQXhCLEVBQWdDLE9BQU0sU0FBdEMsRUFBZ0QsUUFBTyxNQUF2RCxFQUE4RCxTQUFRLE9BQXRFLEVBQThFLE9BQU0sS0FBcEYsRUFBdk4sRUFBZixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQUVGO0FBSFUsSzs7QUFSVjs7Ozs7NEJBWVNDLE8sRUFBUztBQUFBOztBQUNoQixVQUFJQyxLQUFLRCxRQUFRQyxFQUFqQjtBQUNBLFVBQUlDLE1BQU0sWUFBSUMsT0FBZDtBQUNBLFVBQUlDLFNBQVM7QUFDWCxvQkFBWUg7QUFERCxPQUFiOztBQUlBLHNCQUFLSSxHQUFMLENBQVM7QUFDUEgsYUFBS0EsR0FERTtBQUVQRSxnQkFBUUEsTUFGRDtBQUdQRSxjQUFNO0FBSEMsT0FBVCxFQUlHQyxJQUpILENBSVEsVUFBQ2QsSUFBRCxFQUFVO0FBQ2hCLFlBQUllLE9BQU8sZUFBWDtBQUNBO0FBQ0FmLGVBQU8sYUFBS2dCLE9BQUwsQ0FBYWhCLElBQWIsRUFBbUJlLElBQW5CLENBQVA7QUFDQSxlQUFLZCxPQUFMLEdBQWVELElBQWY7QUFDQSxlQUFLaUIsTUFBTDtBQUNELE9BVkQ7QUFXRDtBQUNEOzs7OzZCQUNVLENBQUU7Ozs7RUFqQ3VCLGVBQUtDLFM7O2tCQUFyQm5CLE8iLCJmaWxlIjoiY29tbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgeyBBUEksIFRPT0wgfSBmcm9tICdAL2NvbW1vbidcbiAgaW1wb3J0IHsgSFRUUCB9IGZyb20gJ3dlcHktdXRpbHMnXG4gIGltcG9ydCBDb21tZW50SXRlbSBmcm9tICcuL2NvbW1lbnRJdGVtJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1lbnQgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgLy8g5qih5p2/5Yid5aeL57uR5a6a5pWw5o2uXG4gICAgZGF0YSA9IHtcbiAgICAgIGNvbW1lbnQ6IFtdXG4gICAgfVxuICAgIC8vIOWjsOaYjumhtemdouS4reWwhuimgeS9v+eUqOWIsOeahOe7hOS7tlxuICAgJHJlcGVhdCA9IHtcImNvbW1lbnRcIjp7XCJjb21cIjpcImNvbW1lbnRJdGVtXCIsXCJwcm9wc1wiOlwiaXRlbVwifX07XHJcbiRwcm9wcyA9IHtcImNvbW1lbnRJdGVtXCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJjb21tZW50XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCJ9LFwidi1iaW5kOml0ZW0ub25jZVwiOntcInZhbHVlXCI6XCJpdGVtXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcImNvbW1lbnRcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIn0sXCJ2LWJpbmQ6aW5kZXgub25jZVwiOntcInZhbHVlXCI6XCJpbmRleFwiLFwidHlwZVwiOlwiaW5kZXhcIixcImZvclwiOlwiY29tbWVudFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwifX19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgY29tbWVudEl0ZW06IENvbW1lbnRJdGVtXG4gICAgfVxuICAgIC8vIOivt+axguaVsOaNrlxuICAgIHJlcXVlc3QgKG9wdGlvbnMpIHtcbiAgICAgIGxldCBpZCA9IG9wdGlvbnMuaWRcbiAgICAgIGxldCB1cmwgPSBBUEkucmVwbGllc1xuICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgJ3RvcGljX2lkJzogaWRcbiAgICAgIH1cblxuICAgICAgSFRUUC5nZXQoe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgIG1hc2s6IHRydWVcbiAgICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgbGV0IHR5cGUgPSAnYXZhdGFyX25vcm1hbCdcbiAgICAgICAgLy8g5aS05YOPVVJM5pu/5o2iXG4gICAgICAgIGRhdGEgPSBUT09MLnJlcGxhY2UoZGF0YSwgdHlwZSlcbiAgICAgICAgdGhpcy5jb21tZW50ID0gZGF0YVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9KVxuICAgIH1cbiAgICAvLyDpobXpnaLnmoTnlJ/lkb3lkajmnJ/lh73mlbBcbiAgICBvbkxvYWQgKCkge31cbiAgfVxuIl19