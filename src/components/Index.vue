<template>
  <q-layout>
    <div slot="header" class="toolbar">
      <!-- opens drawer below -->
      <button class="hide-on-drawer-visible" @click="$refs.drawer.open()">
        <i>menu</i>
      </button>
     
      <q-toolbar-title :padding="1">
        Goshen Cloud
      </q-toolbar-title>
    </div>

    <!-- Drawer -->
    <q-drawer ref="drawer">
      <div class="toolbar">
        <q-toolbar-title>
          Drawer Title
        </q-toolbar-title>
      </div>

      <div class="list no-border platform-delimiter">
        <q-drawer-link icon="home" :to="{path: '/', exact: true}">
          {{ $t("home") }}
        </q-drawer-link>
        <q-drawer-link icon="timeline" :to="{path: '/weeklies', exact: true}">
          {{ $t("sundayBulletin") }}
        </q-drawer-link>
        <q-drawer-link icon="photo" :to="{path: '/gallery', exact: true}">
          {{ $t("gallery") }}
        </q-drawer-link>
        <q-drawer-link icon="settings" :to="{path: '/settings', exact: true}">
          {{ $t("settings") }}
        </q-drawer-link>
      </div>
    </q-drawer>

    <context-menu></context-menu>

    <router-view class="layout-view"></router-view>

    <!-- Footer -->
    <!-- <div slot="footer" class="toolbar"></div> -->
   
  </q-layout>
</template>

<script>
import ContextMenu from '../components/Common/ContextMenu.vue'

export default {
  data () {
    return {}
  }, 
  components: {
    ContextMenu, 
  }
}
</script>