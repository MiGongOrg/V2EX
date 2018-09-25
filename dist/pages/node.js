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
  }]);

  return Node;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Node , 'pages/node'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGUuanMiXSwibmFtZXMiOlsiTm9kZSIsImNvbmZpZyIsImRhdGEiLCJub2RlIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibm9kZUl0ZW0iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUVuQkMsTSxHQUFTO0FBQ1AsZ0NBQTBCO0FBRTVCO0FBSFMsSyxRQUlUQyxJLEdBQU87QUFDTEMsWUFBTSxDQUFDO0FBQ0wsa0JBQVUsT0FETDtBQUVMLGtCQUFVLE9BRkw7QUFHTCxpQkFBUyxDQUFDO0FBQ1IsZ0JBQU0sRUFERTtBQUVSLG1CQUFTO0FBRkQsU0FBRCxFQUlUO0FBQ0UsZ0JBQU0sRUFEUjtBQUVFLG1CQUFTO0FBRlgsU0FKUyxFQVFUO0FBQ0UsZ0JBQU0sRUFEUjtBQUVFLG1CQUFTO0FBRlgsU0FSUyxFQVlUO0FBQ0UsZ0JBQU0sRUFEUjtBQUVFLG1CQUFTO0FBRlgsU0FaUyxFQWdCVDtBQUNFLGdCQUFNLEdBRFI7QUFFRSxtQkFBUztBQUZYLFNBaEJTLEVBb0JUO0FBQ0UsZ0JBQU0sRUFEUjtBQUVFLG1CQUFTO0FBRlgsU0FwQlMsRUF3QlQ7QUFDRSxnQkFBTSxFQURSO0FBRUUsbUJBQVM7QUFGWCxTQXhCUyxFQTRCVDtBQUNFLGdCQUFNLEdBRFI7QUFFRSxtQkFBUztBQUZYLFNBNUJTO0FBSEosT0FBRCxFQW9DTjtBQUNFLGtCQUFVLE1BRFo7QUFFRSxrQkFBVSxNQUZaO0FBR0UsaUJBQVMsQ0FBQztBQUNSLGdCQUFNLEdBREU7QUFFUixtQkFBUztBQUZELFNBQUQsRUFJVDtBQUNFLGdCQUFNLEVBRFI7QUFFRSxtQkFBUztBQUZYLFNBSlMsRUFRVDtBQUNFLGdCQUFNLEVBRFI7QUFFRSxtQkFBUztBQUZYLFNBUlMsRUFZVDtBQUNFLGdCQUFNLEdBRFI7QUFFRSxtQkFBUztBQUZYLFNBWlMsRUFnQlQ7QUFDRSxnQkFB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QixlQUFLQyxJOztrQkFBbEJULEkiLCJmaWxlIjoibm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgTm9kZUl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9ub2RlSXRlbSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAvLyDpobXpnaLphY3nva5cbiAgICBjb25maWcgPSB7XG4gICAgICAnbmF2aWdhdGlvbkJhclRpdGxlVGV4dCc6ICfoioLngrknXG4gICAgfVxuICAgIC8vIOaooeadv+WIneWni+e7keWumuaVsOaNrlxuICAgIGRhdGEgPSB7XG4gICAgICBub2RlOiBbe1xuICAgICAgICAnaGVhZGVyJzogJ+WIhuS6q+S4juaOoue0oicsXG4gICAgICAgICdmb290ZXInOiAn5YiG5Lqr5LiO5o6i57SiJyxcbiAgICAgICAgJ25vZGVzJzogW3tcbiAgICAgICAgICAnaWQnOiAxMixcbiAgICAgICAgICAndGl0bGUnOiAn6Zeu5LiO562UJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogMTYsXG4gICAgICAgICAgJ3RpdGxlJzogJ+WIhuS6q+WPkeeOsCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDE3LFxuICAgICAgICAgICd0aXRsZSc6ICfliIbkuqvliJvpgKAnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnaWQnOiA5OSxcbiAgICAgICAgICAndGl0bGUnOiAn5YiG5Lqr6YKA6K+356CBJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogNTE5LFxuICAgICAgICAgICd0aXRsZSc6ICflpYfmgJ3lppnmg7MnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnaWQnOiA1MyxcbiAgICAgICAgICAndGl0bGUnOiAn6Ieq6KiA6Ieq6K+tJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogNTksXG4gICAgICAgICAgJ3RpdGxlJzogJ+maj+aDsydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDIxNSxcbiAgICAgICAgICAndGl0bGUnOiAn6K6+6K6hJ1xuICAgICAgICB9XVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ2hlYWRlcic6ICdHZWVrJyxcbiAgICAgICAgJ2Zvb3Rlcic6ICdHZWVrJyxcbiAgICAgICAgJ25vZGVzJzogW3tcbiAgICAgICAgICAnaWQnOiAzMDAsXG4gICAgICAgICAgJ3RpdGxlJzogJ+eoi+W6j+WRmCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDkwLFxuICAgICAgICAgICd0aXRsZSc6ICdQeXRob24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnaWQnOiAzOSxcbiAgICAgICAgICAndGl0bGUnOiAnQW5kcm9pZCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDEwOCxcbiAgICAgICAgICAndGl0bGUnOiAn5a695bim55eH5YCZ576kJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogMTEsXG4gICAgICAgICAgJ3RpdGxlJzogJ0xpbnV4J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogNjIsXG4gICAgICAgICAgJ3RpdGxlJzogJ1BIUCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDEwNCxcbiAgICAgICAgICAndGl0bGUnOiAn5LqR6K6h566XJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogNTIsXG4gICAgICAgICAgJ3RpdGxlJzogJ+ehrOS7tidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDE5MCxcbiAgICAgICAgICAndGl0bGUnOiAn5aSW5YyFJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogNDM2LFxuICAgICAgICAgICd0aXRsZSc6ICdOb2RlLmpzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogNjMsXG4gICAgICAgICAgJ3RpdGxlJzogJ0phdmEnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnaWQnOiA3OSxcbiAgICAgICAgICAndGl0bGUnOiAn5pyN5Yqh5ZmoJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogNDAzLFxuICAgICAgICAgICd0aXRsZSc6ICdCaXRjb2luJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogNjEsXG4gICAgICAgICAgJ3RpdGxlJzogJ015U1FMJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogNDEzLFxuICAgICAgICAgICd0aXRsZSc6ICfnvJbnqIsnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnaWQnOiAyMDgsXG4gICAgICAgICAgJ3RpdGxlJzogJ0xpbm9kZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDE3NixcbiAgICAgICAgICAndGl0bGUnOiAn5rG96L2mJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogMzAxLFxuICAgICAgICAgICd0aXRsZSc6ICforr7orqHluIgnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnaWQnOiAzNyxcbiAgICAgICAgICAndGl0bGUnOiAnS2luZGxlJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogNTEzLFxuICAgICAgICAgICd0aXRsZSc6ICdNYXJrZG93bidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDMxMSxcbiAgICAgICAgICAndGl0bGUnOiAnTW9uZ29EQidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDM2MSxcbiAgICAgICAgICAndGl0bGUnOiAnVG9ybmFkbydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDgxLFxuICAgICAgICAgICd0aXRsZSc6ICdSdWJ5IG9uIFJhaWxzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogMzQwLFxuICAgICAgICAgICd0aXRsZSc6ICdNaW5lY3JhZnQnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnaWQnOiA3MyxcbiAgICAgICAgICAndGl0bGUnOiAn5a2X5L2T5o6S5Y2wJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogNDcsXG4gICAgICAgICAgJ3RpdGxlJzogJ1JlZGlzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogMzY3LFxuICAgICAgICAgICd0aXRsZSc6ICdSdWJ5J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogMzEwLFxuICAgICAgICAgICd0aXRsZSc6ICfllYbkuJrmqKHlvI8nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnaWQnOiAyNCxcbiAgICAgICAgICAndGl0bGUnOiAn5pWw5a2mJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogNTgsXG4gICAgICAgICAgJ3RpdGxlJzogJ1Bob3Rvc2hvcCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDM3MSxcbiAgICAgICAgICAndGl0bGUnOiAnQW1hem9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogNDg1LFxuICAgICAgICAgICd0aXRsZSc6ICdMRUdPJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogMjk0LFxuICAgICAgICAgICd0aXRsZSc6ICdTT05ZJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogODgzLFxuICAgICAgICAgICd0aXRsZSc6ICfoh6rnhLbor63oqIDlpITnkIYnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnaWQnOiA5ODUsXG4gICAgICAgICAgJ3RpdGxlJzogJ1NlcnZlcmxlc3MnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnaWQnOiAxMDA1LFxuICAgICAgICAgICd0aXRsZSc6ICdDIydcbiAgICAgICAgfV1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICdoZWFkZXInOiAn5ri45oiPJyxcbiAgICAgICAgJ2Zvb3Rlcic6ICfmuLjmiI8nLFxuICAgICAgICAnbm9kZXMnOiBbe1xuICAgICAgICAgICdpZCc6IDU1LFxuICAgICAgICAgICd0aXRsZSc6ICfmuLjmiI8nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnaWQnOiA2NzUsXG4gICAgICAgICAgJ3RpdGxlJzogJ1BsYXlTdGF0aW9uIDQnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnaWQnOiA0NTQsXG4gICAgICAgICAgJ3RpdGxlJzogJ+iLsembhOiBlOebnydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDE3MixcbiAgICAgICAgICAndGl0bGUnOiAnaUdhbWUnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnaWQnOiAzMjQsXG4gICAgICAgICAgJ3RpdGxlJzogJ0JhdHRsZWZpZWxkIDMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnaWQnOiA5OCxcbiAgICAgICAgICAndGl0bGUnOiAnU3RhckNyYWZ0IDInXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnaWQnOiAzMyxcbiAgICAgICAgICAndGl0bGUnOiAnUGxheVN0YXRpb24gMydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDM3OCxcbiAgICAgICAgICAndGl0bGUnOiAnV29ybGQgb2YgV2FyY3JhZnQnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnaWQnOiA1MTEsXG4gICAgICAgICAgJ3RpdGxlJzogJ0VWRSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDM0LFxuICAgICAgICAgICd0aXRsZSc6ICdYYm94IDM2MCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDk1OSxcbiAgICAgICAgICAndGl0bGUnOiAnTmludGVuZG8gU3dpdGNoJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2lkJzogOTgxLFxuICAgICAgICAgICd0aXRsZSc6ICfnjovogIXojaPogIAnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnaWQnOiA2ODYsXG4gICAgICAgICAgJ3RpdGxlJzogJ0JhdHRsZWZpZWxkIDQnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnaWQnOiA1MDgsXG4gICAgICAgICAgJ3RpdGxlJzogJ0dyYW4gVHVyaXNtbydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdpZCc6IDM2LFxuICAgICAgICAgICd0aXRsZSc6ICdXaWknXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnaWQnOiA3NDgsXG4gICAgICAgICAgJ3RpdGxlJzogJ1dpaSBVJ1xuICAgICAgICB9XVxuICAgICAgfV1cbiAgICB9XG4gICAgLy8g5aOw5piO6aG16Z2i5Lit5bCG6KaB5L2/55So5Yiw55qE57uE5Lu2XG4gICAkcmVwZWF0ID0ge1wibm9kZVwiOntcImNvbVwiOlwibm9kZUl0ZW1cIixcInByb3BzXCI6XCJpdGVtXCJ9fTtcclxuJHByb3BzID0ge1wibm9kZUl0ZW1cIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcIm5vZGVcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIn0sXCJ2LWJpbmQ6aXRlbS5vbmNlXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwibm9kZVwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwifSxcInYtYmluZDppbmRleC5vbmNlXCI6e1widmFsdWVcIjpcImluZGV4XCIsXCJ0eXBlXCI6XCJpbmRleFwiLFwiZm9yXCI6XCJub2RlXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBub2RlSXRlbTogTm9kZUl0ZW1cbiAgICB9XG4gICAgLy8g55Sf5ZG95ZGo5pyf5Ye95pWw77yM6aG16Z2i5Yqg6L29XG4gICAgb25Mb2FkICgpIHt9XG4gICAgLy8g55Sf5ZG95ZGo5pyf5Ye95pWw77yM5Yid5qyh5riy5p+T5a6M5oiQXG4gICAgb25SZWFkeSAoKSB7fVxuICB9XG4iXX0=