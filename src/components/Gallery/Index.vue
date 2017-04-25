<template>
  <!-- root node required -->
  <div>
    <!-- your content -->
    <div class="layout-padding">
      <!-- if you want automatic padding -->
      <div class="card">
        <div class="card-title">Title</div>
        <div class="card-media">
          <q-gallery-slider infinite dots fullscreen :src="gallery"></q-gallery-slider>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      gallery: [
        'https://goshentp.files.wordpress.com/2011/09/img005-05-1-e1316700241931.jpg?w=540', 
        'https://pic.pimg.tw/bethelaudio/1479450218-3011885985_n.jpg?v=1479450254', 
      ], 
    }
  }
}
</script>

<style>
</style>
