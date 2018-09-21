'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 在 Page 页面实例中，可以通过 this.$parent 来访问 App 实例
var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  // API promise 化

  // config 对应 app.json 文件
  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/new', 'pages/hot', 'pages/node', 'pages/user', 'pages/article', 'pages/nodeAll', 'pages/nodeList'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#ffffff',
        navigationBarTitleText: 'V2EX',
        navigationBarTextStyle: 'black',
        backgroundColor: '#e2e2e2',
        enablePullDownRefresh: true
      },
      'tabBar': {
        'color': '#707070',
        'selectedColor': '#2C2C2C',
        'borderStyle': '#ffffff',
        'list': [{
          'selectedIconPath': 'images/ic_new_selected.png',
          'iconPath': 'images/ic_new.png',
          'pagePath': 'pages/new',
          'text': '最新'
        }, {
          'selectedIconPath': 'images/ic_hot_selected.png',
          'iconPath': 'images/ic_hot.png',
          'pagePath': 'pages/hot',
          'text': '热门'
        }, {
          'selectedIconPath': 'images/ic_node_selected.png',
          'iconPath': 'images/ic_node.png',
          'pagePath': 'pages/node',
          'text': '节点'
        }]
      }
      /*
       * 如果当前组件是page，那么this.$parent是$app
       * 如果当前组件是component, 那么this.$parent是父层component，this.$root是顶层的page，所以你可以这么写this.$root.$parent
       * 另外还有一种方法：wepy.$instance 也可以
       * 全局 Data (this.$root.$parent.globalData.userInfo 或 wepy.$instance.globalData)
       */
    };
    _this.globalData = {
      userInfo: null };

    _this.use('requestfix');
    return _this;
  }
  // 初始化只执行一次


  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      console.log('V2EX');
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJjb25zb2xlIiwibG9nIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7QUFzREU7O0FBcERBO0FBcURBLHNCQUFlO0FBQUE7O0FBQUE7O0FBQUEsVUFwRGZBLE1Bb0RlLEdBcEROO0FBQ1BDLGFBQU8sQ0FDTCxXQURLLEVBRUwsV0FGSyxFQUdMLFlBSEssRUFJTCxZQUpLLEVBS0wsZUFMSyxFQU1MLGVBTkssRUFPTCxnQkFQSyxDQURBO0FBVVBDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLFNBRnhCO0FBR05DLGdDQUF3QixNQUhsQjtBQUlOQyxnQ0FBd0IsT0FKbEI7QUFLTkMseUJBQWlCLFNBTFg7QUFNTkMsK0JBQXVCO0FBTmpCLE9BVkQ7QUFrQlAsZ0JBQVU7QUFDUixpQkFBUyxTQUREO0FBRVIseUJBQWlCLFNBRlQ7QUFHUix1QkFBZSxTQUhQO0FBSVIsZ0JBQVEsQ0FBQztBQUNQLDhCQUFvQiw0QkFEYjtBQUVQLHNCQUFZLG1CQUZMO0FBR1Asc0JBQVksV0FITDtBQUlQLGtCQUFRO0FBSkQsU0FBRCxFQU1SO0FBQ0UsOEJBQW9CLDRCQUR0QjtBQUVFLHNCQUFZLG1CQUZkO0FBR0Usc0JBQVksV0FIZDtBQUlFLGtCQUFRO0FBSlYsU0FOUSxFQVlSO0FBQ0UsOEJBQW9CLDZCQUR0QjtBQUVFLHNCQUFZLG9CQUZkO0FBR0Usc0JBQVksWUFIZDtBQUlFLGtCQUFRO0FBSlYsU0FaUTtBQUpBO0FBd0JaOzs7Ozs7QUExQ1MsS0FvRE07QUFBQSxVQUpmQyxVQUllLEdBSkY7QUFDWEMsZ0JBQVUsSUFEQyxFQUlFOztBQUViLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBRmE7QUFHZDtBQUNEOzs7OzsrQkFDVztBQUNUQyxjQUFRQyxHQUFSLENBQVksTUFBWjtBQUNEOzs7O0VBN0QwQixlQUFLQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuLy8g5ZyoIFBhZ2Ug6aG16Z2i5a6e5L6L5Lit77yM5Y+v5Lul6YCa6L+HIHRoaXMuJHBhcmVudCDmnaXorr/pl64gQXBwIOWunuS+i1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcclxuICAvLyBjb25maWcg5a+55bqUIGFwcC5qc29uIOaWh+S7tlxyXG4gIGNvbmZpZyA9IHtcclxuICAgIHBhZ2VzOiBbXHJcbiAgICAgICdwYWdlcy9uZXcnLFxyXG4gICAgICAncGFnZXMvaG90JyxcclxuICAgICAgJ3BhZ2VzL25vZGUnLFxyXG4gICAgICAncGFnZXMvdXNlcicsXHJcbiAgICAgICdwYWdlcy9hcnRpY2xlJyxcclxuICAgICAgJ3BhZ2VzL25vZGVBbGwnLFxyXG4gICAgICAncGFnZXMvbm9kZUxpc3QnXHJcbiAgICBdLFxyXG4gICAgd2luZG93OiB7XHJcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1YyRVgnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZTJlMmUyJyxcclxuICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgJ3RhYkJhcic6IHtcclxuICAgICAgJ2NvbG9yJzogJyM3MDcwNzAnLFxyXG4gICAgICAnc2VsZWN0ZWRDb2xvcic6ICcjMkMyQzJDJyxcclxuICAgICAgJ2JvcmRlclN0eWxlJzogJyNmZmZmZmYnLFxyXG4gICAgICAnbGlzdCc6IFt7XHJcbiAgICAgICAgJ3NlbGVjdGVkSWNvblBhdGgnOiAnaW1hZ2VzL2ljX25ld19zZWxlY3RlZC5wbmcnLFxyXG4gICAgICAgICdpY29uUGF0aCc6ICdpbWFnZXMvaWNfbmV3LnBuZycsXHJcbiAgICAgICAgJ3BhZ2VQYXRoJzogJ3BhZ2VzL25ldycsXHJcbiAgICAgICAgJ3RleHQnOiAn5pyA5pawJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3NlbGVjdGVkSWNvblBhdGgnOiAnaW1hZ2VzL2ljX2hvdF9zZWxlY3RlZC5wbmcnLFxyXG4gICAgICAgICdpY29uUGF0aCc6ICdpbWFnZXMvaWNfaG90LnBuZycsXHJcbiAgICAgICAgJ3BhZ2VQYXRoJzogJ3BhZ2VzL2hvdCcsXHJcbiAgICAgICAgJ3RleHQnOiAn54Ot6ZeoJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3NlbGVjdGVkSWNvblBhdGgnOiAnaW1hZ2VzL2ljX25vZGVfc2VsZWN0ZWQucG5nJyxcclxuICAgICAgICAnaWNvblBhdGgnOiAnaW1hZ2VzL2ljX25vZGUucG5nJyxcclxuICAgICAgICAncGFnZVBhdGgnOiAncGFnZXMvbm9kZScsXHJcbiAgICAgICAgJ3RleHQnOiAn6IqC54K5J1xyXG4gICAgICB9XVxyXG4gICAgfVxyXG4gIH1cclxuICAvKlxyXG4gICAqIOWmguaenOW9k+WJjee7hOS7tuaYr3BhZ2XvvIzpgqPkuYh0aGlzLiRwYXJlbnTmmK8kYXBwXHJcbiAgICog5aaC5p6c5b2T5YmN57uE5Lu25pivY29tcG9uZW50LCDpgqPkuYh0aGlzLiRwYXJlbnTmmK/niLblsYJjb21wb25lbnTvvIx0aGlzLiRyb2905piv6aG25bGC55qEcGFnZe+8jOaJgOS7peS9oOWPr+S7pei/meS5iOWGmXRoaXMuJHJvb3QuJHBhcmVudFxyXG4gICAqIOWPpuWklui/mOacieS4gOenjeaWueazle+8mndlcHkuJGluc3RhbmNlIOS5n+WPr+S7pVxyXG4gICAqIOWFqOWxgCBEYXRhICh0aGlzLiRyb290LiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VySW5mbyDmiJYgd2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YSlcclxuICAgKi9cclxuICBnbG9iYWxEYXRhID0ge1xyXG4gICAgdXNlckluZm86IG51bGxcclxuICB9XHJcbiAgLy8gQVBJIHByb21pc2Ug5YyWXHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxyXG4gIH1cclxuICAvLyDliJ3lp4vljJblj6rmiafooYzkuIDmrKFcclxuICBvbkxhdW5jaCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdWMkVYJylcclxuICB9XHJcbn1cclxuIl19