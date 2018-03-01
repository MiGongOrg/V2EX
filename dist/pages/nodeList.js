'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _nodeInfo = require('./../components/nodeInfo.js');

var _nodeInfo2 = _interopRequireDefault(_nodeInfo);

var _postItem = require('./../components/postItem.js');

var _postItem2 = _interopRequireDefault(_postItem);

var _common = require('./../common/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// 引入组件


var nodeList = function (_wepy$page) {
  _inherits(nodeList, _wepy$page);

  function nodeList() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, nodeList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = nodeList.__proto__ || Object.getPrototypeOf(nodeList)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
      'navigationBarTextStyle': 'white',
      'navigationBarBackgroundColor': '#001d25'
      // 模板初始绑定数据
    }, _this2.data = {
      list: [],
      nodeName: ''
      // 声明页面中将要使用到的组件
    }, _this2.$repeat = { "list": { "com": "postItem", "props": "item" } }, _this2.$props = { "postItem": { "xmlns:v-bind": { "value": "", "for": "list", "item": "item", "index": "index", "key": "key" }, "v-bind:item.once": { "value": "item", "type": "item", "for": "list", "item": "item", "index": "index", "key": "key" } } }, _this2.$events = {}, _this2.components = {
      nodeinfo: _nodeInfo2.default,
      postItem: _postItem2.default
      // 请求数据
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }
  // 页面配置


  _createClass(nodeList, [{
    key: 'request',
    value: function request(options) {
      var _this = this;
      var id = options.id;
      var url = _common.URLS.topics.show + '?node_id=' + id;

      _common.HTTP.get(url).then(function (data) {
        var type = 'avatar_large';
        // 头像URL替换
        data = _common.Utils.replace(data, type);
        _this.nodeName = options.title;
        _this.list = data;
        _this.$apply();
      });
    }
    // 生命周期函数，页面加载

  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      var _this = this;
      // 设置当前页面的标题
      _wepy2.default.setNavigationBarTitle({
        title: options.title
      });
      // 调用组件 nodeinfo 中的 request 方法，并传递参数对象 options
      this.$invoke('nodeinfo', 'request', options);
      _this.request(options);
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

  return nodeList;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(nodeList , 'pages/nodeList'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVMaXN0LmpzIl0sIm5hbWVzIjpbIm5vZGVMaXN0IiwiY29uZmlnIiwiZGF0YSIsImxpc3QiLCJub2RlTmFtZSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm5vZGVpbmZvIiwicG9zdEl0ZW0iLCJvcHRpb25zIiwiX3RoaXMiLCJpZCIsInVybCIsInRvcGljcyIsInNob3ciLCJnZXQiLCJ0aGVuIiwidHlwZSIsInJlcGxhY2UiLCJ0aXRsZSIsIiRhcHBseSIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsIiRpbnZva2UiLCJyZXF1ZXN0Iiwic3RvcFB1bGxEb3duUmVmcmVzaCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7QUFIQTs7O0lBS3FCQSxROzs7Ozs7Ozs7Ozs7Ozs2TEFFbkJDLE0sR0FBUztBQUNQLGdDQUEwQixPQURuQjtBQUVQLHNDQUFnQztBQUVsQztBQUpTLEssU0FLVEMsSSxHQUFPO0FBQ0xDLFlBQU0sRUFERDtBQUVMQyxnQkFBVTtBQUVaO0FBSk8sSyxTQUtSQyxPLEdBQVUsRUFBQyxRQUFPLEVBQUMsT0FBTSxVQUFQLEVBQWtCLFNBQVEsTUFBMUIsRUFBUixFLFNBQ2JDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sTUFBbEIsRUFBeUIsUUFBTyxNQUFoQyxFQUF1QyxTQUFRLE9BQS9DLEVBQXVELE9BQU0sS0FBN0QsRUFBaEIsRUFBb0Ysb0JBQW1CLEVBQUMsU0FBUSxNQUFULEVBQWdCLFFBQU8sTUFBdkIsRUFBOEIsT0FBTSxNQUFwQyxFQUEyQyxRQUFPLE1BQWxELEVBQXlELFNBQVEsT0FBakUsRUFBeUUsT0FBTSxLQUEvRSxFQUF2RyxFQUFaLEUsU0FDVEMsTyxHQUFVLEUsU0FDVEMsVSxHQUFhO0FBQ1JDLGtDQURRO0FBRVJDO0FBRUY7QUFKVSxLOztBQWRWOzs7Ozs0QkFtQlNDLE8sRUFBUztBQUNoQixVQUFJQyxRQUFRLElBQVo7QUFDQSxVQUFJQyxLQUFLRixRQUFRRSxFQUFqQjtBQUNBLFVBQUlDLE1BQU0sYUFBS0MsTUFBTCxDQUFZQyxJQUFaLEdBQW1CLFdBQW5CLEdBQWlDSCxFQUEzQzs7QUFFQSxtQkFBS0ksR0FBTCxDQUFTSCxHQUFULEVBQWNJLElBQWQsQ0FBbUIsVUFBQ2hCLElBQUQsRUFBVTtBQUMzQixZQUFJaUIsT0FBTyxjQUFYO0FBQ0E7QUFDQWpCLGVBQU8sY0FBTWtCLE9BQU4sQ0FBY2xCLElBQWQsRUFBb0JpQixJQUFwQixDQUFQO0FBQ0FQLGNBQU1SLFFBQU4sR0FBaUJPLFFBQVFVLEtBQXpCO0FBQ0FULGNBQU1ULElBQU4sR0FBYUQsSUFBYjtBQUNBVSxjQUFNVSxNQUFOO0FBQ0QsT0FQRDtBQVFEO0FBQ0Q7Ozs7MkJBQ1FYLE8sRUFBUztBQUNmLFVBQUlDLFFBQVEsSUFBWjtBQUNBO0FBQ0EscUJBQUtXLHFCQUFMLENBQTJCO0FBQ3pCRixlQUFPVixRQUFRVTtBQURVLE9BQTNCO0FBR0E7QUFDQSxXQUFLRyxPQUFMLENBQWEsVUFBYixFQUF5QixTQUF6QixFQUFvQ2IsT0FBcEM7QUFDQUMsWUFBTWEsT0FBTixDQUFjZCxPQUFkO0FBQ0Q7QUFDRDs7Ozs4QkFDVyxDQUFFO0FBQ2I7Ozs7d0NBQ3FCO0FBQ25CO0FBQ0EscUJBQUtlLG1CQUFMO0FBQ0Q7Ozs7RUFuRG1DLGVBQUtDLEk7O2tCQUF0QjNCLFEiLCJmaWxlIjoibm9kZUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgLy8g5byV5YWl57uE5Lu2XG4gIGltcG9ydCBub2RlSW5mbyBmcm9tICcuLi9jb21wb25lbnRzL25vZGVJbmZvJ1xuICBpbXBvcnQgUG9zdEl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9wb3N0SXRlbSdcbiAgaW1wb3J0IHsgVXRpbHMsIFVSTFMsIEhUVFAgfSBmcm9tICcuLi9jb21tb24nXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3Mgbm9kZUxpc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIC8vIOmhtemdoumFjee9rlxuICAgIGNvbmZpZyA9IHtcbiAgICAgICduYXZpZ2F0aW9uQmFyVGV4dFN0eWxlJzogJ3doaXRlJyxcbiAgICAgICduYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yJzogJyMwMDFkMjUnXG4gICAgfVxuICAgIC8vIOaooeadv+WIneWni+e7keWumuaVsOaNrlxuICAgIGRhdGEgPSB7XG4gICAgICBsaXN0OiBbXSxcbiAgICAgIG5vZGVOYW1lOiAnJ1xuICAgIH1cbiAgICAvLyDlo7DmmI7pobXpnaLkuK3lsIbopoHkvb/nlKjliLDnmoTnu4Tku7ZcbiAgICRyZXBlYXQgPSB7XCJsaXN0XCI6e1wiY29tXCI6XCJwb3N0SXRlbVwiLFwicHJvcHNcIjpcIml0ZW1cIn19O1xyXG4kcHJvcHMgPSB7XCJwb3N0SXRlbVwiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwibGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwifSxcInYtYmluZDppdGVtLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJsaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBub2RlaW5mbzogbm9kZUluZm8sXG4gICAgICBwb3N0SXRlbTogUG9zdEl0ZW1cbiAgICB9XG4gICAgLy8g6K+35rGC5pWw5o2uXG4gICAgcmVxdWVzdCAob3B0aW9ucykge1xuICAgICAgbGV0IF90aGlzID0gdGhpc1xuICAgICAgbGV0IGlkID0gb3B0aW9ucy5pZFxuICAgICAgbGV0IHVybCA9IFVSTFMudG9waWNzLnNob3cgKyAnP25vZGVfaWQ9JyArIGlkXG5cbiAgICAgIEhUVFAuZ2V0KHVybCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBsZXQgdHlwZSA9ICdhdmF0YXJfbGFyZ2UnXG4gICAgICAgIC8vIOWktOWDj1VSTOabv+aNolxuICAgICAgICBkYXRhID0gVXRpbHMucmVwbGFjZShkYXRhLCB0eXBlKVxuICAgICAgICBfdGhpcy5ub2RlTmFtZSA9IG9wdGlvbnMudGl0bGVcbiAgICAgICAgX3RoaXMubGlzdCA9IGRhdGFcbiAgICAgICAgX3RoaXMuJGFwcGx5KClcbiAgICAgIH0pXG4gICAgfVxuICAgIC8vIOeUn+WRveWRqOacn+WHveaVsO+8jOmhtemdouWKoOi9vVxuICAgIG9uTG9hZCAob3B0aW9ucykge1xuICAgICAgbGV0IF90aGlzID0gdGhpc1xuICAgICAgLy8g6K6+572u5b2T5YmN6aG16Z2i55qE5qCH6aKYXG4gICAgICB3ZXB5LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XG4gICAgICAgIHRpdGxlOiBvcHRpb25zLnRpdGxlXG4gICAgICB9KVxuICAgICAgLy8g6LCD55So57uE5Lu2IG5vZGVpbmZvIOS4reeahCByZXF1ZXN0IOaWueazle+8jOW5tuS8oOmAkuWPguaVsOWvueixoSBvcHRpb25zXG4gICAgICB0aGlzLiRpbnZva2UoJ25vZGVpbmZvJywgJ3JlcXVlc3QnLCBvcHRpb25zKVxuICAgICAgX3RoaXMucmVxdWVzdChvcHRpb25zKVxuICAgIH1cbiAgICAvLyDnlJ/lkb3lkajmnJ/lh73mlbDvvIzliJ3mrKHmuLLmn5PlrozmiJBcbiAgICBvblJlYWR5ICgpIHt9XG4gICAgLy8g55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAgb25QdWxsRG93blJlZnJlc2ggKCkge1xuICAgICAgLy8g5Yqg6L295pWw5o2u5a6M5oiQ5ZCO5YGc5q2i5LiL5ouJ54q25oCBXG4gICAgICB3ZXB5LnN0b3BQdWxsRG93blJlZnJlc2goKVxuICAgIH1cbiAgfVxuIl19