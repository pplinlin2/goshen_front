<template>
  <div>
    <div class="layout-padding">
      
      <!-- Infinite Scroll -->
      <q-infinite-scroll :handler="refresher" ref="infiniteScroll">

        <!-- Timeline CSS -->
        <div class="timeline">
          <div v-for="(bulletin, index) in bulletins">
            <!-- label -->
            <div v-if="bulletin.latest" class="timeline-label">
              <h4 class="bg-white text-italic">
                2017 April
              </h4>
            </div>

            <div class="timeline-item">
              <button class="timeline-badge" @click="loadBulletinPage(bulletin.date)">
                <i>link</i>
              </button>

              <div class="timeline-date text-italic larger-font">
                <div>{{ bulletin.date }}</div>
              </div>

              <div class="card">
                <div class="card-title">
                  {{ bulletin.title }}
                </div>
                <div class="card-media">
                  <img :src="bulletin.image" alt="">
                  
                </div>
                <div class="card-content">
                  <div>{{ bulletin.preach.topic }}</div>
                  <div class="text-grey-13"> - {{ bulletin.preach.preacher }}</div>
                  <div>{{ bulletin.verses.content }}</div>
                  <div class="text-grey-13"> - {{ bulletin.verses.cite }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-center" style="margin-bottom: 50px;">
          <spinner name="dots" slot="message" :size="40"></spinner>
        </div>
      </q-infinite-scroll>

      <!-- Modal -->
      <q-modal ref="layoutModal" class="maximized" :content-css="{minWidth: '80vw', minHeight: '80vh'}">
        <q-layout>
          <div slot="header" class="toolbar">
            <button @click="$refs.layoutModal.close()">
              <i>keyboard_arrow_left</i>
            </button>
            <q-toolbar-title :padding="1">
              Sunday bulletin
            </q-toolbar-title>
          </div>
          <div slot="footer" class="toolbar primary">
            <q-tabs
              :refs="$refs"
              default-tab="tab-worship"
              ref="bulleinTab"
            >
              <q-tab name="tab-worship" icon="cloud_queue">
                {{ $t("worship") }}
              </q-tab>
              <q-tab name="tab-cell-group" icon="people">
                {{ $t("cellGroup") }}
              </q-tab>
              <q-tab name="tab-sermon" icon="message">
                {{ $t("sermon") }}
              </q-tab>
              <q-tab name="tab-announcement" icon="announcement">
                {{ $t("announcement") }}
              </q-tab>
            </q-tabs>
          </div>

          <div class="layout-view">
            <div class="layout-padding">
              <div ref="tab-worship">
                <worship />
              </div>
              <div ref="tab-cell-group">
                <cell-group />
              </div>
              <div ref="tab-sermon">
                <sermon />
              </div>
              <div ref="tab-announcement">
                <announcement />
              </div>
            </div>
          </div>
          <context-menu></context-menu>
        </q-layout>
      </q-modal>

      <!-- Back to Top -->
      <button
        v-back-to-top.animate="{offset: 500, duration: 200}"
        class="primary circular fixed-bottom-right animate-pop"
        style="margin: 0 15px 15px 0"
      >
        <i>keyboard_arrow_up</i>
      </button>

    </div>
  </div>
</template>

<script>
import Worship from '../../components/Weekly/Worship.vue'
import CellGroup from '../../components/Weekly/CellGroup.vue'
import Sermon from '../../components/Weekly/Sermon.vue'
import Announcement from '../../components/Weekly/Announcement.vue'
import ContextMenu from '../../components/Common/ContextMenu.vue'
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
    }
  }, 
  computed: {
    ...mapState(['bulletins']), 
  }, 
  methods: {
    ...mapActions(['loadBulletins', 'loadBulletin', ]), 
    refresher (index, done) {
      this.loadBulletins({index, done})
    }, 
    loadBulletinPage (date) {
      this.loadBulletin(date)
      this.$refs.bulleinTab.setActiveTab('tab-worship')
      this.$refs.layoutModal.open()
    }, 
  }, 
  components: {
    ContextMenu, 
    Worship, 
    CellGroup, 
    Sermon, 
    Announcement, 
  }, 
}
</script>

<style scoped>
  .larger-font {
    font-size: 24px;
  }
</style>
