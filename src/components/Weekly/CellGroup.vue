<template>
  <div>
    <ol class="simple-list">
      <li v-for="program in bulletin.fellowship">
        <div class="text-justify">
          <b>{{ program.title }}</b>
          <br>
          <div v-if="Array.isArray(program.content)">
            <ol class="block-list">
              <li v-for="subprogram in program.content">{{ subprogram }}</li>
            </ol>
            <!-- <div v-for="subprogram in program.content">{{ subprogram }}</div> -->
          </div>
          <div v-else>{{ program.content }}</div>
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
  /* http://codeitdown.com/ordered-list-css-styles/ */
  /* simple-list */
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

  /* block-list */
  ol.block-list {
    list-style-type: none;
    list-style-type: decimal !ie; /*IE 7- hack*/
     
    margin: 0;
    padding: 0;
     
    counter-reset: li-counter;
  }
  ol.block-list > li{
    position: relative;
    margin-top: 10px;
    padding: 10px;
    border-right: 2px solid #CCCCCC;
    background-color: #f5f5f5;
  }
</style>
