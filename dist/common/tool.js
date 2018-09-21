'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tool = {
  replace: function replace(data, type) {
    for (var i = data.length - 1; i >= 0; i--) {
      var avatar = data[i].member[type];
      var created = data[i].created;
      // 替换头像URL
      data[i].member[type] = avatar.replace('//', 'https://');

      var defaultAvatar = avatar.split('?s=24');

      if (defaultAvatar.length > 1) {
        data[i].member[type] = avatar.replace('?s=24', '?s=100');
      } else {
        data[i].member[type] = avatar.replace('_mini', '_large');
      }

      // 替换日期格式
      data[i].created = this.timeDiff(created);
      // 替换 node 头像
      if (data[i].node) {
        var nodeAvatar = data[i].node.avatar_normal;
        data[i].node.avatar_normal = nodeAvatar.replace('//', 'https://');
      }
    }
    return data;
  },
  timeDiff: function timeDiff(dateTime) {
    var day = void 0,
        dayC = void 0,
        diffVal = void 0,
        halfamonth = void 0,
        hour = void 0,
        hourC = void 0,
        minC = void 0,
        minute = void 0,
        month = void 0,
        monthC = void 0,
        now = void 0,
        result = void 0,
        weekC = void 0;
    minute = 1000 * 60;
    hour = minute * 60;
    day = hour * 24;
    halfamonth = day * 15;
    month = day * 30;
    now = new Date().getTime();
    diffVal = now - dateTime * 1000;
    if (diffVal < 0) {
      return console.log('当前时间出错');
    }
    monthC = diffVal / month;
    weekC = diffVal / (7 * day);
    dayC = diffVal / day;
    hourC = diffVal / hour;
    minC = diffVal / minute;
    if (monthC >= 1) {
      result = '' + parseInt(monthC) + '月前';
    } else if (weekC >= 1) {
      result = '' + parseInt(weekC) + '周前';
    } else if (dayC >= 1) {
      result = '' + parseInt(dayC) + '天前';
    } else if (hourC >= 1) {
      result = '' + parseInt(hourC) + '小时前';
    } else if (minC >= 1) {
      result = '' + parseInt(minC) + '分钟前';
    } else {
      result = '刚刚';
    }
    return result;
  },
  changeImgUrl: function changeImgUrl(str) {
    var result = void 0,
        srcArr = [];
    var regexp = /!\[.*?\]\((.*?)\)/g;

    while ((result = regexp.exec(str)) !== null) {
      srcArr.push(result[1]);
    }

    for (var i = srcArr.length - 1; i >= 0; i--) {
      str = str.replace(/!\[.*?\]\(.*?\)/i, '<image src="' + srcArr[i] + '"></image>');
    }
    return str;
  }
};

