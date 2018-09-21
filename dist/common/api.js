'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var domain = 'https://www.v2ex.com/api',
    api = {
  members: domain + '/members/show.json',
  replies: domain + '/replies/show.json',
  topics: {
    hot: domain + '/topics/hot.json',
    show: domain + '/topics/show.json',
    latest: domain + '/topics/latest.json'
  },
  nodes: {
    all: domain + '/nodes/all.json',
    show: domain + '/nodes/show.json'
  }
};

exports.default = api;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJkb21haW4iLCJhcGkiLCJtZW1iZXJzIiwicmVwbGllcyIsInRvcGljcyIsImhvdCIsInNob3ciLCJsYXRlc3QiLCJub2RlcyIsImFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxTQUFTLDBCQUFmO0FBQUEsSUFDTUMsTUFBTTtBQUNKQyxXQUFZRixNQUFaLHVCQURJO0FBRUpHLFdBQVlILE1BQVosdUJBRkk7QUFHSkksVUFBUTtBQUNOQyxTQUFRTCxNQUFSLHFCQURNO0FBRU5NLFVBQVNOLE1BQVQsc0JBRk07QUFHTk8sWUFBV1AsTUFBWDtBQUhNLEdBSEo7QUFRSlEsU0FBTztBQUNMQyxTQUFRVCxNQUFSLG9CQURLO0FBRUxNLFVBQVNOLE1BQVQ7QUFGSztBQVJILENBRFo7O2tCQWVlQyxHIiwiZmlsZSI6ImFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRvbWFpbiA9ICdodHRwczovL3d3dy52MmV4LmNvbS9hcGknXG4gICAgLCBhcGkgPSB7XG4gICAgICAgIG1lbWJlcnM6IGAke2RvbWFpbn0vbWVtYmVycy9zaG93Lmpzb25gLFxuICAgICAgICByZXBsaWVzOiBgJHtkb21haW59L3JlcGxpZXMvc2hvdy5qc29uYCxcbiAgICAgICAgdG9waWNzOiB7XG4gICAgICAgICAgaG90OiBgJHtkb21haW59L3RvcGljcy9ob3QuanNvbmAsXG4gICAgICAgICAgc2hvdzogYCR7ZG9tYWlufS90b3BpY3Mvc2hvdy5qc29uYCxcbiAgICAgICAgICBsYXRlc3Q6IGAke2RvbWFpbn0vdG9waWNzL2xhdGVzdC5qc29uYFxuICAgICAgICB9LFxuICAgICAgICBub2Rlczoge1xuICAgICAgICAgIGFsbDogYCR7ZG9tYWlufS9ub2Rlcy9hbGwuanNvbmAsXG4gICAgICAgICAgc2hvdzogYCR7ZG9tYWlufS9ub2Rlcy9zaG93Lmpzb25gXG4gICAgICAgIH1cbiAgICAgIH1cblxuZXhwb3J0IGRlZmF1bHQgYXBpIl19