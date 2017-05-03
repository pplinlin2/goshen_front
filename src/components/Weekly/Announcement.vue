<template>
  <div>
    <ol class="simple-list">
      <li v-for="announcement in bulletin.announcements">
        <div class="text-justify">
          {{ announcement }}
        </div>
      </li>
    </ol>
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

<style>
</style>
