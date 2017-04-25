<template>
  <q-context-menu ref="context">
    <div
      class="list"
      style="min-width: 150px; max-height: 300px;"
    >
      <div class="item item-link item-delimiter">
        <div class="item-content has-secondary" @click="toogleFullscreen(), $refs.context.close()">
          Fullscreen
        </div>
        <div class="item-secondary">
          <i>fullscreen</i>
        </div>
      </div>
    </div>
  </q-context-menu>
</template>

<script>
import { mapMutations } from 'vuex'
import { AppFullscreen } from 'quasar'

export default {
  data () {
    return {
    }
  }, 
  methods: {
    toogleFullscreen: () => AppFullscreen.request(),  
  }
}
</script>

<style>
</style>
