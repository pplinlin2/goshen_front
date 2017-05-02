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
          <div>
            {{ bulletin.messages }}
          </div>
        </q-collapsible>
        <q-collapsible group="weekly" icon="announcement" label="報告事項">
          <ul>
            <li v-for="announcement in bulletin.announcements">
              {{ announcement }}
            </li>
          </ul>
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
</style>
