import wepy from 'wepy'

const tool = {
  replace (data, type) {
    for (var i = data.length - 1; i >= 0; i--) {
      let avatar = data[i].member[type]
      let created = data[i].created
      // 替换头像URL
      data[i].member[type] = avatar.replace('//', 'https://')

      let defaultAvatar = avatar.split('?s=24')

      if (defaultAvatar.length > 1) {
        data[i].member[type] = avatar.replace('?s=24', '?s=100')
      } else {
        data[i].member[type] = avatar.replace('_mini', '_large')
      }
      
      // 替换日期格式
      data[i].created = this.timeDiff(created)
      // 替换 node 头像
      if (data[i].node) {
        let nodeAvatar = data[i].node.avatar_normal
        data[i].node.avatar_normal = nodeAvatar.replace('//', 'https://')
      }
    }
    return data
  },
  timeDiff (dateTime) {
    let day, dayC, diffVal, halfamonth, hour, hourC, minC, minute, month, monthC, now, result, weekC;
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
    weekC  = diffVal / (7 * day);
    dayC   = diffVal / day;
    hourC  = diffVal / hour;
    minC   = diffVal / minute;
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
  changeImgUrl (str) {
    let result, srcArr = [];
    let regexp = /!\[.*?\]\((.*?)\)/g;

    while ((result=regexp.exec(str)) !== null) {
      srcArr.push(result[1]);
    }

    for (var i = srcArr.length - 1; i >= 0; i--) {
      str = str.replace(/!\[.*?\]\(.*?\)/i, '<image src="' + srcArr[i] + '"></image>')
    }
    return str;
  }
}

export default tool