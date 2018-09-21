'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _common = require('./../common/index.js');

var _wepyUtils = require('./../npm/wepy-utils/index.js');

var _nodeInfo = require('./../components/nodeInfo.js');

var _nodeInfo2 = _interopRequireDefault(_nodeInfo);

var _postItem = require('./../components/postItem.js');

var _postItem2 = _interopRequireDefault(_postItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var nodeList = function (_wepy$page) {
  _inherits(nodeList, _wepy$page);

  function nodeList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, nodeList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = nodeList.__proto__ || Object.getPrototypeOf(nodeList)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      'navigationBarTextStyle': 'white',
      'navigationBarBackgroundColor': '#001d25'
      // 模板初始绑定数据
    }, _this.data = {
      list: [],
      nodeName: ''
      // 声明页面中将要使用到的组件
    }, _this.$repeat = { "list": { "com": "postItem", "props": "item" } }, _this.$props = { "postItem": { "xmlns:v-bind": { "value": "", "for": "list", "item": "item", "index": "index", "key": "key" }, "v-bind:item.once": { "value": "item", "type": "item", "for": "list", "item": "item", "index": "index", "key": "key" } } }, _this.$events = {}, _this.components = {
      nodeinfo: _nodeInfo2.default,
      postItem: _postItem2.default
      // 请求数据
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // 页面配置


  _createClass(nodeList, [{
    key: 'request',
    value: function request(options) {
      var _this2 = this;

      var id = options.id;
      var url = _common.API.topics.show;
      var params = {
        'node_id': id
      };
      _wepyUtils.HTTP.get({
        url: url,
        params: params,
        mask: true
      }).then(function (data) {
        var type = 'avatar_large';
        // 头像URL替换
        data = _common.TOOL.replace(data, type);
        _this2.nodeName = options.title;
        _this2.list = data;
        _this2.$apply();
      });
    }
    // 生命周期函数，页面加载

  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      // 设置当前页面的标题
      _wepy2.default.setNavigationBarTitle({
        title: options.title
      });
      // 调用组件 nodeinfo 中的 request 方法，并传递参数对象 options
      this.$invoke('nodeinfo', 'request', options);
      this.request(options);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVMaXN0LmpzIl0sIm5hbWVzIjpbIm5vZGVMaXN0IiwiY29uZmlnIiwiZGF0YSIsImxpc3QiLCJub2RlTmFtZSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm5vZGVpbmZvIiwicG9zdEl0ZW0iLCJvcHRpb25zIiwiaWQiLCJ1cmwiLCJ0b3BpY3MiLCJzaG93IiwicGFyYW1zIiwiZ2V0IiwibWFzayIsInRoZW4iLCJ0eXBlIiwicmVwbGFjZSIsInRpdGxlIiwiJGFwcGx5Iiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwiJGludm9rZSIsInJlcXVlc3QiLCJzdG9wUHVsbERvd25SZWZyZXNoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUVuQkMsTSxHQUFTO0FBQ1AsZ0NBQTBCLE9BRG5CO0FBRVAsc0NBQWdDO0FBRWxDO0FBSlMsSyxRQUtUQyxJLEdBQU87QUFDTEMsWUFBTSxFQUREO0FBRUxDLGdCQUFVO0FBRVo7QUFKTyxLLFFBS1JDLE8sR0FBVSxFQUFDLFFBQU8sRUFBQyxPQUFNLFVBQVAsRUFBa0IsU0FBUSxNQUExQixFQUFSLEUsUUFDYkMsTSxHQUFTLEVBQUMsWUFBVyxFQUFDLGdCQUFlLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxNQUFsQixFQUF5QixRQUFPLE1BQWhDLEVBQXVDLFNBQVEsT0FBL0MsRUFBdUQsT0FBTSxLQUE3RCxFQUFoQixFQUFvRixvQkFBbUIsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsUUFBTyxNQUF2QixFQUE4QixPQUFNLE1BQXBDLEVBQTJDLFFBQU8sTUFBbEQsRUFBeUQsU0FBUSxPQUFqRSxFQUF5RSxPQUFNLEtBQS9FLEVBQXZHLEVBQVosRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsa0NBRFE7QUFFUkM7QUFFRjtBQUpVLEs7O0FBZFY7Ozs7OzRCQW1CU0MsTyxFQUFTO0FBQUE7O0FBQ2hCLFVBQUlDLEtBQUtELFFBQVFDLEVBQWpCO0FBQ0EsVUFBSUMsTUFBTSxZQUFJQyxNQUFKLENBQVdDLElBQXJCO0FBQ0EsVUFBSUMsU0FBUztBQUNYLG1CQUFXSjtBQURBLE9BQWI7QUFHQSxzQkFBS0ssR0FBTCxDQUFTO0FBQ1BKLGFBQUtBLEdBREU7QUFFUEcsZ0JBQVFBLE1BRkQ7QUFHUEUsY0FBTTtBQUhDLE9BQVQsRUFJR0MsSUFKSCxDQUlRLFVBQUNqQixJQUFELEVBQVU7QUFDaEIsWUFBSWtCLE9BQU8sY0FBWDtBQUNBO0FBQ0FsQixlQUFPLGFBQUttQixPQUFMLENBQWFuQixJQUFiLEVBQW1Ca0IsSUFBbkIsQ0FBUDtBQUNBLGVBQUtoQixRQUFMLEdBQWdCTyxRQUFRVyxLQUF4QjtBQUNBLGVBQUtuQixJQUFMLEdBQVlELElBQVo7QUFDQSxlQUFLcUIsTUFBTDtBQUNELE9BWEQ7QUFZRDtBQUNEOzs7OzJCQUNRWixPLEVBQVM7QUFDZjtBQUNBLHFCQUFLYSxxQkFBTCxDQUEyQjtBQUN6QkYsZUFBT1gsUUFBUVc7QUFEVSxPQUEzQjtBQUdBO0FBQ0EsV0FBS0csT0FBTCxDQUFhLFVBQWIsRUFBeUIsU0FBekIsRUFBb0NkLE9BQXBDO0FBQ0EsV0FBS2UsT0FBTCxDQUFhZixPQUFiO0FBQ0Q7QUFDRDs7Ozs4QkFDVyxDQUFFO0FBQ2I7Ozs7d0NBQ3FCO0FBQ25CO0FBQ0EscUJBQUtnQixtQkFBTDtBQUNEOzs7O0VBdkRtQyxlQUFLQyxJOztrQkFBdEI1QixRIiwiZmlsZSI6Im5vZGVMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB7IEFQSSwgVE9PTCB9IGZyb20gJ0AvY29tbW9uJ1xuICBpbXBvcnQgeyBIVFRQIH0gZnJvbSAnd2VweS11dGlscydcbiAgaW1wb3J0IG5vZGVJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvbm9kZUluZm8nXG4gIGltcG9ydCBQb3N0SXRlbSBmcm9tICcuLi9jb21wb25lbnRzL3Bvc3RJdGVtJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIG5vZGVMaXN0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAvLyDpobXpnaLphY3nva5cbiAgICBjb25maWcgPSB7XG4gICAgICAnbmF2aWdhdGlvbkJhclRleHRTdHlsZSc6ICd3aGl0ZScsXG4gICAgICAnbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcic6ICcjMDAxZDI1J1xuICAgIH1cbiAgICAvLyDmqKHmnb/liJ3lp4vnu5HlrprmlbDmja5cbiAgICBkYXRhID0ge1xuICAgICAgbGlzdDogW10sXG4gICAgICBub2RlTmFtZTogJydcbiAgICB9XG4gICAgLy8g5aOw5piO6aG16Z2i5Lit5bCG6KaB5L2/55So5Yiw55qE57uE5Lu2XG4gICAkcmVwZWF0ID0ge1wibGlzdFwiOntcImNvbVwiOlwicG9zdEl0ZW1cIixcInByb3BzXCI6XCJpdGVtXCJ9fTtcclxuJHByb3BzID0ge1wicG9zdEl0ZW1cIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcImxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIn0sXCJ2LWJpbmQ6aXRlbS5vbmNlXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwibGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwifX19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgbm9kZWluZm86IG5vZGVJbmZvLFxuICAgICAgcG9zdEl0ZW06IFBvc3RJdGVtXG4gICAgfVxuICAgIC8vIOivt+axguaVsOaNrlxuICAgIHJlcXVlc3QgKG9wdGlvbnMpIHtcbiAgICAgIGxldCBpZCA9IG9wdGlvbnMuaWRcbiAgICAgIGxldCB1cmwgPSBBUEkudG9waWNzLnNob3dcbiAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICdub2RlX2lkJzogaWRcbiAgICAgIH1cbiAgICAgIEhUVFAuZ2V0KHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICBtYXNrOiB0cnVlXG4gICAgICB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGxldCB0eXBlID0gJ2F2YXRhcl9sYXJnZSdcbiAgICAgICAgLy8g5aS05YOPVVJM5pu/5o2iXG4gICAgICAgIGRhdGEgPSBUT09MLnJlcGxhY2UoZGF0YSwgdHlwZSlcbiAgICAgICAgdGhpcy5ub2RlTmFtZSA9IG9wdGlvbnMudGl0bGVcbiAgICAgICAgdGhpcy5saXN0ID0gZGF0YVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9KVxuICAgIH1cbiAgICAvLyDnlJ/lkb3lkajmnJ/lh73mlbDvvIzpobXpnaLliqDovb1cbiAgICBvbkxvYWQgKG9wdGlvbnMpIHtcbiAgICAgIC8vIOiuvue9ruW9k+WJjemhtemdoueahOagh+mimFxuICAgICAgd2VweS5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xuICAgICAgICB0aXRsZTogb3B0aW9ucy50aXRsZVxuICAgICAgfSlcbiAgICAgIC8vIOiwg+eUqOe7hOS7tiBub2RlaW5mbyDkuK3nmoQgcmVxdWVzdCDmlrnms5XvvIzlubbkvKDpgJLlj4LmlbDlr7nosaEgb3B0aW9uc1xuICAgICAgdGhpcy4kaW52b2tlKCdub2RlaW5mbycsICdyZXF1ZXN0Jywgb3B0aW9ucylcbiAgICAgIHRoaXMucmVxdWVzdChvcHRpb25zKVxuICAgIH1cbiAgICAvLyDnlJ/lkb3lkajmnJ/lh73mlbDvvIzliJ3mrKHmuLLmn5PlrozmiJBcbiAgICBvblJlYWR5ICgpIHt9XG4gICAgLy8g55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAgb25QdWxsRG93blJlZnJlc2ggKCkge1xuICAgICAgLy8g5Yqg6L295pWw5o2u5a6M5oiQ5ZCO5YGc5q2i5LiL5ouJ54q25oCBXG4gICAgICB3ZXB5LnN0b3BQdWxsRG93blJlZnJlc2goKVxuICAgIH1cbiAgfVxuIl19