exports.default = tool;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2wuanMiXSwibmFtZXMiOlsidG9vbCIsInJlcGxhY2UiLCJkYXRhIiwidHlwZSIsImkiLCJsZW5ndGgiLCJhdmF0YXIiLCJtZW1iZXIiLCJjcmVhdGVkIiwiZGVmYXVsdEF2YXRhciIsInNwbGl0IiwidGltZURpZmYiLCJub2RlIiwibm9kZUF2YXRhciIsImF2YXRhcl9ub3JtYWwiLCJkYXRlVGltZSIsImRheSIsImRheUMiLCJkaWZmVmFsIiwiaGFsZmFtb250aCIsImhvdXIiLCJob3VyQyIsIm1pbkMiLCJtaW51dGUiLCJtb250aCIsIm1vbnRoQyIsIm5vdyIsInJlc3VsdCIsIndlZWtDIiwiRGF0ZSIsImdldFRpbWUiLCJjb25zb2xlIiwibG9nIiwicGFyc2VJbnQiLCJjaGFuZ2VJbWdVcmwiLCJzdHIiLCJzcmNBcnIiLCJyZWdleHAiLCJleGVjIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU87QUFDWEMsU0FEVyxtQkFDRkMsSUFERSxFQUNJQyxJQURKLEVBQ1U7QUFDbkIsU0FBSyxJQUFJQyxJQUFJRixLQUFLRyxNQUFMLEdBQWMsQ0FBM0IsRUFBOEJELEtBQUssQ0FBbkMsRUFBc0NBLEdBQXRDLEVBQTJDO0FBQ3pDLFVBQUlFLFNBQVNKLEtBQUtFLENBQUwsRUFBUUcsTUFBUixDQUFlSixJQUFmLENBQWI7QUFDQSxVQUFJSyxVQUFVTixLQUFLRSxDQUFMLEVBQVFJLE9BQXRCO0FBQ0E7QUFDQU4sV0FBS0UsQ0FBTCxFQUFRRyxNQUFSLENBQWVKLElBQWYsSUFBdUJHLE9BQU9MLE9BQVAsQ0FBZSxJQUFmLEVBQXFCLFVBQXJCLENBQXZCOztBQUVBLFVBQUlRLGdCQUFnQkgsT0FBT0ksS0FBUCxDQUFhLE9BQWIsQ0FBcEI7O0FBRUEsVUFBSUQsY0FBY0osTUFBZCxHQUF1QixDQUEzQixFQUE4QjtBQUM1QkgsYUFBS0UsQ0FBTCxFQUFRRyxNQUFSLENBQWVKLElBQWYsSUFBdUJHLE9BQU9MLE9BQVAs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QyxFQUF3Q0EsR0FBeEMsRUFBNkM7QUFDM0MrQixZQUFNQSxJQUFJbEMsT0FBSixDQUFZLGtCQUFaLEVBQWdDLGlCQUFpQm1DLE9BQU9oQyxDQUFQLENBQWpCLEdBQTZCLFlBQTdELENBQU47QUFDRDtBQUNELFdBQU8rQixHQUFQO0FBQ0Q7QUF0RVUsQ0FBYjs7a0JBeUVlbkMsSSIsImZpbGUiOiJ0b29sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuY29uc3QgdG9vbCA9IHtcbiAgcmVwbGFjZSAoZGF0YSwgdHlwZSkge1xuICAgIGZvciAodmFyIGkgPSBkYXRhLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgYXZhdGFyID0gZGF0YVtpXS5tZW1iZXJbdHlwZV1cbiAgICAgIGxldCBjcmVhdGVkID0gZGF0YVtpXS5jcmVhdGVkXG4gICAgICAvLyDmm7/mjaLlpLTlg49VUkxcbiAgICAgIGRhdGFbaV0ubWVtYmVyW3R5cGVdID0gYXZhdGFyLnJlcGxhY2UoJy8vJywgJ2h0dHBzOi8vJylcblxuICAgICAgbGV0IGRlZmF1bHRBdmF0YXIgPSBhdmF0YXIuc3BsaXQoJz9zPTI0JylcblxuICAgICAgaWYgKGRlZmF1bHRBdmF0YXIubGVuZ3RoID4gMSkge1xuICAgICAgICBkYXRhW2ldLm1lbWJlclt0eXBlXSA9IGF2YXRhci5yZXBsYWNlKCc/cz0yNCcsICc/cz0xMDAnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YVtpXS5tZW1iZXJbdHlwZV0gPSBhdmF0YXIucmVwbGFjZSgnX21pbmknLCAnX2xhcmdlJylcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8g5pu/5o2i5pel5pyf5qC85byPXG4gICAgICBkYXRhW2ldLmNyZWF0ZWQgPSB0aGlzLnRpbWVEaWZmKGNyZWF0ZWQpXG4gICAgICAvLyDmm7/mjaIgbm9kZSDlpLTlg49cbiAgICAgIGlmIChkYXRhW2ldLm5vZGUpIHtcbiAgICAgICAgbGV0IG5vZGVBdmF0YXIgPSBkYXRhW2ldLm5vZGUuYXZhdGFyX25vcm1hbFxuICAgICAgICBkYXRhW2ldLm5vZGUuYXZhdGFyX25vcm1hbCA9IG5vZGVBdmF0YXIucmVwbGFjZSgnLy8nLCAnaHR0cHM6Ly8nKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YVxuICB9LFxuICB0aW1lRGlmZiAoZGF0ZVRpbWUpIHtcbiAgICBsZXQgZGF5LCBkYXlDLCBkaWZmVmFsLCBoYWxmYW1vbnRoLCBob3VyLCBob3VyQywgbWluQywgbWludXRlLCBtb250aCwgbW9udGhDLCBub3csIHJlc3VsdCwgd2Vla0M7XG4gICAgbWludXRlID0gMTAwMCAqIDYwO1xuICAgIGhvdXIgPSBtaW51dGUgKiA2MDtcbiAgICBkYXkgPSBob3VyICogMjQ7XG4gICAgaGFsZmFtb250aCA9IGRheSAqIDE1O1xuICAgIG1vbnRoID0gZGF5ICogMzA7XG4gICAgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgZGlmZlZhbCA9IG5vdyAtIGRhdGVUaW1lICogMTAwMDtcbiAgICBpZiAoZGlmZlZhbCA8IDApIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZygn5b2T5YmN5pe26Ze05Ye66ZSZJyk7XG4gICAgfVxuICAgIG1vbnRoQyA9IGRpZmZWYWwgLyBtb250aDtcbiAgICB3ZWVrQyAgPSBkaWZmVmFsIC8gKDcgKiBkYXkpO1xuICAgIGRheUMgICA9IGRpZmZWYWwgLyBkYXk7XG4gICAgaG91ckMgID0gZGlmZlZhbCAvIGhvdXI7XG4gICAgbWluQyAgID0gZGlmZlZhbCAvIG1pbnV0ZTtcbiAgICBpZiAobW9udGhDID49IDEpIHtcbiAgICAgIHJlc3VsdCA9ICcnICsgcGFyc2VJbnQobW9udGhDKSArICfmnIjliY0nO1xuICAgIH0gZWxzZSBpZiAod2Vla0MgPj0gMSkge1xuICAgICAgcmVzdWx0ID0gJycgKyBwYXJzZUludCh3ZWVrQykgKyAn5ZGo5YmNJztcbiAgICB9IGVsc2UgaWYgKGRheUMgPj0gMSkge1xuICAgICAgcmVzdWx0ID0gJycgKyBwYXJzZUludChkYXlDKSArICflpKnliY0nO1xuICAgIH0gZWxzZSBpZiAoaG91ckMgPj0gMSkge1xuICAgICAgcmVzdWx0ID0gJycgKyBwYXJzZUludChob3VyQykgKyAn5bCP5pe25YmNJztcbiAgICB9IGVsc2UgaWYgKG1pbkMgPj0gMSkge1xuICAgICAgcmVzdWx0ID0gJycgKyBwYXJzZUludChtaW5DKSArICfliIbpkp/liY0nO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSAn5Yia5YiaJztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcbiAgY2hhbmdlSW1nVXJsIChzdHIpIHtcbiAgICBsZXQgcmVzdWx0LCBzcmNBcnIgPSBbXTtcbiAgICBsZXQgcmVnZXhwID0gLyFcXFsuKj9cXF1cXCgoLio/KVxcKS9nO1xuXG4gICAgd2hpbGUgKChyZXN1bHQ9cmVnZXhwLmV4ZWMoc3RyKSkgIT09IG51bGwpIHtcbiAgICAgIHNyY0Fyci5wdXNoKHJlc3VsdFsxXSk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IHNyY0Fyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgc3RyID0gc3RyLnJlcGxhY2UoLyFcXFsuKj9cXF1cXCguKj9cXCkvaSwgJzxpbWFnZSBzcmM9XCInICsgc3JjQXJyW2ldICsgJ1wiPjwvaW1hZ2U+JylcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB0b29sIl19