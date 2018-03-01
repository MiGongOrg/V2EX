'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _nodeAllItem = require('./../components/nodeAllItem.js');

var _nodeAllItem2 = _interopRequireDefault(_nodeAllItem);

var _common = require('./../common/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// 引入组件


var NodeAll = function (_wepy$page) {
  _inherits(NodeAll, _wepy$page);

  function NodeAll() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, NodeAll);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = NodeAll.__proto__ || Object.getPrototypeOf(NodeAll)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
      'navigationBarTitleText': '全部节点'
      // 模板初始绑定数据
    }, _this2.data = {
      node: {}
      // 声明页面中将要使用到的组件
    }, _this2.$repeat = { "node": { "com": "nodeAllItem", "props": "item" } }, _this2.$props = { "nodeAllItem": { "xmlns:v-bind": { "value": "", "for": "node", "item": "item", "index": "index", "key": "key" }, "v-bind:item.once": { "value": "item", "type": "item", "for": "node", "item": "item", "index": "index", "key": "key" }, "v-bind:index.once": { "value": "index", "type": "index", "for": "node", "item": "item", "index": "index", "key": "key" } } }, _this2.$events = {}, _this2.components = {
      nodeAllItem: _nodeAllItem2.default
      // 请求数据
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }
  // 页面配置


  _createClass(NodeAll, [{
    key: 'request',
    value: function request() {
      var _this = this;
      var url = _common.URLS.nodes.all;
      _common.HTTP.get(url).then(function (data) {
        _this.node = data;
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
    }
  }]);

  return NodeAll;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(NodeAll , 'pages/nodeAll'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVBbGwuanMiXSwibmFtZXMiOlsiTm9kZUFsbCIsImNvbmZpZyIsImRhdGEiLCJub2RlIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibm9kZUFsbEl0ZW0iLCJfdGhpcyIsInVybCIsIm5vZGVzIiwiYWxsIiwiZ2V0IiwidGhlbiIsIiRhcHBseSIsInJlcXVlc3QiLCJzdG9wUHVsbERvd25SZWZyZXNoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7QUFGQTs7O0lBSXFCQSxPOzs7Ozs7Ozs7Ozs7OzsyTEFFbkJDLE0sR0FBUztBQUNQLGdDQUEwQjtBQUU1QjtBQUhTLEssU0FJVEMsSSxHQUFPO0FBQ0xDLFlBQU07QUFFUjtBQUhPLEssU0FJUkMsTyxHQUFVLEVBQUMsUUFBTyxFQUFDLE9BQU0sYUFBUCxFQUFxQixTQUFRLE1BQTdCLEVBQVIsRSxTQUNiQyxNLEdBQVMsRUFBQyxlQUFjLEVBQUMsZ0JBQWUsRUFBQyxTQUFRLEVBQVQsRUFBWSxPQUFNLE1BQWxCLEVBQXlCLFFBQU8sTUFBaEMsRUFBdUMsU0FBUSxPQUEvQyxFQUF1RCxPQUFNLEtBQTdELEVBQWhCLEVBQW9GLG9CQUFtQixFQUFDLFNBQVEsTUFBVCxFQUFnQixRQUFPLE1BQXZCLEVBQThCLE9BQU0sTUFBcEMsRUFBMkMsUUFBTyxNQUFsRCxFQUF5RCxTQUFRLE9BQWpFLEVBQXlFLE9BQU0sS0FBL0UsRUFBdkcsRUFBNkwscUJBQW9CLEVBQUMsU0FBUSxPQUFULEVBQWlCLFFBQU8sT0FBeEIsRUFBZ0MsT0FBTSxNQUF0QyxFQUE2QyxRQUFPLE1BQXBELEVBQTJELFNBQVEsT0FBbkUsRUFBMkUsT0FBTSxLQUFqRixFQUFqTixFQUFmLEUsU0FDVEMsTyxHQUFVLEUsU0FDVEMsVSxHQUFhO0FBQ1JDO0FBRUY7QUFIVSxLOztBQVpWOzs7Ozs4QkFnQlc7QUFDVCxVQUFJQyxRQUFRLElBQVo7QUFDQSxVQUFJQyxNQUFNLGFBQUtDLEtBQUwsQ0FBV0MsR0FBckI7QUFDQSxtQkFBS0MsR0FBTCxDQUFTSCxHQUFULEVBQWNJLElBQWQsQ0FBbUIsVUFBQ1osSUFBRCxFQUFVO0FBQzNCTyxjQUFNTixJQUFOLEdBQWFELElBQWI7QUFDQU8sY0FBTU0sTUFBTjtBQUNELE9BSEQ7QUFJRDtBQUNEOzs7OzZCQUNVO0FBQ1IsVUFBSU4sUUFBUSxJQUFaO0FBQ0FBLFlBQU1PLE9BQU47QUFDRDtBQUNEOzs7OzhCQUNXLENBQUU7QUFDYjs7Ozt3Q0FDcUI7QUFDbkI7QUFDQSxxQkFBS0MsbUJBQUw7QUFDRDs7OztFQXBDa0MsZUFBS0MsSTs7a0JBQXJCbEIsTyIsImZpbGUiOiJub2RlQWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIC8vIOW8leWFpee7hOS7tlxuICBpbXBvcnQgTm9kZUFsbEl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9ub2RlQWxsSXRlbSdcbiAgaW1wb3J0IHsgVVJMUywgSFRUUCB9IGZyb20gJy4uL2NvbW1vbidcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlQWxsIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAvLyDpobXpnaLphY3nva5cbiAgICBjb25maWcgPSB7XG4gICAgICAnbmF2aWdhdGlvbkJhclRpdGxlVGV4dCc6ICflhajpg6joioLngrknXG4gICAgfVxuICAgIC8vIOaooeadv+WIneWni+e7keWumuaVsOaNrlxuICAgIGRhdGEgPSB7XG4gICAgICBub2RlOiB7fVxuICAgIH1cbiAgICAvLyDlo7DmmI7pobXpnaLkuK3lsIbopoHkvb/nlKjliLDnmoTnu4Tku7ZcbiAgICRyZXBlYXQgPSB7XCJub2RlXCI6e1wiY29tXCI6XCJub2RlQWxsSXRlbVwiLFwicHJvcHNcIjpcIml0ZW1cIn19O1xyXG4kcHJvcHMgPSB7XCJub2RlQWxsSXRlbVwiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwibm9kZVwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwifSxcInYtYmluZDppdGVtLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJub2RlXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCJ9LFwidi1iaW5kOmluZGV4Lm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaW5kZXhcIixcInR5cGVcIjpcImluZGV4XCIsXCJmb3JcIjpcIm5vZGVcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIn19fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIG5vZGVBbGxJdGVtOiBOb2RlQWxsSXRlbVxuICAgIH1cbiAgICAvLyDor7fmsYLmlbDmja5cbiAgICByZXF1ZXN0ICgpIHtcbiAgICAgIGxldCBfdGhpcyA9IHRoaXNcbiAgICAgIGxldCB1cmwgPSBVUkxTLm5vZGVzLmFsbFxuICAgICAgSFRUUC5nZXQodXJsKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIF90aGlzLm5vZGUgPSBkYXRhXG4gICAgICAgIF90aGlzLiRhcHBseSgpXG4gICAgICB9KVxuICAgIH1cbiAgICAvLyDnlJ/lkb3lkajmnJ/lh73mlbDvvIzpobXpnaLliqDovb1cbiAgICBvbkxvYWQgKCkge1xuICAgICAgbGV0IF90aGlzID0gdGhpc1xuICAgICAgX3RoaXMucmVxdWVzdCgpXG4gICAgfVxuICAgIC8vIOeUn+WRveWRqOacn+WHveaVsO+8jOWIneasoea4suafk+WujOaIkFxuICAgIG9uUmVhZHkgKCkge31cbiAgICAvLyDnm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICBvblB1bGxEb3duUmVmcmVzaCAoKSB7XG4gICAgICAvLyDliqDovb3mlbDmja7lrozmiJDlkI7lgZzmraLkuIvmi4nnirbmgIFcbiAgICAgIHdlcHkuc3RvcFB1bGxEb3duUmVmcmVzaCgpXG4gICAgfVxuICB9XG4iXX0=