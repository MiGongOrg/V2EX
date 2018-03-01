const URL = 'https://www.v2ex.com/api'
let urls = {
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
}
export default urls