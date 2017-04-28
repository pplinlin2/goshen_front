import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

let datas = [
  {
    'date': '2017-05-01', 
    'first': true, 
    'title': '顯後第六主日', 
    'image': 'https://goshentp.files.wordpress.com/2011/09/img005-05-1-e1316700241931.jpg', 
    'preach': {
      'topic': '天大的好消息', 
      'preacher': '陳志宏 牧師', 
    }, 
    'verses': {
      'content': '同我上去的眾弟兄使百姓的心消化；但我專心跟從耶和華─我的神。', 
      'cite': '約書亞十四:8', 
    }
  }, {
    'date': '2017-05-28', 
    'first': false, 
    'title': '顯後第六主日', 
    'image': 'https://pic.pimg.tw/bethelaudio/1479450218-3011885985_n.jpg?v=1479450254', 
    'preach': {
      'topic': '天大的好消息', 
      'preacher': '陳志宏 牧師', 
    }, 
    'verses': {
      'content': '同我上去的眾弟兄使百姓的心消化；但我專心跟從耶和華─我的神。', 
      'cite': '約書亞十四:8', 
    }
  }, 
]

let data = {
  'worship': [
    {'title': '序樂', 'content': '', }, 
    {'title': '宣召', 'content': '', }, 
    {'title': '唱詩', 'content': ['一切歌頌讚美', '我的救贖主活著', '我知道誰掌管明天', '你為何揀選我'], }, 
    {'title': '認信', 'content': '', }, 
    {'title': '經文', 'content': '弗一3~14', }, 
    {'title': '唱詩', 'content': ['你為何揀選我'], }, 
    {'title': '証道', 'content': '天大的好消息', }, 
    {'title': '奉獻', 'content': '', }, 
    {'title': '報告事項', 'content': '', }, 
    {'title': '主禱文', 'content': '', }, 
    {'title': '祝福', 'content': '', }, 
    {'title': '殿樂', 'content': '', }, 
    {'title': '默禱', 'content': '', }, 
  ], 
  'fellowship': 'fellowship', 
  'pray': 'pray', 
  'messages': '二十世紀初期在英國有一位律師名叫莫理遜，他原本是一位無神論者，而且他相當反對基督徒的信仰。爲了攻擊基督徒的信仰，他對聖經作了一些研究，他發現耶穌的復活是基督徒信仰非常重要的一個根基，他想只要他能够找到證據來證明耶穌沒有從死裏復活，那麽教會就會自然瓦解，基督教就會從歷史上消失。於是他就用他律師尋找證據的認真、嚴謹的態度去尋找耶穌沒有復活的證據。好幾年過去了，他最後找到耶穌沒有復活的證據了嗎？莫理遜是一個很認真，也是一絲不茍的人，他慢慢發現他所找到的證據並不能證明耶穌沒有復活，雖然歷史上有許多耶穌沒有從死裏復活的證據，但是這些所謂的證據本身的可性度都存在不少問題，不太經得起嚴格的考驗，反而有越來越多的資料是和莫理遜的假設相反的。最後莫理遜本著自己誠實和良知作了一個結論，他無法否認耶穌已經復活的事實，他接受耶穌成爲他的救主，他也成爲一個基督徒。後來他把他蒐集到的資料寫成一本書，英文書名叫Who Moves the Stone？最早的中文譯本把這本書的書名翻譯成「墳墓的秘密」，後來有其他的出版社中文譯本的書名翻譯成「歷史性的大審判」。最新版的翻譯成｢墓石懸謎—復活的千古反思」，如果你有興趣瞭解莫理遜的心路歷程與他的發現，可以找這本書來看。', 
  'announcement': 'announcement', 
}

let photos = [{
    'title': 'Surroundings', 
    'photos': [
      'https://goshentp.files.wordpress.com/2011/09/img005-05-1-e1316700241931.jpg?w=540', 
      'https://pic.pimg.tw/bethelaudio/1479450218-3011885985_n.jpg?v=1479450254', 
    ], 
  }, 
]

let state = {
  bulletins: [], 
  bulletin: {}, 
  galleries: [], 
}

let getters = {
}

let mutations = {
  LOAD_BULLETINS: (state, result) => {
    let bulletins = []
    for (let i = 0; i < 2; i++) {
      bulletins.push(result[i])
    }
    state.bulletins = state.bulletins.concat(bulletins)
  }, 
  LOAD_BULLETIN: (state, result) => {
    state.bulletin = result
  }, 
  LOAD_GALLERIES: (state, result) => {
    state.galleries = result
  }
}

let actions = {
  loadBulletins: ({ commit }, done) => {
    setTimeout(() => {
      commit('LOAD_BULLETINS', datas)
      done()
    }, 2000)
  },  
  loadBulletin: ({ commit }, date) => {
    console.log('loading bulletin ' + date)
    setTimeout(() => {
      commit('LOAD_BULLETIN', data)
    }, 2000)
  }, 
  loadGalleries: ({ commit }) => {
    setTimeout(() => {
      commit('LOAD_GALLERIES', photos)
    }, 1000)
  }, 
}

export default new Vuex.Store({
  state, 
  getters, 
  mutations, 
  actions, 
})