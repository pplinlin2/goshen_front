<template>
  <!-- root node required -->
  <div id="weekly">
    <!-- your content -->
    <div class="layout-padding">
      <!-- if you want automatic padding -->
      <div class="list item-delimiter largerFont">
        <q-collapsible opened group="weekly" icon="cloud_queue" label="主日崇拜">
          <div>
            <dl class="horizontal">
              <div v-for="item in worship">
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
            {{ fellowship }}
          </div>
        </q-collapsible>
        <q-collapsible group="weekly" icon="people_outline" label="代禱事項">
          <div>
            {{ pray }}
          </div>
        </q-collapsible>
        <q-collapsible group="weekly" icon="message" label="主日信息">
          <div>
            {{ messages }}
          </div>
        </q-collapsible>
        <q-collapsible group="weekly" icon="announcement" label="報告事項">
          <div>
            {{ announcement }}
          </div>
        </q-collapsible>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data: () => ({
    'worship': [
      {'title': '序樂', 'content': '', }, 
      {'title': '宣召', 'content': '', }, 
      {'title': '唱詩', 'content': ['一切歌頌讚美', '我的救贖主活著', '我知道誰掌管明天', '你為何揀選我'], }, 
      {'title': '認信', 'content': '', }, 
      {'title': '經文', 'content': '弗一3~14', }, 
      {'title': '唱詩', 'content': ['你為何揀選我'], }, 
      {'title': '証道', 'content': '天大的好消息', }, 
      {'title': '奉獻', 'content': '', }, 
      {'title': '報告事項', 'content': '', }, 
      {'title': '主禱文', 'content': '', }, 
      {'title': '祝福', 'content': '', }, 
      {'title': '殿樂', 'content': '', }, 
      {'title': '默禱', 'content': '', }, 
    ], 
    'fellowship': 'fellowship', 
    'pray': 'pray', 
    'messages': '二十世紀初期在英國有一位律師名叫莫理遜，他原本是一位無神論者，而且他相當反對基督徒的信仰。爲了攻擊基督徒的信仰，他對聖經作了一些研究，他發現耶穌的復活是基督徒信仰非常重要的一個根基，他想只要他能够找到證據來證明耶穌沒有從死裏復活，那麽教會就會自然瓦解，基督教就會從歷史上消失。於是他就用他律師尋找證據的認真、嚴謹的態度去尋找耶穌沒有復活的證據。好幾年過去了，他最後找到耶穌沒有復活的證據了嗎？莫理遜是一個很認真，也是一絲不茍的人，他慢慢發現他所找到的證據並不能證明耶穌沒有復活，雖然歷史上有許多耶穌沒有從死裏復活的證據，但是這些所謂的證據本身的可性度都存在不少問題，不太經得起嚴格的考驗，反而有越來越多的資料是和莫理遜的假設相反的。最後莫理遜本著自己誠實和良知作了一個結論，他無法否認耶穌已經復活的事實，他接受耶穌成爲他的救主，他也成爲一個基督徒。後來他把他蒐集到的資料寫成一本書，英文書名叫Who Moves the Stone？最早的中文譯本把這本書的書名翻譯成「墳墓的秘密」，後來有其他的出版社中文譯本的書名翻譯成「歷史性的大審判」。最新版的翻譯成｢墓石懸謎—復活的千古反思」，如果你有興趣瞭解莫理遜的心路歷程與他的發現，可以找這本書來看。', 
    'announcement': 'announcement', 
  }), 
  methods: {
    test: () => {}, 
  }, 
}
</script>

<style scoped>
  .layout-padding {
    overflow: hidden; 
  }
  .largerFont {
    /*font-size: 18px;*/
  }
</style>
