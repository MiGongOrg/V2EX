'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _common = require('./../common/index.js');

var _wepyUtils = require('./../npm/wepy-utils/index.js');

var _nodeAllItem = require('./../components/nodeAllItem.js');

var _nodeAllItem2 = _interopRequireDefault(_nodeAllItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NodeAll = function (_wepy$page) {
  _inherits(NodeAll, _wepy$page);

  function NodeAll() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NodeAll);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NodeAll.__proto__ || Object.getPrototypeOf(NodeAll)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      'navigationBarTitleText': '全部节点'
      // 模板初始绑定数据
    }, _this.data = {
      node: {}
      // 声明页面中将要使用到的组件
    }, _this.$repeat = { "node": { "com": "nodeAllItem", "props": "item" } }, _this.$props = { "nodeAllItem": { "xmlns:v-bind": { "value": "", "for": "node", "item": "item", "index": "index", "key": "key" }, "v-bind:item.once": { "value": "item", "type": "item", "for": "node", "item": "item", "index": "index", "key": "key" }, "v-bind:index.once": { "value": "index", "type": "index", "for": "node", "item": "item", "index": "index", "key": "key" } } }, _this.$events = {}, _this.components = {
      nodeAllItem: _nodeAllItem2.default
      // 请求数据
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // 页面配置


  _createClass(NodeAll, [{
    key: 'request',
    value: function request() {
      var _this2 = this;

      var url = _common.API.nodes.all;
      _wepyUtils.HTTP.get({
        url: url,
        mask: true
      }).then(function (data) {
        _this2.node = data;
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
  }]);

  return NodeAll;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(NodeAll , 'pages/nodeAll'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVBbGwuanMiXSwibmFtZXMiOlsiTm9kZUFsbCIsImNvbmZpZyIsImRhdGEiLCJub2RlIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibm9kZUFsbEl0ZW0iLCJ1cmwiLCJub2RlcyIsImFsbCIsImdldCIsIm1hc2siLCJ0aGVuIiwiJGFwcGx5IiwicmVxdWVzdCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBRW5CQyxNLEdBQVM7QUFDUCxnQ0FBMEI7QUFFNUI7QUFIUyxLLFFBSVRDLEksR0FBTztBQUNMQyxZQUFNO0FBRVI7QUFITyxLLFFBSVJDLE8sR0FBVSxFQUFDLFFBQU8sRUFBQyxPQUFNLGFBQVAsRUFBcUIsU0FBUSxNQUE3QixFQUFSLEUsUUFDYkMsTSxHQUFTLEVBQUMsZUFBYyxFQUFDLGdCQUFlLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxNQUFsQixFQUF5QixRQUFPLE1BQWhDLEVBQXVDLFNBQVEsT0FBL0MsRUFBdUQsT0FBTSxLQUE3RCxFQUFoQixFQUFvRixvQkFBbUIsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsUUFBTyxNQUF2QixFQUE4QixPQUFNLE1BQXBDLEVBQTJDLFFBQU8sTUFBbEQsRUFBeUQsU0FBUSxPQUFqRSxFQUF5RSxPQUFNLEtBQS9FLEVBQXZHLEVBQTZMLHFCQUFvQixFQUFDLFNBQVEsT0FBVCxFQUFpQixRQUFPLE9BQXhCLEVBQWdDLE9BQU0sTUFBdEMsRUFBNkMsUUFBTyxNQUFwRCxFQUEyRCxTQUFRLE9BQW5FLEVBQTJFLE9BQU0sS0FBakYsRUFBak4sRUFBZixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQUVGO0FBSFUsSzs7QUFaVjs7Ozs7OEJBZ0JXO0FBQUE7O0FBQ1QsVUFBSUMsTUFBTSxZQUFJQyxLQUFKLENBQVVDLEdBQXBCO0FBQ0Esc0JBQUtDLEdBQUwsQ0FBUztBQUNQSCxhQUFLQSxHQURFO0FBRVBJLGNBQU07QUFGQyxPQUFULEVBR0dDLElBSEgsQ0FHUSxVQUFDWixJQUFELEVBQVU7QUFDaEIsZUFBS0MsSUFBTCxHQUFZRCxJQUFaO0FBQ0EsZUFBS2EsTUFBTDtBQUNELE9BTkQ7QUFPRDtBQUNEOzs7OzZCQUNVO0FBQ1IsV0FBS0MsT0FBTDtBQUNEO0FBQ0Q7Ozs7OEJBQ1csQ0FBRTs7OztFQWhDc0IsZUFBS0MsSTs7a0JBQXJCakIsTyIsImZpbGUiOiJub2RlQWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB7IEFQSSB9IGZyb20gJ0AvY29tbW9uJ1xuICBpbXBvcnQgeyBIVFRQIH0gZnJvbSAnd2VweS11dGlscydcbiAgaW1wb3J0IE5vZGVBbGxJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvbm9kZUFsbEl0ZW0nXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZUFsbCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgLy8g6aG16Z2i6YWN572uXG4gICAgY29uZmlnID0ge1xuICAgICAgJ25hdmlnYXRpb25CYXJUaXRsZVRleHQnOiAn5YWo6YOo6IqC54K5J1xuICAgIH1cbiAgICAvLyDmqKHmnb/liJ3lp4vnu5HlrprmlbDmja5cbiAgICBkYXRhID0ge1xuICAgICAgbm9kZToge31cbiAgICB9XG4gICAgLy8g5aOw5piO6aG16Z2i5Lit5bCG6KaB5L2/55So5Yiw55qE57uE5Lu2XG4gICAkcmVwZWF0ID0ge1wibm9kZVwiOntcImNvbVwiOlwibm9kZUFsbEl0ZW1cIixcInByb3BzXCI6XCJpdGVtXCJ9fTtcclxuJHByb3BzID0ge1wibm9kZUFsbEl0ZW1cIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcIm5vZGVcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIn0sXCJ2LWJpbmQ6aXRlbS5vbmNlXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwibm9kZVwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwifSxcInYtYmluZDppbmRleC5vbmNlXCI6e1widmFsdWVcIjpcImluZGV4XCIsXCJ0eXBlXCI6XCJpbmRleFwiLFwiZm9yXCI6XCJub2RlXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBub2RlQWxsSXRlbTogTm9kZUFsbEl0ZW1cbiAgICB9XG4gICAgLy8g6K+35rGC5pWw5o2uXG4gICAgcmVxdWVzdCAoKSB7XG4gICAgICBsZXQgdXJsID0gQVBJLm5vZGVzLmFsbFxuICAgICAgSFRUUC5nZXQoe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgbWFzazogdHJ1ZVxuICAgICAgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLm5vZGUgPSBkYXRhXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0pXG4gICAgfVxuICAgIC8vIOeUn+WRveWRqOacn+WHveaVsO+8jOmhtemdouWKoOi9vVxuICAgIG9uTG9hZCAoKSB7XG4gICAgICB0aGlzLnJlcXVlc3QoKVxuICAgIH1cbiAgICAvLyDnlJ/lkb3lkajmnJ/lh73mlbDvvIzliJ3mrKHmuLLmn5PlrozmiJBcbiAgICBvblJlYWR5ICgpIHt9XG4gIH1cbiJdfQ==