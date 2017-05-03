<template>
  <div class="text-justify text-indent-two-chars" v-html="bulletin.messages">
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
    }
  }, 
  computed: {
    ...mapState(['bulletin']), 
  }, 
}
</script>

<style scoped>
  .text-indent-two-chars {
    text-indent: 2em;
  }
  ul {
    padding-left: 1em;
  }
</style>
