import Vue from 'vue'
import VueI18n from 'vue-i18n'

import zh_tw from '../i18n/zh_tw'

Vue.use(VueI18n)

const messages = {
  zh_tw, 
}

// Create VueI18n instance with options
export default new VueI18n({
  locale: 'zh_tw', // set locale
  messages, // set locale messages
})