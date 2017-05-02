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
            <ol class="simple-list">
              <li v-for="program in bulletin.fellowship">
                <div class="text-justify">
                  <b>{{ program.title }}</b>
                  <br>
                  <div v-if="Array.isArray(program.content)">
                    <div v-for="subprogram in program.content">{{ subprogram }}</div>
                  </div>
                  <div v-else>{{ program.content }}</div>
                  </div>
              </li>
            </ol>
          </div>
        </q-collapsible>
        <q-collapsible group="weekly" icon="people_outline" label="代禱事項">
          <div>
            {{ bulletin.pray }}
          </div>
        </q-collapsible>
        <q-collapsible group="weekly" icon="message" label="主日信息">
          <div class="text-justify text-indent-two-chars" v-html="bulletin.messages">
          </div>
        </q-collapsible>
        <q-collapsible group="weekly" icon="announcement" label="報告事項">
          <ol class="simple-list">
            <li v-for="announcement in bulletin.announcements">
              <div class="text-justify">
                {{ announcement }}
              </div>
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
  .text-justify {
    text-align:justify;
  }
  .text-indent-two-chars {
    text-indent: 2em;
  }
  /* http://codeitdown.com/ordered-list-css-styles/ */
  ol.simple-list {
    list-style-type: none;
    list-style-type: decimal !ie; /*IE 7- hack*/
     
    margin: 0;
    margin-left: 3em;
    padding: 0;
     
    counter-reset: li-counter;
  }
  ol.simple-list > li{
    position: relative;
    margin-bottom: 20px;
    padding-left: 0.5em;
    min-height: 3em;
    border-left: 2px solid #CCCCCC;
  }
  ol.simple-list > li:before {
    position: absolute;
    top: 0;
    left: -1em;
    width: 0.8em;
     
    font-size: 3em;
    line-height: 1;
    font-weight: bold;
    text-align: right;
    color: #999999;
 
    content: counter(li-counter);
    counter-increment: li-counter;
  }
</style>
