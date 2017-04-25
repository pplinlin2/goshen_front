<template>
  <!-- root node required -->
  <div>
    <!-- your content -->
    <div class="layout-padding">
      <!-- if you want automatic padding -->
      <q-infinite-scroll :handler="refresher">

        <div class="timeline primary">
          <!-- label -->
          <div class="timeline-label">
            <h4 class="bg-white text-italic">
              2017 May
            </h4>
          </div>
          <!-- item -->
          <div v-for="(weekly, index) in weeklies" class="timeline-item">
            <div class="timeline-badge">
              <i>alarm</i>
            </div>
            <!-- date timestamp -->
            <div class="timeline-date text-italic">
              <div>June 16th, 2016</div>
            </div>

            <div class="card">
              <div class="card-title">
                {{ weekly.title }}
              </div>
              <div class="card-media">
                <img :src="weekly.image" alt="">
                <button v-link=" '/weekly' " class="grey circular">
                  <i>link</i>
                </button>
              </div>
              <div class="card-content">
                <p>{{ weekly.preach.topic }}</p>
                <p>{{ weekly.preach.preacher }}</p>
                <p>{{ weekly.verses.content }}</p>
                <p>{{ weekly.verses.cite }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-center" style="margin-bottom: 50px;">
          <spinner name="dots" slot="message" :size="40"></spinner>
        </div>
      </q-infinite-scroll>

      <button
        v-back-to-top.animate="{offset: 500, duration: 200}"
        class="primary circular fixed-bottom-right animate-pop"
        style="margin: 0 15px 75px 0"
      >
        <i>keyboard_arrow_up</i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      weeklies: [
        {
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
      ], 
    }
  }, 
  methods: {
    refresher (index, done) {
      setTimeout(() => {
        let weeklies = []
        for (let i = 0; i < 2; i++) {
          weeklies.push(this.weeklies[i])
        }
        this.weeklies = this.weeklies.concat(weeklies)
        done()
      }, 2500)
    }, 
  }, 
}
</script>

<style scoped>
  .largerFont {
    font-size: 18px;
  }
</style>
