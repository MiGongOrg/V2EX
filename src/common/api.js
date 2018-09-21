const domain = 'https://www.v2ex.com/api'
    , api = {
        members: `${domain}/members/show.json`,
        replies: `${domain}/replies/show.json`,
        topics: {
          hot: `${domain}/topics/hot.json`,
          show: `${domain}/topics/show.json`,
          latest: `${domain}/topics/latest.json`
        },
        nodes: {
          all: `${domain}/nodes/all.json`,
          show: `${domain}/nodes/show.json`
        }
      }

export default api