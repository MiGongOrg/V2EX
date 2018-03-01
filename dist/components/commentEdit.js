'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

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
      comment: {
        value: ''
      }
    }, _this.methods = {
      goTop: function goTop() {
        // 返回顶部
        _wepy2.default.pageScrollTo({
          scrollTop: 0,
          duration: 500
        });
      },
      send: function send(event) {
        var title = '友情提示';
        var content = event.detail.value.comment;

        if (!content) {
          content = '假装可以回复，你懂的。';
        } else {
          title = '假装可以回复';
        }
        // showModal
        _wepy2.default.showModal({
          title: title,
          content: content,
          cancelColor: '#cccccc',
          cancelText: '任性',
          confirmColor: '#2c2c2c',
          confirmText: '知道了',
          success: function success(res) {
            if (res.confirm) {
              console.log('用户点击确定');
            } else if (res.cancel) {
              console.log('用户点击取消');
            }
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // 模板初始绑定数据


  _createClass(Comment, [{
    key: 'onLoad',

    // 页面的生命周期函数
    value: function onLoad() {}
  }]);

  return Comment;
}(_wepy2.default.component);

exports.default = Comment;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRFZGl0LmpzIl0sIm5hbWVzIjpbIkNvbW1lbnQiLCJkYXRhIiwiY29tbWVudCIsInZhbHVlIiwibWV0aG9kcyIsImdvVG9wIiwicGFnZVNjcm9sbFRvIiwic2Nyb2xsVG9wIiwiZHVyYXRpb24iLCJzZW5kIiwiZXZlbnQiLCJ0aXRsZSIsImNvbnRlbnQiLCJkZXRhaWwiLCJzaG93TW9kYWwiLCJjYW5jZWxDb2xvciIsImNhbmNlbFRleHQiLCJjb25maXJtQ29sb3IiLCJjb25maXJtVGV4dCIsInN1Y2Nlc3MiLCJyZXMiLCJjb25maXJtIiwiY29uc29sZSIsImxvZyIsImNhbmNlbCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBRW5CQyxJLEdBQU87QUFDTEMsZUFBUztBQUNQQyxlQUFPO0FBREE7QUFESixLLFFBS1BDLE8sR0FBVTtBQUNSQyxXQURRLG1CQUNDO0FBQ1A7QUFDQSx1QkFBS0MsWUFBTCxDQUFrQjtBQUNoQkMscUJBQVcsQ0FESztBQUVoQkMsb0JBQVU7QUFGTSxTQUFsQjtBQUlELE9BUE87QUFRUkMsVUFSUSxnQkFRRkMsS0FSRSxFQVFLO0FBQ1gsWUFBSUMsUUFBUSxNQUFaO0FBQ0EsWUFBSUMsVUFBVUYsTUFBTUcsTUFBTixDQUFhVixLQUFiLENBQW1CRCxPQUFqQzs7QUFFQSxZQUFJLENBQUNVLE9BQUwsRUFBYztBQUNaQSxvQkFBVSxhQUFWO0FBQ0QsU0FGRCxNQUVPO0FBQ0xELGtCQUFRLFFBQVI7QUFDRDtBQUNEO0FBQ0EsdUJBQUtHLFNBQUwsQ0FBZTtBQUNiSCxpQkFBT0EsS0FETTtBQUViQyxtQkFBU0EsT0FGSTtBQUdiRyx1QkFBYSxTQUhBO0FBSWJDLHNCQUFZLElBSkM7QUFLYkMsd0JBQWMsU0FMRDtBQU1iQyx1QkFBYSxLQU5BO0FBT2JDLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsZ0JBQUlBLElBQUlDLE9BQVIsRUFBaUI7QUFDZkMsc0JBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0QsYUFGRCxNQUVPLElBQUlILElBQUlJLE1BQVIsRUFBZ0I7QUFDckJGLHNCQUFRQyxHQUFSLENBQVksUUFBWjtBQUNEO0FBQ0Y7QUFiWSxTQUFmO0FBZUQ7QUFqQ08sSzs7QUFOVjs7Ozs7O0FBeUNBOzZCQUNVLENBQUU7Ozs7RUEzQ3VCLGVBQUtFLFM7O2tCQUFyQnpCLE8iLCJmaWxlIjoiY29tbWVudEVkaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tZW50IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIC8vIOaooeadv+WIneWni+e7keWumuaVsOaNrlxuICAgIGRhdGEgPSB7XG4gICAgICBjb21tZW50OiB7XG4gICAgICAgIHZhbHVlOiAnJ1xuICAgICAgfVxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgZ29Ub3AgKCkge1xuICAgICAgICAvLyDov5Tlm57pobbpg6hcbiAgICAgICAgd2VweS5wYWdlU2Nyb2xsVG8oe1xuICAgICAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgICAgICBkdXJhdGlvbjogNTAwXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgc2VuZCAoZXZlbnQpIHtcbiAgICAgICAgbGV0IHRpdGxlID0gJ+WPi+aDheaPkOekuidcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBldmVudC5kZXRhaWwudmFsdWUuY29tbWVudFxuXG4gICAgICAgIGlmICghY29udGVudCkge1xuICAgICAgICAgIGNvbnRlbnQgPSAn5YGH6KOF5Y+v5Lul5Zue5aSN77yM5L2g5oeC55qE44CCJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRpdGxlID0gJ+WBh+ijheWPr+S7peWbnuWkjSdcbiAgICAgICAgfVxuICAgICAgICAvLyBzaG93TW9kYWxcbiAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICAgIGNhbmNlbENvbG9yOiAnI2NjY2NjYycsXG4gICAgICAgICAgY2FuY2VsVGV4dDogJ+S7u+aApycsXG4gICAgICAgICAgY29uZmlybUNvbG9yOiAnIzJjMmMyYycsXG4gICAgICAgICAgY29uZmlybVRleHQ6ICfnn6XpgZPkuoYnLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vnoa7lrponKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vlj5bmtognKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgLy8g6aG16Z2i55qE55Sf5ZG95ZGo5pyf5Ye95pWwXG4gICAgb25Mb2FkICgpIHt9XG4gIH1cbiJdfQ==