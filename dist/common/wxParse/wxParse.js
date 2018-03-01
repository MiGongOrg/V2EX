'use strict';

var _showdown = require('./showdown.js');

var _showdown2 = _interopRequireDefault(_showdown);

var _html2json = require('./html2json.js');

var _html2json2 = _interopRequireDefault(_html2json);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * author: Di (微信小程序开发工程师)
                                                                                                                                                                                                                   * organization: WeAppDev(微信小程序开发论坛)(http://weappdev.com)
                                                                                                                                                                                                                   *               垂直微信小程序开发交流社区
                                                                                                                                                                                                                   * 
                                                                                                                                                                                                                   * github地址: https://github.com/icindy/wxParse
                                                                                                                                                                                                                   * 
                                                                                                                                                                                                                   * for: 微信小程序富文本解析
                                                                                                                                                                                                                   * detail : http://weappdev.com/t/wxparse-alpha0-1-html-markdown/184
                                                                                                                                                                                                                   */

/**
 * utils函数引入
 **/


/**
 * 配置及公有属性
 **/
var realWindowWidth = 0;
var realWindowHeight = 0;
wx.getSystemInfo({
  success: function success(res) {
    realWindowWidth = res.windowWidth;
    realWindowHeight = res.windowHeight;
  }
});
/**
 * 主函数入口区
 **/
function wxParse() {
  var bindName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'wxParseData';
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'html';
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '<div class="color:red;">数据不能为空</div>';
  var target = arguments[3];
  var imagePadding = arguments[4];

  var that = target;
  var transData = {}; //存放转化后的数据
  if (type == 'html') {
    transData = _html2json2.default.html2json(data, bindName);
    console.log(JSON.stringify(transData, ' ', ' '));
  } else if (type == 'md' || type == 'markdown') {
    var converter = new _showdown2.default.Converter();
    var html = converter.makeHtml(data);
    transData = _html2json2.default.html2json(html, bindName);
    console.log(JSON.stringify(transData, ' ', ' '));
  }
  transData.view = {};
  transData.view.imagePadding = 0;
  if (typeof imagePadding != 'undefined') {
    transData.view.imagePadding = imagePadding;
  }
  var bindData = {};
  bindData[bindName] = transData;
  that.setData(bindData); // 这一行没用
  // 二次修改
  that.bindData = bindData; // 这一行新增
  that.wxParseImgLoad = wxParseImgLoad;
  that.wxParseImgTap = wxParseImgTap;
}
// 图片点击事件
function wxParseImgTap(e) {
  var that = this;
  var nowImgUrl = e.target.dataset.src;
  var tagFrom = e.target.dataset.from;
  if (typeof tagFrom != 'undefined' && tagFrom.length > 0) {
    wx.previewImage({
      current: nowImgUrl, // 当前显示图片的http链接
      // urls: that.data[tagFrom].imageUrls // 需要预览的图片http链接列表
      // 二次修改
      urls: that.bindData[tagFrom].imageUrls // 需要预览的图片http链接列表
    });
  }
}

/**
 * 图片视觉宽高计算函数区 
 **/
function wxParseImgLoad(e) {
  var that = this;
  var tagFrom = e.target.dataset.from;
  var idx = e.target.dataset.idx;
  if (typeof tagFrom != 'undefined' && tagFrom.length > 0) {
    calMoreImageInfo(e, idx, that, tagFrom);
  }
}
// 假循环获取计算图片视觉最佳宽高
function calMoreImageInfo(e, idx, that, bindName) {
  var _that$setData;

  var temData = that.data[bindName];
  if (!temData || temData.images.length == 0) {
    return;
  }
  var temImages = temData.images;
  //因为无法获取view宽度 需要自定义padding进行计算，稍后处理
  var recal = wxAutoImageCal(e.detail.width, e.detail.height, that, bindName);
  // temImages[idx].width = recal.imageWidth;
  // temImages[idx].height = recal.imageheight; 
  // temData.images = temImages;
  // var bindData = {};
  // bindData[bindName] = temData;
  // that.setData(bindData);
  var index = temImages[idx].index;
  var key = '' + bindName;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = index.split('.')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var i = _step.value;
      key += '.nodes[' + i + ']';
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var keyW = key + '.width';
  var keyH = key + '.height';
  that.setData((_that$setData = {}, _defineProperty(_that$setData, keyW, recal.imageWidth), _defineProperty(_that$setData, keyH, recal.imageheight), _that$setData));
}

// 计算视觉优先的图片宽高
function wxAutoImageCal(originalWidth, originalHeight, that, bindName) {
  //获取图片的原始长宽
  var windowWidth = 0,
      windowHeight = 0;
  var autoWidth = 0,
      autoHeight = 0;
  var results = {};
  var padding = that.data[bindName].view.imagePadding;
  windowWidth = realWindowWidth - 2 * padding;
  windowHeight = realWindowHeight;
  //判断按照那种方式进行缩放
  // console.log("windowWidth" + windowWidth);
  if (originalWidth > windowWidth) {
    //在图片width大于手机屏幕width时候
    autoWidth = windowWidth;
    // console.log("autoWidth" + autoWidth);
    autoHeight = autoWidth * originalHeight / originalWidth;
    // console.log("autoHeight" + autoHeight);
    results.imageWidth = autoWidth;
    results.imageheight = autoHeight;
  } else {
    //否则展示原来的数据
    results.imageWidth = originalWidth;
    results.imageheight = originalHeight;
  }
  return results;
}

function wxParseTemArray(temArrayName, bindNameReg, total, that) {
  var array = [];
  var temData = that.data;
  var obj = null;
  for (var i = 0; i < total; i++) {
    var simArr = temData[bindNameReg + i].nodes;
    array.push(simArr);
  }

  temArrayName = temArrayName || 'wxParseTemArray';
  obj = JSON.parse('{"' + temArrayName + '":""}');
  obj[temArrayName] = array;
  that.setData(obj);
}

/**
 * 配置emojis
 * 
 */

function emojisInit() {
  var reg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var baseSrc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/wxParse/emojis/";
  var emojis = arguments[2];

  _html2json2.default.emojisInit(reg, baseSrc, emojis);
}

module.exports = {
  wxParse: wxParse,
  wxParseTemArray: wxParseTemArray,
  emojisInit: emojisInit
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd4UGFyc2UuanMiXSwibmFtZXMiOlsicmVhbFdpbmRvd1dpZHRoIiwicmVhbFdpbmRvd0hlaWdodCIsInd4IiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ3aW5kb3dXaWR0aCIsIndpbmRvd0hlaWdodCIsInd4UGFyc2UiLCJiaW5kTmFtZSIsInR5cGUiLCJkYXRhIiwidGFyZ2V0IiwiaW1hZ2VQYWRkaW5nIiwidGhhdCIsInRyYW5zRGF0YSIsImh0bWwyanNvbiIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiY29udmVydGVyIiwiQ29udmVydGVyIiwiaHRtbCIsIm1ha2VIdG1sIiwidmlldyIsImJpbmREYXRhIiwic2V0RGF0YSIsInd4UGFyc2VJbWdMb2FkIiwid3hQYXJzZUltZ1RhcCIsImUiLCJub3dJbWdVcmwiLCJkYXRhc2V0Iiwic3JjIiwidGFnRnJvbSIsImZyb20iLCJsZW5ndGgiLCJwcmV2aWV3SW1hZ2UiLCJjdXJyZW50IiwidXJscyIsImltYWdlVXJscyIsImlkeCIsImNhbE1vcmVJbWFnZUluZm8iLCJ0ZW1EYXRhIiwiaW1hZ2VzIiwidGVtSW1hZ2VzIiwicmVjYWwiLCJ3eEF1dG9JbWFnZUNhbCIsImRldGFpbCIsIndpZHRoIiwiaGVpZ2h0IiwiaW5kZXgiLCJrZXkiLCJzcGxpdCIsImkiLCJrZXlXIiwia2V5SCIsImltYWdlV2lkdGgiLCJpbWFnZWhlaWdodCIsIm9yaWdpbmFsV2lkdGgiLCJvcmlnaW5hbEhlaWdodCIsImF1dG9XaWR0aCIsImF1dG9IZWlnaHQiLCJyZXN1bHRzIiwicGFkZGluZyIsInd4UGFyc2VUZW1BcnJheSIsInRlbUFycmF5TmFtZSIsImJpbmROYW1lUmVnIiwidG90YWwiLCJhcnJheSIsIm9iaiIsInNpbUFyciIsIm5vZGVzIiwicHVzaCIsInBhcnNlIiwiZW1vamlzSW5pdCIsInJlZyIsImJhc2VTcmMiLCJlbW9qaXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdz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Q0Q7O0FBRURMLGlCQUFlQSxnQkFBZ0IsaUJBQS9CO0FBQ0FJLFFBQU1uRCxLQUFLdUQsS0FBTCxDQUFXLE9BQU1SLFlBQU4sR0FBb0IsT0FBL0IsQ0FBTjtBQUNBSSxNQUFJSixZQUFKLElBQW9CRyxLQUFwQjtBQUNBdkQsT0FBS2EsT0FBTCxDQUFhMkMsR0FBYjtBQUNEOztBQUVEOzs7OztBQUtBLFNBQVNLLFVBQVQsR0FBNkQ7QUFBQSxNQUF6Q0MsR0FBeUMsdUVBQXJDLEVBQXFDO0FBQUEsTUFBbENDLE9BQWtDLHVFQUExQixrQkFBMEI7QUFBQSxNQUFQQyxNQUFPOztBQUMxRCxzQkFBV0gsVUFBWCxDQUFzQkMsR0FBdEIsRUFBMEJDLE9BQTFCLEVBQWtDQyxNQUFsQztBQUNGOztBQUVEQyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2Z4RSxXQUFTQSxPQURNO0FBRWZ5RCxtQkFBZ0JBLGVBRkQ7QUFHZlUsY0FBV0E7QUFISSxDQUFqQiIsImZpbGUiOiJ3eFBhcnNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBhdXRob3I6IERpICjlvq7kv6HlsI/nqIvluo/lvIDlj5Hlt6XnqIvluIgpXG4gKiBvcmdhbml6YXRpb246IFdlQXBwRGV2KOW+ruS/oeWwj+eoi+W6j+W8gOWPkeiuuuWdmykoaHR0cDovL3dlYXBwZGV2LmNvbSlcbiAqICAgICAgICAgICAgICAg5Z6C55u05b6u5L+h5bCP56iL5bqP5byA5Y+R5Lqk5rWB56S+5Yy6XG4gKiBcbiAqIGdpdGh1YuWcsOWdgDogaHR0cHM6Ly9naXRodWIuY29tL2ljaW5keS93eFBhcnNlXG4gKiBcbiAqIGZvcjog5b6u5L+h5bCP56iL5bqP5a+M5paH5pys6Kej5p6QXG4gKiBkZXRhaWwgOiBodHRwOi8vd2VhcHBkZXYuY29tL3Qvd3hwYXJzZS1hbHBoYTAtMS1odG1sLW1hcmtkb3duLzE4NFxuICovXG5cbi8qKlxuICogdXRpbHPlh73mlbDlvJXlhaVcbiAqKi9cbmltcG9ydCBzaG93ZG93biBmcm9tICcuL3Nob3dkb3duLmpzJztcbmltcG9ydCBIdG1sVG9Kc29uIGZyb20gJy4vaHRtbDJqc29uLmpzJztcbi8qKlxuICog6YWN572u5Y+K5YWs5pyJ5bGe5oCnXG4gKiovXG52YXIgcmVhbFdpbmRvd1dpZHRoID0gMDtcbnZhciByZWFsV2luZG93SGVpZ2h0ID0gMDtcbnd4LmdldFN5c3RlbUluZm8oe1xuICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgcmVhbFdpbmRvd1dpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgcmVhbFdpbmRvd0hlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgfVxufSlcbi8qKlxuICog5Li75Ye95pWw5YWl5Y+j5Yy6XG4gKiovXG5mdW5jdGlvbiB3eFBhcnNlKGJpbmROYW1lID0gJ3d4UGFyc2VEYXRhJywgdHlwZT0naHRtbCcsIGRhdGE9JzxkaXYgY2xhc3M9XCJjb2xvcjpyZWQ7XCI+5pWw5o2u5LiN6IO95Li656m6PC9kaXY+JywgdGFyZ2V0LGltYWdlUGFkZGluZykge1xuICB2YXIgdGhhdCA9IHRhcmdldDtcbiAgdmFyIHRyYW5zRGF0YSA9IHt9Oy8v5a2Y5pS+6L2s5YyW5ZCO55qE5pWw5o2uXG4gIGlmICh0eXBlID09ICdodG1sJykge1xuICAgIHRyYW5zRGF0YSA9IEh0bWxUb0pzb24uaHRtbDJqc29uKGRhdGEsIGJpbmROYW1lKTtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0cmFuc0RhdGEsICcgJywgJyAnKSk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PSAnbWQnIHx8IHR5cGUgPT0gJ21hcmtkb3duJykge1xuICAgIHZhciBjb252ZXJ0ZXIgPSBuZXcgc2hvd2Rvd24uQ29udmVydGVyKCk7XG4gICAgdmFyIGh0bWwgPSBjb252ZXJ0ZXIubWFrZUh0bWwoZGF0YSk7XG4gICAgdHJhbnNEYXRhID0gSHRtbFRvSnNvbi5odG1sMmpzb24oaHRtbCwgYmluZE5hbWUpO1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRyYW5zRGF0YSwgJyAnLCAnICcpKTtcbiAgfVxuICB0cmFuc0RhdGEudmlldyA9IHt9O1xuICB0cmFuc0RhdGEudmlldy5pbWFnZVBhZGRpbmcgPSAwO1xuICBpZih0eXBlb2YoaW1hZ2VQYWRkaW5nKSAhPSAndW5kZWZpbmVkJyl7XG4gICAgdHJhbnNEYXRhLnZpZXcuaW1hZ2VQYWRkaW5nID0gaW1hZ2VQYWRkaW5nXG4gIH1cbiAgdmFyIGJpbmREYXRhID0ge307XG4gIGJpbmREYXRhW2JpbmROYW1lXSA9IHRyYW5zRGF0YTtcbiAgdGhhdC5zZXREYXRhKGJpbmREYXRhKSAvLyDov5nkuIDooYzmsqHnlKhcbiAgLy8g5LqM5qyh5L+u5pS5XG4gIHRoYXQuYmluZERhdGEgPSBiaW5kRGF0YSAvLyDov5nkuIDooYzmlrDlop5cbiAgdGhhdC53eFBhcnNlSW1nTG9hZCA9IHd4UGFyc2VJbWdMb2FkO1xuICB0aGF0Lnd4UGFyc2VJbWdUYXAgPSB3eFBhcnNlSW1nVGFwO1xufVxuLy8g5Zu+54mH54K55Ye75LqL5Lu2XG5mdW5jdGlvbiB3eFBhcnNlSW1nVGFwKGUpIHtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuICB2YXIgbm93SW1nVXJsID0gZS50YXJnZXQuZGF0YXNldC5zcmM7XG4gIHZhciB0YWdGcm9tID0gZS50YXJnZXQuZGF0YXNldC5mcm9tO1xuICBpZiAodHlwZW9mICh0YWdGcm9tKSAhPSAndW5kZWZpbmVkJyAmJiB0YWdGcm9tLmxlbmd0aCA+IDApIHtcbiAgICB3eC5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgY3VycmVudDogbm93SW1nVXJsLCAvLyDlvZPliY3mmL7npLrlm77niYfnmoRodHRw6ZO+5o6lXG4gICAgICAvLyB1cmxzOiB0aGF0LmRhdGFbdGFnRnJvbV0uaW1hZ2VVcmxzIC8vIOmcgOimgemihOiniOeahOWbvueJh2h0dHDpk77mjqXliJfooahcbiAgICAgIC8vIOS6jOasoeS/ruaUuVxuICAgICAgdXJsczogdGhhdC5iaW5kRGF0YVt0YWdGcm9tXS5pbWFnZVVybHMgLy8g6ZyA6KaB6aKE6KeI55qE5Zu+54mHaHR0cOmTvuaOpeWIl+ihqFxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiDlm77niYfop4bop4nlrr3pq5jorqHnrpflh73mlbDljLogXG4gKiovXG5mdW5jdGlvbiB3eFBhcnNlSW1nTG9hZChlKSB7XG4gIHZhciB0aGF0ID0gdGhpcztcbiAgdmFyIHRhZ0Zyb20gPSBlLnRhcmdldC5kYXRhc2V0LmZyb207XG4gIHZhciBpZHggPSBlLnRhcmdldC5kYXRhc2V0LmlkeDtcbiAgaWYgKHR5cGVvZiAodGFnRnJvbSkgIT0gJ3VuZGVmaW5lZCcgJiYgdGFnRnJvbS5sZW5ndGggPiAwKSB7XG4gICAgY2FsTW9yZUltYWdlSW5mbyhlLCBpZHgsIHRoYXQsIHRhZ0Zyb20pXG4gIH0gXG59XG4vLyDlgYflvqrnjq/ojrflj5borqHnrpflm77niYfop4bop4nmnIDkvbPlrr3pq5hcbmZ1bmN0aW9uIGNhbE1vcmVJbWFnZUluZm8oZSwgaWR4LCB0aGF0LCBiaW5kTmFtZSkge1xuICB2YXIgdGVtRGF0YSA9IHRoYXQuZGF0YVtiaW5kTmFtZV07XG4gIGlmICghdGVtRGF0YSB8fCB0ZW1EYXRhLmltYWdlcy5sZW5ndGggPT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgdGVtSW1hZ2VzID0gdGVtRGF0YS5pbWFnZXM7XG4gIC8v5Zug5Li65peg5rOV6I635Y+Wdmlld+WuveW6piDpnIDopoHoh6rlrprkuYlwYWRkaW5n6L+b6KGM6K6h566X77yM56iN5ZCO5aSE55CGXG4gIHZhciByZWNhbCA9IHd4QXV0b0ltYWdlQ2FsKGUuZGV0YWlsLndpZHRoLCBlLmRldGFpbC5oZWlnaHQsdGhhdCxiaW5kTmFtZSk7IFxuICAvLyB0ZW1JbWFnZXNbaWR4XS53aWR0aCA9IHJlY2FsLmltYWdlV2lkdGg7XG4gIC8vIHRlbUltYWdlc1tpZHhdLmhlaWdodCA9IHJlY2FsLmltYWdlaGVpZ2h0OyBcbiAgLy8gdGVtRGF0YS5pbWFnZXMgPSB0ZW1JbWFnZXM7XG4gIC8vIHZhciBiaW5kRGF0YSA9IHt9O1xuICAvLyBiaW5kRGF0YVtiaW5kTmFtZV0gPSB0ZW1EYXRhO1xuICAvLyB0aGF0LnNldERhdGEoYmluZERhdGEpO1xuICB2YXIgaW5kZXggPSB0ZW1JbWFnZXNbaWR4XS5pbmRleFxuICB2YXIga2V5ID0gYCR7YmluZE5hbWV9YFxuICBmb3IgKHZhciBpIG9mIGluZGV4LnNwbGl0KCcuJykpIGtleSs9YC5ub2Rlc1ske2l9XWBcbiAgdmFyIGtleVcgPSBrZXkgKyAnLndpZHRoJ1xuICB2YXIga2V5SCA9IGtleSArICcuaGVpZ2h0J1xuICB0aGF0LnNldERhdGEoe1xuICAgIFtrZXlXXTogcmVjYWwuaW1hZ2VXaWR0aCxcbiAgICBba2V5SF06IHJlY2FsLmltYWdlaGVpZ2h0LFxuICB9KVxufVxuXG4vLyDorqHnrpfop4bop4nkvJjlhYjnmoTlm77niYflrr3pq5hcbmZ1bmN0aW9uIHd4QXV0b0ltYWdlQ2FsKG9yaWdpbmFsV2lkdGgsIG9yaWdpbmFsSGVpZ2h0LHRoYXQsYmluZE5hbWUpIHtcbiAgLy/ojrflj5blm77niYfnmoTljp/lp4vplb/lrr1cbiAgdmFyIHdpbmRvd1dpZHRoID0gMCwgd2luZG93SGVpZ2h0ID0gMDtcbiAgdmFyIGF1dG9XaWR0aCA9IDAsIGF1dG9IZWlnaHQgPSAwO1xuICB2YXIgcmVzdWx0cyA9IHt9O1xuICB2YXIgcGFkZGluZyA9IHRoYXQuZGF0YVtiaW5kTmFtZV0udmlldy5pbWFnZVBhZGRpbmc7XG4gIHdpbmRvd1dpZHRoID0gcmVhbFdpbmRvd1dpZHRoLTIqcGFkZGluZztcbiAgd2luZG93SGVpZ2h0ID0gcmVhbFdpbmRvd0hlaWdodDtcbiAgLy/liKTmlq3mjInnhafpgqPnp43mlrnlvI/ov5vooYznvKnmlL5cbiAgLy8gY29uc29sZS5sb2coXCJ3aW5kb3dXaWR0aFwiICsgd2luZG93V2lkdGgpO1xuICBpZiAob3JpZ2luYWxXaWR0aCA+IHdpbmRvd1dpZHRoKSB7Ly/lnKjlm77niYd3aWR0aOWkp+S6juaJi+acuuWxj+W5lXdpZHRo5pe25YCZXG4gICAgYXV0b1dpZHRoID0gd2luZG93V2lkdGg7XG4gICAgLy8gY29uc29sZS5sb2coXCJhdXRvV2lkdGhcIiArIGF1dG9XaWR0aCk7XG4gICAgYXV0b0hlaWdodCA9IChhdXRvV2lkdGggKiBvcmlnaW5hbEhlaWdodCkgLyBvcmlnaW5hbFdpZHRoO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiYXV0b0hlaWdodFwiICsgYXV0b0hlaWdodCk7XG4gICAgcmVzdWx0cy5pbWFnZVdpZHRoID0gYXV0b1dpZHRoO1xuICAgIHJlc3VsdHMuaW1hZ2VoZWlnaHQgPSBhdXRvSGVpZ2h0O1xuICB9IGVsc2Ugey8v5ZCm5YiZ5bGV56S65Y6f5p2l55qE5pWw5o2uXG4gICAgcmVzdWx0cy5pbWFnZVdpZHRoID0gb3JpZ2luYWxXaWR0aDtcbiAgICByZXN1bHRzLmltYWdlaGVpZ2h0ID0gb3JpZ2luYWxIZWlnaHQ7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbmZ1bmN0aW9uIHd4UGFyc2VUZW1BcnJheSh0ZW1BcnJheU5hbWUsYmluZE5hbWVSZWcsdG90YWwsdGhhdCl7XG4gIHZhciBhcnJheSA9IFtdO1xuICB2YXIgdGVtRGF0YSA9IHRoYXQuZGF0YTtcbiAgdmFyIG9iaiA9IG51bGw7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCB0b3RhbDsgaSsrKXtcbiAgICB2YXIgc2ltQXJyID0gdGVtRGF0YVtiaW5kTmFtZVJlZytpXS5ub2RlcztcbiAgICBhcnJheS5wdXNoKHNpbUFycik7XG4gIH1cblxuICB0ZW1BcnJheU5hbWUgPSB0ZW1BcnJheU5hbWUgfHwgJ3d4UGFyc2VUZW1BcnJheSc7XG4gIG9iaiA9IEpTT04ucGFyc2UoJ3tcIicrIHRlbUFycmF5TmFtZSArJ1wiOlwiXCJ9Jyk7XG4gIG9ialt0ZW1BcnJheU5hbWVdID0gYXJyYXk7XG4gIHRoYXQuc2V0RGF0YShvYmopO1xufVxuXG4vKipcbiAqIOmFjee9rmVtb2ppc1xuICogXG4gKi9cblxuZnVuY3Rpb24gZW1vamlzSW5pdChyZWc9JycsYmFzZVNyYz1cIi93eFBhcnNlL2Vtb2ppcy9cIixlbW9qaXMpe1xuICAgSHRtbFRvSnNvbi5lbW9qaXNJbml0KHJlZyxiYXNlU3JjLGVtb2ppcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB3eFBhcnNlOiB3eFBhcnNlLFxuICB3eFBhcnNlVGVtQXJyYXk6d3hQYXJzZVRlbUFycmF5LFxuICBlbW9qaXNJbml0OmVtb2ppc0luaXRcbn1cblxuXG4iXX0=