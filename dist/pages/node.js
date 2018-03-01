'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _nodeItem = require('./../components/nodeItem.js');

var _nodeItem2 = _interopRequireDefault(_nodeItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// 引入组件


var Node = function (_wepy$page) {
  _inherits(Node, _wepy$page);

  function Node() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Node);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Node.__proto__ || Object.getPrototypeOf(Node)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      'navigationBarTitleText': '节点'
      // 模板初始绑定数据
    }, _this.data = {
      node: [{
        'header': '分享与探索',
        'footer': '分享与探索',
        'nodes': [{
          'id': 12,
          'title': '问与答'
        }, {
          'id': 16,
          'title': '分享发现'
        }, {
          'id': 17,
          'title': '分享创造'
        }, {
          'id': 99,
          'title': '分享邀请码'
        }, {
          'id': 519,
          'title': '奇思妙想'
        }, {
          'id': 53,
          'title': '自言自语'
        }, {
          'id': 59,
          'title': '随想'
        }, {
          'id': 215,
          'title': '设计'
        }]
      }, {
        'header': 'Geek',
        'footer': 'Geek',
        'nodes': [{
          'id': 300,
          'title': '程序员'
        }, {
          'id': 90,
          'title': 'Python'
        }, {
          'id': 39,
          'title': 'Android'
        }, {
          'id': 108,
          'title': '宽带症候群'
        }, {
          'id': 11,
          'title': 'Linux'
        }, {
          'id': 62,
          'title': 'PHP'
        }, {
          'id': 104,
          'title': '云计算'
        }, {
          'id': 52,
          'title': '硬件'
        }, {
          'id': 190,
          'title': '外包'
        }, {
          'id': 436,
          'title': 'Node.js'
        }, {
          'id': 63,
          'title': 'Java'
        }, {
          'id': 79,
          'title': '服务器'
        }, {
          'id': 403,
          'title': 'Bitcoin'
        }, {
          'id': 61,
          'title': 'MySQL'
        }, {
          'id': 413,
          'title': '编程'
        }, {
          'id': 208,
          'title': 'Linode'
        }, {
          'id': 176,
          'title': '汽车'
        }, {
          'id': 301,
          'title': '设计师'
        }, {
          'id': 37,
          'title': 'Kindle'
        }, {
          'id': 513,
          'title': 'Markdown'
        }, {
          'id': 311,
          'title': 'MongoDB'
        }, {
          'id': 361,
          'title': 'Tornado'
        }, {
          'id': 81,
          'title': 'Ruby on Rails'
        }, {
          'id': 340,
          'title': 'Minecraft'
        }, {
          'id': 73,
          'title': '字体排印'
        }, {
          'id': 47,
          'title': 'Redis'
        }, {
          'id': 367,
          'title': 'Ruby'
        }, {
          'id': 310,
          'title': '商业模式'
        }, {
          'id': 24,
          'title': '数学'
        }, {
          'id': 58,
          'title': 'Photoshop'
        }, {
          'id': 371,
          'title': 'Amazon'
        }, {
          'id': 485,
          'title': 'LEGO'
        }, {
          'id': 294,
          'title': 'SONY'
        }, {
          'id': 883,
          'title': '自然语言处理'
        }, {
          'id': 985,
          'title': 'Serverless'
        }, {
          'id': 1005,
          'title': 'C#'
        }]
      }, {
        'header': '游戏',
        'footer': '游戏',
        'nodes': [{
          'id': 55,
          'title': '游戏'
        }, {
          'id': 675,
          'title': 'PlayStation 4'
        }, {
          'id': 454,
          'title': '英雄联盟'
        }, {
          'id': 172,
          'title': 'iGame'
        }, {
          'id': 324,
          'title': 'Battlefield 3'
        }, {
          'id': 98,
          'title': 'StarCraft 2'
        }, {
          'id': 33,
          'title': 'PlayStation 3'
        }, {
          'id': 378,
          'title': 'World of Warcraft'
        }, {
          'id': 511,
          'title': 'EVE'
        }, {
          'id': 34,
          'title': 'Xbox 360'
        }, {
          'id': 959,
          'title': 'Nintendo Switch'
        }, {
          'id': 981,
          'title': '王者荣耀'
        }, {
          'id': 686,
          'title': 'Battlefield 4'
        }, {
          'id': 508,
          'title': 'Gran Turismo'
        }, {
          'id': 36,
          'title': 'Wii'
        }, {
          'id': 748,
          'title': 'Wii U'
        }]
      }]
      // 声明页面中将要使用到的组件
    }, _this.$repeat = { "node": { "com": "nodeItem", "props": "item" } }, _this.$props = { "nodeItem": { "xmlns:v-bind": { "value": "", "for": "node", "item": "item", "index": "index", "key": "key" }, "v-bind:item.once": { "value": "item", "type": "item", "for": "node", "item": "item", "index": "index", "key": "key" }, "v-bind:index.once": { "value": "index", "type": "index", "for": "node", "item": "item", "index": "index", "key": "key" } } }, _this.$events = {}, _this.components = {
      nodeItem: _nodeItem2.default
      // 生命周期函数，页面加载
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // 页面配置


  _createClass(Node, [{
    key: 'onLoad',
    value: function onLoad() {}
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

  return Node;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Node , 'pages/node'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGUuanMiXSwibmFtZXMiOlsiTm9kZSIsImNvbmZpZyIsImRhdGEiLCJub2RlIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibm9kZUl0ZW0iLCJzdG9wUHVsbERvd25SZWZyZXNoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFFQTs7Ozs7Ozs7Ozs7QUFEQTs7O0lBR3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFFbkJDLE0sR0FBUztBQUNQLGdDQUEwQjtBQUU1QjtBQUhTLEssUUFJVEMsSSxHQUFPO0FBQ0xDLFlBQU0sQ0FBQztBQUNMLGtCQUFVLE9BREw7QUFFTCxrQkFBVSxPQUZMO0FBR0wsaUJBQVMsQ0FBQztBQUNSLGdCQUFNLEVBREU7QUFFUixtQkFBUztBQUZELFNBQUQsRUFJVDtBQUNFLGdCQUFNLEVBRFI7QUFFRSxtQkFBUztBQUZYLFNBSlMsRUFRVDtBQUNFLGdCQUFNLEVBRFI7QUFFRSxtQkFBUztBQUZYLFNBUlMsRUFZVDtBQUNFLGdCQUFNLEVBRFI7QUFFRSxtQkFBUztBQUZYLFNBWlMsRUFnQlQ7QUFDRSxnQkFBTSxHQURSO0FBRUUsbUJBQVM7QUFGWCxTQWhCUyxFQW9CVDtBQUNFLGdCQUFNLEVBRFI7QUFFRSxtQkFBUztBQUZYLFNBcEJTLEVBd0JUO0FBQ0UsZ0JBQU0sRUFEUjtBQUVFLG1CQUFTO0FBRlgsU0F4QlMsRUE0QlQ7QUFDRSxnQkFBTSxHQURSO0FBRUUsbUJBQVM7QUFGWCxTQTVCUztBQUhKLE9BQUQsRUFvQ047QUFDRSxrQkFBVSxNQURaO0FBRUUsa0JBQVUsTUFGWjtBQUdFLGlCQUFTLENBQUM7QUFDUixnQkFBTSxHQURFO0FBRVIsbUJBQVM7QUFGRCxTQUFELEVBSVQ7QUFDRSxnQkFBTSxFQURSO0FBRUUsbUJBQVM7QUFGWCxTQUpTLEVBUVQ7QUFDRSxnQkFBTSxFQURSO0FBRUUsbUJBQVM7QUFGWCxTQVJTLEVBWVQ7QUFDRSxnQkFBTSxHQURSO0FBRUUsbUJB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O0FBQ1o7Ozs7OEJBQ1csQ0FBRTtBQUNiOzs7O3dDQUNxQjtBQUNuQjtBQUNBLHFCQUFLQyxtQkFBTDtBQUNEOzs7O0VBblIrQixlQUFLQyxJOztrQkFBbEJWLEkiLCJmaWxlIjoibm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAvLyDlvJXlhaXnu4Tku7ZcbiAgaW1wb3J0IE5vZGVJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvbm9kZUl0ZW0nXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgLy8g6aG16Z2i6YWN572uXG4gICAgY29uZmlnID0ge1xuICAgICAgJ25hdmlnYXRpb25CYXJUaXRsZVRleHQnOiAn6IqC54K5J1xuICAgIH1cbiAgICAvLyDmqKHmnb/liJ3lp4vnu5HlrprmlbDmja5cbiAgICBkYXRhID0ge1xuICAgICAgbm9kZTogW3tcbiAgICAgICAgJ2hlYWRlcic6ICfliIbkuqvkuI7mjqLntKInLFxuICAgICAgICAnZm9vdGVyJzogJ+WIhuS6q+S4juaOoue0oicsXG4gICAgICAgICdub2Rlcyc6IFt7XG4gICAgICAgICAgJ2lkJzogMTIsXG4gICAgICAgICAgJ3RpdGxlJzogJ+mXruS4juetlCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDE2LFxuICAgICAgICAgICd0aXRsZSc6ICfliIbkuqvlj5HnjrAnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnaWQnOiAxNyxcbiAgICAgICAgICAndGl0bGUnOiAn5YiG5Lqr5Yib6YCgJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogOTksXG4gICAgICAgICAgJ3RpdGxlJzogJ+WIhuS6q+mCgOivt+eggSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDUxOSxcbiAgICAgICAgICAndGl0bGUnOiAn5aWH5oCd5aaZ5oOzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogNTMsXG4gICAgICAgICAgJ3RpdGxlJzogJ+iHquiogOiHquivrSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDU5LFxuICAgICAgICAgICd0aXRsZSc6ICfpmo/mg7MnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnaWQnOiAyMTUsXG4gICAgICAgICAgJ3RpdGxlJzogJ+iuvuiuoSdcbiAgICAgICAgfV1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICdoZWFkZXInOiAnR2VlaycsXG4gICAgICAgICdmb290ZXInOiAnR2VlaycsXG4gICAgICAgICdub2Rlcyc6IFt7XG4gICAgICAgICAgJ2lkJzogMzAwLFxuICAgICAgICAgICd0aXRsZSc6ICfnqIvluo/lkZgnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnaWQnOiA5MCxcbiAgICAgICAgICAndGl0bGUnOiAnUHl0aG9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogMzksXG4gICAgICAgICAgJ3RpdGxlJzogJ0FuZHJvaWQnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnaWQnOiAxMDgsXG4gICAgICAgICAgJ3RpdGxlJzogJ+WuveW4pueXh+WAmee+pCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDExLFxuICAgICAgICAgICd0aXRsZSc6ICdMaW51eCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDYyLFxuICAgICAgICAgICd0aXRsZSc6ICdQSFAnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnaWQnOiAxMDQsXG4gICAgICAgICAgJ3RpdGxlJzogJ+S6keiuoeeulydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDUyLFxuICAgICAgICAgICd0aXRsZSc6ICfnoazku7YnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnaWQnOiAxOTAsXG4gICAgICAgICAgJ3RpdGxlJzogJ+WkluWMhSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDQzNixcbiAgICAgICAgICAndGl0bGUnOiAnTm9kZS5qcydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDYzLFxuICAgICAgICAgICd0aXRsZSc6ICdKYXZhJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogNzksXG4gICAgICAgICAgJ3RpdGxlJzogJ+acjeWKoeWZqCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDQwMyxcbiAgICAgICAgICAndGl0bGUnOiAnQml0Y29pbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDYxLFxuICAgICAgICAgICd0aXRsZSc6ICdNeVNRTCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDQxMyxcbiAgICAgICAgICAndGl0bGUnOiAn57yW56iLJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogMjA4LFxuICAgICAgICAgICd0aXRsZSc6ICdMaW5vZGUnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnaWQnOiAxNzYsXG4gICAgICAgICAgJ3RpdGxlJzogJ+axvei9pidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDMwMSxcbiAgICAgICAgICAndGl0bGUnOiAn6K6+6K6h5biIJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogMzcsXG4gICAgICAgICAgJ3RpdGxlJzogJ0tpbmRsZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDUxMyxcbiAgICAgICAgICAndGl0bGUnOiAnTWFya2Rvd24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnaWQnOiAzMTEsXG4gICAgICAgICAgJ3RpdGxlJzogJ01vbmdvREInXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnaWQnOiAzNjEsXG4gICAgICAgICAgJ3RpdGxlJzogJ1Rvcm5hZG8nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnaWQnOiA4MSxcbiAgICAgICAgICAndGl0bGUnOiAnUnVieSBvbiBSYWlscydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDM0MCxcbiAgICAgICAgICAndGl0bGUnOiAnTWluZWNyYWZ0J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogNzMsXG4gICAgICAgICAgJ3RpdGxlJzogJ+Wtl+S9k+aOkuWNsCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDQ3LFxuICAgICAgICAgICd0aXRsZSc6ICdSZWRpcydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDM2NyxcbiAgICAgICAgICAndGl0bGUnOiAnUnVieSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDMxMCxcbiAgICAgICAgICAndGl0bGUnOiAn5ZWG5Lia5qih5byPJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogMjQsXG4gICAgICAgICAgJ3RpdGxlJzogJ+aVsOWtpidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDU4LFxuICAgICAgICAgICd0aXRsZSc6ICdQaG90b3Nob3AnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnaWQnOiAzNzEsXG4gICAgICAgICAgJ3RpdGxlJzogJ0FtYXpvbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDQ4NSxcbiAgICAgICAgICAndGl0bGUnOiAnTEVHTydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDI5NCxcbiAgICAgICAgICAndGl0bGUnOiAnU09OWSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDg4MyxcbiAgICAgICAgICAndGl0bGUnOiAn6Ieq54S26K+t6KiA5aSE55CGJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogOTg1LFxuICAgICAgICAgICd0aXRsZSc6ICdTZXJ2ZXJsZXNzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogMTAwNSxcbiAgICAgICAgICAndGl0bGUnOiAnQyMnXG4gICAgICAgIH1dXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAnaGVhZGVyJzogJ+a4uOaIjycsXG4gICAgICAgICdmb290ZXInOiAn5ri45oiPJyxcbiAgICAgICAgJ25vZGVzJzogW3tcbiAgICAgICAgICAnaWQnOiA1NSxcbiAgICAgICAgICAndGl0bGUnOiAn5ri45oiPJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogNjc1LFxuICAgICAgICAgICd0aXRsZSc6ICdQbGF5U3RhdGlvbiA0J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogNDU0LFxuICAgICAgICAgICd0aXRsZSc6ICfoi7Hpm4TogZTnm58nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnaWQnOiAxNzIsXG4gICAgICAgICAgJ3RpdGxlJzogJ2lHYW1lJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogMzI0LFxuICAgICAgICAgICd0aXRsZSc6ICdCYXR0bGVmaWVsZCAzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogOTgsXG4gICAgICAgICAgJ3RpdGxlJzogJ1N0YXJDcmFmdCAyJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogMzMsXG4gICAgICAgICAgJ3RpdGxlJzogJ1BsYXlTdGF0aW9uIDMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnaWQnOiAzNzgsXG4gICAgICAgICAgJ3RpdGxlJzogJ1dvcmxkIG9mIFdhcmNyYWZ0J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogNTExLFxuICAgICAgICAgICd0aXRsZSc6ICdFVkUnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnaWQnOiAzNCxcbiAgICAgICAgICAndGl0bGUnOiAnWGJveCAzNjAnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnaWQnOiA5NTksXG4gICAgICAgICAgJ3RpdGxlJzogJ05pbnRlbmRvIFN3aXRjaCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDk4MSxcbiAgICAgICAgICAndGl0bGUnOiAn546L6ICF6I2j6ICAJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogNjg2LFxuICAgICAgICAgICd0aXRsZSc6ICdCYXR0bGVmaWVsZCA0J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogNTA4LFxuICAgICAgICAgICd0aXRsZSc6ICdHcmFuIFR1cmlzbW8nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnaWQnOiAzNixcbiAgICAgICAgICAndGl0bGUnOiAnV2lpJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogNzQ4LFxuICAgICAgICAgICd0aXRsZSc6ICdXaWkgVSdcbiAgICAgICAgfV1cbiAgICAgIH1dXG4gICAgfVxuICAgIC8vIOWjsOaYjumhtemdouS4reWwhuimgeS9v+eUqOWIsOeahOe7hOS7tlxuICAgJHJlcGVhdCA9IHtcIm5vZGVcIjp7XCJjb21cIjpcIm5vZGVJdGVtXCIsXCJwcm9wc1wiOlwiaXRlbVwifX07XHJcbiRwcm9wcyA9IHtcIm5vZGVJdGVtXCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJub2RlXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCJ9LFwidi1iaW5kOml0ZW0ub25jZVwiOntcInZhbHVlXCI6XCJpdGVtXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcIm5vZGVcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIn0sXCJ2LWJpbmQ6aW5kZXgub25jZVwiOntcInZhbHVlXCI6XCJpbmRleFwiLFwidHlwZVwiOlwiaW5kZXhcIixcImZvclwiOlwibm9kZVwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwifX19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgbm9kZUl0ZW06IE5vZGVJdGVtXG4gICAgfVxuICAgIC8vIOeUn+WRveWRqOacn+WHveaVsO+8jOmhtemdouWKoOi9vVxuICAgIG9uTG9hZCAoKSB7fVxuICAgIC8vIOeUn+WRveWRqOacn+WHveaVsO+8jOWIneasoea4suafk+WujOaIkFxuICAgIG9uUmVhZHkgKCkge31cbiAgICAvLyDnm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICBvblB1bGxEb3duUmVmcmVzaCAoKSB7XG4gICAgICAvLyDliqDovb3mlbDmja7lrozmiJDlkI7lgZzmraLkuIvmi4nnirbmgIFcbiAgICAgIHdlcHkuc3RvcFB1bGxEb3duUmVmcmVzaCgpXG4gICAgfVxuICB9XG4iXX0=