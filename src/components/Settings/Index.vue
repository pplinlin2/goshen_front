<template>
  <!-- root node required -->
  <div>
    <!-- your content -->
    <div class="layout-padding">
      <!-- if you want automatic padding -->
      <button class="outline primary" @click="fullscreen">Fullscreen</button>
    </div>
  </div>
</template>

<script>
import { AppFullscreen } from 'quasar'

export default {
  data: () => ({
  }), 
  methods: {
    fullscreen: () => {
      AppFullscreen.request()
    }, 
  }, 
}
</script>

<style>
</style>
