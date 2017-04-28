<template>
  <!-- root node required -->
  <div>
    <!-- your content -->
    <div class="layout-padding">
      <!-- if you want automatic padding -->
      <div v-for="gallery in galleries" class="card">
        <div class="card-title">{{ gallery.title }}</div>
        <div class="card-media">
          <q-gallery-slider infinite dots fullscreen :src="gallery.photos"></q-gallery-slider>
        </div>
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
  created () {
    this.loadGalleries()
  }, 
  computed: {
    ...mapState(['galleries'], ), 
  }, 
  methods: {
    ...mapActions(['loadGalleries', ]), 
  }, 
}
</script>

<style>
</style>
