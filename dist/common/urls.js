'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var URL = 'https://www.v2ex.com/api';
var urls = {
  members: URL + '/members/show.json',
  replies: URL + '/replies/show.json',
  topics: {
    hot: URL + '/topics/hot.json',
    show: URL + '/topics/show.json',
    latest: URL + '/topics/latest.json'
  },
  nodes: {
    all: URL + '/nodes/all.json',
    show: URL + '/nodes/show.json'
  }
};
exports.default = urls;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVybHMuanMiXSwibmFtZXMiOlsiVVJMIiwidXJscyIsIm1lbWJlcnMiLCJyZXBsaWVzIiwidG9waWNzIiwiaG90Iiwic2hvdyIsImxhdGVzdCIsIm5vZGVzIiwiYWxsIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU1BLE1BQU0sMEJBQVo7QUFDQSxJQUFJQyxPQUFPO0FBQ1RDLFdBQVNGLE1BQU0sb0JBRE47QUFFVEcsV0FBU0gsTUFBTSxvQkFGTjtBQUdUSSxVQUFRO0FBQ05DLFNBQUtMLE1BQU0sa0JBREw7QUFFTk0sVUFBTU4sTUFBTSxtQkFGTjtBQUdOTyxZQUFRUCxNQUFNO0FBSFIsR0FIQztBQVFUUSxTQUFPO0FBQ0xDLFNBQUtULE1BQU0saUJBRE47QUFFTE0sVUFBTU4sTUFBTTtBQUZQO0FBUkUsQ0FBWDtrQkFhZUMsSSIsImZpbGUiOiJ1cmxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVVJMID0gJ2h0dHBzOi8vd3d3LnYyZXguY29tL2FwaSdcbmxldCB1cmxzID0ge1xuICBtZW1iZXJzOiBVUkwgKyAnL21lbWJlcnMvc2hvdy5qc29uJyxcbiAgcmVwbGllczogVVJMICsgJy9yZXBsaWVzL3Nob3cuanNvbicsXG4gIHRvcGljczoge1xuICAgIGhvdDogVVJMICsgJy90b3BpY3MvaG90Lmpzb24nLFxuICAgIHNob3c6IFVSTCArICcvdG9waWNzL3Nob3cuanNvbicsXG4gICAgbGF0ZXN0OiBVUkwgKyAnL3RvcGljcy9sYXRlc3QuanNvbidcbiAgfSxcbiAgbm9kZXM6IHtcbiAgICBhbGw6IFVSTCArICcvbm9kZXMvYWxsLmpzb24nLFxuICAgIHNob3c6IFVSTCArICcvbm9kZXMvc2hvdy5qc29uJ1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCB1cmxzIl19