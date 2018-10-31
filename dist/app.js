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
      pages: ['pages/new', 'pages/hot', 'pages/node', 'pages/user', 'pages/about', 'pages/article', 'pages/nodeAll', 'pages/nodeList'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#ffffff',
        navigationBarTitleText: 'V2EX',
        navigationBarTextStyle: 'black',
        backgroundColor: '#e2e2e2'
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
        }, {
          'selectedIconPath': 'images/ic_my_selected.png',
          'iconPath': 'images/ic_my.png',
          'pagePath': 'pages/about',
          'text': '关于'
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
      // 检测版本更新
      this.updateManager();
    }
    // 版本更新

  }, {
    key: 'updateManager',
    value: function updateManager() {
      if (_wepy2.default.canIUse('getUpdateManager')) {
        var updateManager = _wepy2.default.getUpdateManager();

        updateManager.onCheckForUpdate(function (res) {
          // 请求完新版本信息的回调
          if (res.hasUpdate) {
            updateManager.onUpdateReady(function () {
              _wepy2.default.showModal({
                title: '更新提示',
                content: '新版本已经准备好，是否重启应用？',
                success: function success(res) {
                  if (res.confirm) {
                    // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                    updateManager.applyUpdate();
                  }
                }
              });
            });
          }
        });

        // 新版本下载失败
        updateManager.onUpdateFailed(function () {
          _wepy2.default.showModal({
            title: '重要提示',
            content: '新版本更新失败，请您删除当前小程序，重新搜索打开哟~',
            success: function success(res) {
              console.log('点击了确定');
            }
          });
        });
      } else {
        _wepy2.default.showModal({
          title: '重要提示',
          content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
        });
      }
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlTWFuYWdlciIsImNhbklVc2UiLCJnZXRVcGRhdGVNYW5hZ2VyIiwib25DaGVja0ZvclVwZGF0ZSIsInJlcyIsImhhc1VwZGF0ZSIsIm9uVXBkYXRlUmVhZHkiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzdWNjZXNzIiwiY29uZmlybSIsImFwcGx5VXBkYXRlIiwib25VcGRhdGVGYWlsZWQiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7OztBQTRERTs7QUExREE7QUEyREEsc0JBQWU7QUFBQTs7QUFBQTs7QUFBQSxVQTFEZkEsTUEwRGUsR0ExRE47QUFDUEMsYUFBTyxDQUNMLFdBREssRUFFTCxXQUZLLEVBR0wsWUFISyxFQUlMLFlBSkssRUFLTCxhQUxLLEVBTUwsZUFOSyxFQU9MLGVBUEssRUFRTCxnQkFSSyxDQURBO0FBV1BDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLFNBRnhCO0FBR05DLGdDQUF3QixNQUhsQjtBQUlOQyxnQ0FBd0IsT0FKbEI7QUFLTkMseUJBQWlCO0FBTFgsT0FYRDtBQWtCUCxnQkFBVTtBQUNSLGlCQUFTLFNBREQ7QUFFUix5QkFBaUIsU0FGVDtBQUdSLHVCQUFlLFNBSFA7QUFJUixnQkFBUSxDQUFDO0FBQ1AsOEJBQW9CLDRCQURiO0FBRVAsc0JBQVksbUJBRkw7QUFHUCxzQkFBWSxXQUhMO0FBSVAsa0JBQVE7QUFKRCxTQUFELEVBTVI7QUFDRSw4QkFBb0IsNEJBRHRCO0FBRUUsc0JBQVksbUJBRmQ7QUFHRSxzQkFBWSxXQUhkO0FBSUUsa0JBQVE7QUFKVixTQU5RLEVBWVI7QUFDRSw4QkFBb0IsNkJBRHRCO0FBRUUsc0JBQVksb0JBRmQ7QUFHRSxzQkFBWSxZQUhkO0FBSUUsa0JBQVE7QUFKVixTQVpRLEVBa0JSO0FBQ0UsOEJBQW9CLDJCQUR0QjtBQUVFLHNCQUFZLGtCQUZkO0FBR0Usc0JBQVksYUFIZDtBQUlFLGtCQUFRO0FBSlYsU0FsQlE7QUFKQTtBQThCWjs7Ozs7O0FBaERTLEtBMERNO0FBQUEsVUFKZkMsVUFJZSxHQUpGO0FBQ1hDLGdCQUFVLElBREMsRUFJRTs7QUFFYixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUZhO0FBR2Q7QUFDRDs7Ozs7K0JBQ1c7QUFDVEMsY0FBUUMsR0FBUixDQUFZLE1BQVo7QUFDQTtBQUNBLFdBQUtDLGFBQUw7QUFDRDtBQUNEOzs7O29DQUNpQjtBQUNmLFVBQUksZUFBS0MsT0FBTCxDQUFhLGtCQUFiLENBQUosRUFBc0M7QUFDcEMsWUFBTUQsZ0JBQWdCLGVBQUtFLGdCQUFMLEVBQXRCOztBQUVBRixzQkFBY0csZ0JBQWQsQ0FBK0IsVUFBVUMsR0FBVixFQUFlO0FBQzVDO0FBQ0EsY0FBSUEsSUFBSUMsU0FBUixFQUFtQjtBQUNqQkwsMEJBQWNNLGFBQWQsQ0FBNEIsWUFBWTtBQUN0Qyw2QkFBS0MsU0FBTCxDQUFlO0FBQ2JDLHVCQUFPLE1BRE07QUFFYkMseUJBQVMsa0JBRkk7QUFHYkMseUJBQVMsaUJBQVVOLEdBQVYsRUFBZTtBQUN0QixzQkFBSUEsSUFBSU8sT0FBUixFQUFpQjtBQUNmO0FBQ0FYLGtDQUFjWSxXQUFkO0FBQ0Q7QUFDRjtBQVJZLGVBQWY7QUFVRCxhQVhEO0FBWUQ7QUFDRixTQWhCRDs7QUFrQkE7QUFDQVosc0JBQWNhLGNBQWQsQ0FBNkIsWUFBWTtBQUN2Qyx5QkFBS04sU0FBTCxDQUFlO0FBQ2JDLG1CQUFPLE1BRE07QUFFYkMscUJBQVMsNEJBRkk7QUFHYkMscUJBQVMsaUJBQVVOLEdBQVYsRUFBZTtBQUN0Qk4sc0JBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0Q7QUFMWSxXQUFmO0FBT0QsU0FSRDtBQVNELE9BL0JELE1BK0JPO0FBQ0wsdUJBQUtRLFNBQUwsQ0FBZTtBQUNiQyxpQkFBTyxNQURNO0FBRWJDLG1CQUFTO0FBRkksU0FBZjtBQUlEO0FBQ0Y7Ozs7RUE3RzBCLGVBQUtLLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG4vLyDlnKggUGFnZSDpobXpnaLlrp7kvovkuK3vvIzlj6/ku6XpgJrov4cgdGhpcy4kcGFyZW50IOadpeiuv+mXriBBcHAg5a6e5L6LXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xyXG4gIC8vIGNvbmZpZyDlr7nlupQgYXBwLmpzb24g5paH5Lu2XHJcbiAgY29uZmlnID0ge1xyXG4gICAgcGFnZXM6IFtcclxuICAgICAgJ3BhZ2VzL25ldycsXHJcbiAgICAgICdwYWdlcy9ob3QnLFxyXG4gICAgICAncGFnZXMvbm9kZScsXHJcbiAgICAgICdwYWdlcy91c2VyJyxcclxuICAgICAgJ3BhZ2VzL2Fib3V0JyxcclxuICAgICAgJ3BhZ2VzL2FydGljbGUnLFxyXG4gICAgICAncGFnZXMvbm9kZUFsbCcsXHJcbiAgICAgICdwYWdlcy9ub2RlTGlzdCdcclxuICAgIF0sXHJcbiAgICB3aW5kb3c6IHtcclxuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcclxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnVjJFWCcsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaycsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlMmUyZTInXHJcbiAgICB9LFxyXG4gICAgJ3RhYkJhcic6IHtcclxuICAgICAgJ2NvbG9yJzogJyM3MDcwNzAnLFxyXG4gICAgICAnc2VsZWN0ZWRDb2xvcic6ICcjMkMyQzJDJyxcclxuICAgICAgJ2JvcmRlclN0eWxlJzogJyNmZmZmZmYnLFxyXG4gICAgICAnbGlzdCc6IFt7XHJcbiAgICAgICAgJ3NlbGVjdGVkSWNvblBhdGgnOiAnaW1hZ2VzL2ljX25ld19zZWxlY3RlZC5wbmcnLFxyXG4gICAgICAgICdpY29uUGF0aCc6ICdpbWFnZXMvaWNfbmV3LnBuZycsXHJcbiAgICAgICAgJ3BhZ2VQYXRoJzogJ3BhZ2VzL25ldycsXHJcbiAgICAgICAgJ3RleHQnOiAn5pyA5pawJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3NlbGVjdGVkSWNvblBhdGgnOiAnaW1hZ2VzL2ljX2hvdF9zZWxlY3RlZC5wbmcnLFxyXG4gICAgICAgICdpY29uUGF0aCc6ICdpbWFnZXMvaWNfaG90LnBuZycsXHJcbiAgICAgICAgJ3BhZ2VQYXRoJzogJ3BhZ2VzL2hvdCcsXHJcbiAgICAgICAgJ3RleHQnOiAn54Ot6ZeoJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3NlbGVjdGVkSWNvblBhdGgnOiAnaW1hZ2VzL2ljX25vZGVfc2VsZWN0ZWQucG5nJyxcclxuICAgICAgICAnaWNvblBhdGgnOiAnaW1hZ2VzL2ljX25vZGUucG5nJyxcclxuICAgICAgICAncGFnZVBhdGgnOiAncGFnZXMvbm9kZScsXHJcbiAgICAgICAgJ3RleHQnOiAn6IqC54K5J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3NlbGVjdGVkSWNvblBhdGgnOiAnaW1hZ2VzL2ljX215X3NlbGVjdGVkLnBuZycsXHJcbiAgICAgICAgJ2ljb25QYXRoJzogJ2ltYWdlcy9pY19teS5wbmcnLFxyXG4gICAgICAgICdwYWdlUGF0aCc6ICdwYWdlcy9hYm91dCcsXHJcbiAgICAgICAgJ3RleHQnOiAn5YWz5LqOJ1xyXG4gICAgICB9XVxyXG4gICAgfVxyXG4gIH1cclxuICAvKlxyXG4gICAqIOWmguaenOW9k+WJjee7hOS7tuaYr3BhZ2XvvIzpgqPkuYh0aGlzLiRwYXJlbnTmmK8kYXBwXHJcbiAgICog5aaC5p6c5b2T5YmN57uE5Lu25pivY29tcG9uZW50LCDpgqPkuYh0aGlzLiRwYXJlbnTmmK/niLblsYJjb21wb25lbnTvvIx0aGlzLiRyb2905piv6aG25bGC55qEcGFnZe+8jOaJgOS7peS9oOWPr+S7pei/meS5iOWGmXRoaXMuJHJvb3QuJHBhcmVudFxyXG4gICAqIOWPpuWklui/mOacieS4gOenjeaWueazle+8mndlcHkuJGluc3RhbmNlIOS5n+WPr+S7pVxyXG4gICAqIOWFqOWxgCBEYXRhICh0aGlzLiRyb290LiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VySW5mbyDmiJYgd2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YSlcclxuICAgKi9cclxuICBnbG9iYWxEYXRhID0ge1xyXG4gICAgdXNlckluZm86IG51bGxcclxuICB9XHJcbiAgLy8gQVBJIHByb21pc2Ug5YyWXHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxyXG4gIH1cclxuICAvLyDliJ3lp4vljJblj6rmiafooYzkuIDmrKFcclxuICBvbkxhdW5jaCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdWMkVYJylcclxuICAgIC8vIOajgOa1i+eJiOacrOabtOaWsFxyXG4gICAgdGhpcy51cGRhdGVNYW5hZ2VyKClcclxuICB9XHJcbiAgLy8g54mI5pys5pu05pawXHJcbiAgdXBkYXRlTWFuYWdlciAoKSB7XHJcbiAgICBpZiAod2VweS5jYW5JVXNlKCdnZXRVcGRhdGVNYW5hZ2VyJykpIHtcclxuICAgICAgY29uc3QgdXBkYXRlTWFuYWdlciA9IHdlcHkuZ2V0VXBkYXRlTWFuYWdlcigpXHJcblxyXG4gICAgICB1cGRhdGVNYW5hZ2VyLm9uQ2hlY2tGb3JVcGRhdGUoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgIC8vIOivt+axguWujOaWsOeJiOacrOS/oeaBr+eahOWbnuiwg1xyXG4gICAgICAgIGlmIChyZXMuaGFzVXBkYXRlKSB7XHJcbiAgICAgICAgICB1cGRhdGVNYW5hZ2VyLm9uVXBkYXRlUmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICfmm7TmlrDmj5DnpLonLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICfmlrDniYjmnKzlt7Lnu4/lh4blpIflpb3vvIzmmK/lkKbph43lkK/lupTnlKjvvJ8nLFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAvLyDmlrDnmoTniYjmnKzlt7Lnu4/kuIvovb3lpb3vvIzosIPnlKggYXBwbHlVcGRhdGUg5bqU55So5paw54mI5pys5bm26YeN5ZCvXHJcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZU1hbmFnZXIuYXBwbHlVcGRhdGUoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgLy8g5paw54mI5pys5LiL6L295aSx6LSlXHJcbiAgICAgIHVwZGF0ZU1hbmFnZXIub25VcGRhdGVGYWlsZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgIHRpdGxlOiAn6YeN6KaB5o+Q56S6JyxcclxuICAgICAgICAgIGNvbnRlbnQ6ICfmlrDniYjmnKzmm7TmlrDlpLHotKXvvIzor7fmgqjliKDpmaTlvZPliY3lsI/nqIvluo/vvIzph43mlrDmkJzntKLmiZPlvIDlk59+JyxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+eCueWHu+S6huehruWumicpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICB0aXRsZTogJ+mHjeimgeaPkOekuicsXHJcbiAgICAgICAgY29udGVudDogJ+W9k+WJjeW+ruS/oeeJiOacrOi/h+S9ju+8jOaXoOazleS9v+eUqOivpeWKn+iDve+8jOivt+WNh+e6p+WIsOacgOaWsOW+ruS/oeeJiOacrOWQjumHjeivleOAgidcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19