<template>
  <!-- root node required -->
  <div id="weekly">
    <!-- your content -->
    <div class="layout-padding">
      <!-- if you want automatic padding -->
      <div class="list item-delimiter larger-font">
        <q-collapsible opened group="weekly" icon="cloud_queue" label="主日崇拜">
          <div>
            <dl class="horizontal">
              <div v-for="item in bulletin.worship">
              <dt>{{ item.title }}</dt>
              <dd v-if="item.content">
                <div v-if="Array.isArray(item.content)">
                  <div v-for="subitem in item.content">{{ subitem }}</div>
                </div>
                <div v-else>{{ item.content }}</div>
              </dd>
              <dd v-else>&nbsp;</dd>
              </div>
            </dl>
          </div>
        </q-collapsible>
        <q-collapsible group="weekly" icon="people" label="小組聚會">
          <div>
            {{ bulletin.fellowship }}
          </div>
        </q-collapsible>
        <q-collapsible group="weekly" icon="people_outline" label="代禱事項">
          <div>
            {{ bulletin.pray }}
          </div>
        </q-collapsible>
        <q-collapsible group="weekly" icon="message" label="主日信息">
          <div v-html="bulletin.messages">
          </div>
        </q-collapsible>
        <q-collapsible group="weekly" icon="announcement" label="報告事項">
          <ol class="circles-list">
            <li v-for="announcement in bulletin.announcements">
              {{ announcement }}
            </li>
          </ol>
        </q-collapsible>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {}
  }, 
  computed: {
    ...mapState(['bulletin']), 
  }, 
  methods: {
  }, 
}
</script>

<style scoped>
  .larger-font {
    /*font-size: 18px;*/
  }
  ol.circles-list {
    list-style-type: none;
    list-style-type: decimal !ie; /*IE 7- hack*/
     
    margin: 0;
    margin-left: 4em;
    padding: 0;
     
    counter-reset: li-counter;
  }
  ol.circles-list > li{
      position: relative;
      margin-bottom: 20px;
      padding-left: 0.5em;
      min-height: 3em;
  }
  ol.circles-list > li:before {
      position: absolute;
      top: 0;
      left: -1.33em;
      width: 1.2em;
      height: 1.2em;
       
      font-size: 2.5em;
      line-height: 1.2;
      text-align: center;
      color: #f5f5f5;
   
      border: 3px solid #c5c5c5;
      border-radius: 50%;
      background-color: #999999;
      content: counter(li-counter);
      counter-increment: li-counter;
  }
</style>
