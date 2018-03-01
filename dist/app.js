'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// async/await


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
      this.testAsync();
    }
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.sleep(3);

              case 2:
                data = _context.sent;

                console.log(data);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function testAsync() {
        return _ref.apply(this, arguments);
      }

      return testAsync;
    }()
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJ0ZXN0QXN5bmMiLCJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0Iiwic2xlZXAiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNiIiwidGhhdCIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7Ozs7QUFEQTs7O0FBR0E7Ozs7QUFpREU7O0FBL0NBO0FBZ0RBLHNCQUFlO0FBQUE7O0FBQUE7O0FBQUEsVUEvQ2ZBLE1BK0NlLEdBL0NOO0FBQ1BDLGFBQU8sQ0FDTCxXQURLLEVBRUwsV0FGSyxFQUdMLFlBSEssRUFJTCxZQUpLLEVBS0wsZUFMSyxFQU1MLGVBTkssRUFPTCxnQkFQSyxDQURBO0FBVVBDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLFNBRnhCO0FBR05DLGdDQUF3QixNQUhsQjtBQUlOQyxnQ0FBd0IsT0FKbEI7QUFLTkMseUJBQWlCLFNBTFg7QUFNTkMsK0JBQXVCO0FBTmpCLE9BVkQ7QUFrQlAsZ0JBQVU7QUFDUixpQkFBUyxTQUREO0FBRVIseUJBQWlCLFNBRlQ7QUFHUix1QkFBZSxTQUhQO0FBSVIsZ0JBQVEsQ0FBQztBQUNQLDhCQUFvQiw0QkFEYjtBQUVQLHNCQUFZLG1CQUZMO0FBR1Asc0JBQVksV0FITDtBQUlQLGtCQUFRO0FBSkQsU0FBRCxFQU1SO0FBQ0UsOEJBQW9CLDRCQUR0QjtBQUVFLHNCQUFZLG1CQUZkO0FBR0Usc0JBQVksV0FIZDtBQUlFLGtCQUFRO0FBSlYsU0FOUSxFQVlSO0FBQ0UsOEJBQW9CLDZCQUR0QjtBQUVFLHNCQUFZLG9CQUZkO0FBR0Usc0JBQVksWUFIZDtBQUlFLGtCQUFRO0FBSlYsU0FaUTtBQUpBO0FBbEJILEtBK0NNO0FBQUEsVUFKZkMsVUFJZSxHQUpGO0FBQ1hDLGdCQUFVLElBREMsRUFJRTs7QUFFYixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUZhO0FBR2Q7QUFDRDs7Ozs7K0JBQ1c7QUFDVCxXQUFLQyxTQUFMO0FBQ0Q7OzswQkFFTUMsQyxFQUFHO0FBQ1IsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDQyxtQkFBVyxZQUFNO0FBQ2ZGLGtCQUFRLGtCQUFSO0FBQ0QsU0FGRCxFQUVHRixJQUFJLElBRlA7QUFHRCxPQUpNLENBQVA7QUFLRDs7Ozs7Ozs7Ozs7dUJBR29CLEtBQUtLLEtBQUwsQ0FBVyxDQUFYLEM7OztBQUFiQyxvQjs7QUFDTkMsd0JBQVFDLEdBQVIsQ0FBWUYsSUFBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQUdVRyxFLEVBQUk7QUFDZCxVQUFNQyxPQUFPLElBQWI7QUFDQSxVQUFJLEtBQUtkLFVBQUwsQ0FBZ0JDLFFBQXBCLEVBQThCO0FBQzVCLGVBQU8sS0FBS0QsVUFBTCxDQUFnQkMsUUFBdkI7QUFDRDtBQUNELHFCQUFLYyxXQUFMLENBQWlCO0FBQ2ZDLGVBRGUsbUJBQ05DLEdBRE0sRUFDRDtBQUNaSCxlQUFLZCxVQUFMLENBQWdCQyxRQUFoQixHQUEyQmdCLElBQUloQixRQUEvQjtBQUNBWSxnQkFBTUEsR0FBR0ksSUFBSWhCLFFBQVAsQ0FBTjtBQUNEO0FBSmMsT0FBakI7QUFNRDs7OztFQWxGMEIsZUFBS2lCLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbi8vIGFzeW5jL2F3YWl0XHJcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcclxuXHJcbi8vIOWcqCBQYWdlIOmhtemdouWunuS+i+S4re+8jOWPr+S7pemAmui/hyB0aGlzLiRwYXJlbnQg5p2l6K6/6ZeuIEFwcCDlrp7kvotcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgLy8gY29uZmlnIOWvueW6lCBhcHAuanNvbiDmlofku7ZcclxuICBjb25maWcgPSB7XHJcbiAgICBwYWdlczogW1xyXG4gICAgICAncGFnZXMvbmV3JyxcclxuICAgICAgJ3BhZ2VzL2hvdCcsXHJcbiAgICAgICdwYWdlcy9ub2RlJyxcclxuICAgICAgJ3BhZ2VzL3VzZXInLFxyXG4gICAgICAncGFnZXMvYXJ0aWNsZScsXHJcbiAgICAgICdwYWdlcy9ub2RlQWxsJyxcclxuICAgICAgJ3BhZ2VzL25vZGVMaXN0J1xyXG4gICAgXSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdWMkVYJyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2UyZTJlMicsXHJcbiAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZVxyXG4gICAgfSxcclxuICAgICd0YWJCYXInOiB7XHJcbiAgICAgICdjb2xvcic6ICcjNzA3MDcwJyxcclxuICAgICAgJ3NlbGVjdGVkQ29sb3InOiAnIzJDMkMyQycsXHJcbiAgICAgICdib3JkZXJTdHlsZSc6ICcjZmZmZmZmJyxcclxuICAgICAgJ2xpc3QnOiBbe1xyXG4gICAgICAgICdzZWxlY3RlZEljb25QYXRoJzogJ2ltYWdlcy9pY19uZXdfc2VsZWN0ZWQucG5nJyxcclxuICAgICAgICAnaWNvblBhdGgnOiAnaW1hZ2VzL2ljX25ldy5wbmcnLFxyXG4gICAgICAgICdwYWdlUGF0aCc6ICdwYWdlcy9uZXcnLFxyXG4gICAgICAgICd0ZXh0JzogJ+acgOaWsCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICdzZWxlY3RlZEljb25QYXRoJzogJ2ltYWdlcy9pY19ob3Rfc2VsZWN0ZWQucG5nJyxcclxuICAgICAgICAnaWNvblBhdGgnOiAnaW1hZ2VzL2ljX2hvdC5wbmcnLFxyXG4gICAgICAgICdwYWdlUGF0aCc6ICdwYWdlcy9ob3QnLFxyXG4gICAgICAgICd0ZXh0JzogJ+eDremXqCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICdzZWxlY3RlZEljb25QYXRoJzogJ2ltYWdlcy9pY19ub2RlX3NlbGVjdGVkLnBuZycsXHJcbiAgICAgICAgJ2ljb25QYXRoJzogJ2ltYWdlcy9pY19ub2RlLnBuZycsXHJcbiAgICAgICAgJ3BhZ2VQYXRoJzogJ3BhZ2VzL25vZGUnLFxyXG4gICAgICAgICd0ZXh0JzogJ+iKgueCuSdcclxuICAgICAgfV1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdsb2JhbERhdGEgPSB7XHJcbiAgICB1c2VySW5mbzogbnVsbFxyXG4gIH1cclxuICAvLyBBUEkgcHJvbWlzZSDljJZcclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXHJcbiAgfVxyXG4gIC8vIOWIneWni+WMluWPquaJp+ihjOS4gOasoVxyXG4gIG9uTGF1bmNoKCkge1xyXG4gICAgdGhpcy50ZXN0QXN5bmMoKVxyXG4gIH1cclxuXHJcbiAgc2xlZXAgKHMpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoJ3Byb21pc2UgcmVzb2x2ZWQnKVxyXG4gICAgICB9LCBzICogMTAwMClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBhc3luYyB0ZXN0QXN5bmMgKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuc2xlZXAoMylcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgfVxyXG5cclxuICBnZXRVc2VySW5mbyhjYikge1xyXG4gICAgY29uc3QgdGhhdCA9IHRoaXNcclxuICAgIGlmICh0aGlzLmdsb2JhbERhdGEudXNlckluZm8pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mb1xyXG4gICAgfVxyXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XHJcbiAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG4gICAgICAgIGNiICYmIGNiKHJlcy51c2VySW5mbylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl19