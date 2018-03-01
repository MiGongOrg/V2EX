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

var PostItem = function (_wepy$component) {
  _inherits(PostItem, _wepy$component);

  function PostItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PostItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PostItem.__proto__ || Object.getPrototypeOf(PostItem)).call.apply(_ref, [this].concat(args))), _this), _this.methods = {
      click: function click(id) {
        // 跳转页面
        _wepy2.default.navigateTo({
          url: '/pages/article?id=' + id
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PostItem, [{
    key: 'onLoad',

    // 页面的生命周期函数
    value: function onLoad() {}
  }]);

  return PostItem;
}(_wepy2.default.component);

exports.default = PostItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RJdGVtLmpzIl0sIm5hbWVzIjpbIlBvc3RJdGVtIiwibWV0aG9kcyIsImNsaWNrIiwiaWQiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLE8sR0FBVTtBQUNSQyxXQURRLGlCQUNEQyxFQURDLEVBQ0c7QUFDVDtBQUNBLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUssdUJBQXVCRjtBQURkLFNBQWhCO0FBR0Q7QUFOTyxLOzs7Ozs7QUFRVjs2QkFDVSxDQUFFOzs7O0VBVndCLGVBQUtHLFM7O2tCQUF0Qk4sUSIsImZpbGUiOiJwb3N0SXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc3RJdGVtIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICBjbGljayAoaWQpIHtcbiAgICAgICAgLy8g6Lez6L2s6aG16Z2iXG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnL3BhZ2VzL2FydGljbGU/aWQ9JyArIGlkXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIC8vIOmhtemdoueahOeUn+WRveWRqOacn+WHveaVsFxuICAgIG9uTG9hZCAoKSB7fVxuICB9XG4iXX0=