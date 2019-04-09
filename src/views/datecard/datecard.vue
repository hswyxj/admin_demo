<template>
  <div class="app-container">
    <div class="item">
      <h4>卡片的展示</h4>
      <DataCard :option="easyDataOption0" />
    </div>
  </div>
</template>

<script>

import DataCard from '@/components/DataCard'

export default {
  name: 'Report',
  components: { DataCard },
  data() {
    return {
      easyDataOption0: {
        span: 6,
        borderColor: '#fff',
        data: [
          {
            name: '姓名1',
            src: 'static/img/card/card-1.jpg',
            text: '介绍1'
          },
          {
            name: '姓名2',
            src: 'static/img/card/card-2.jpg',
            text: '介绍2'
          },
          {
            name: '姓名3',
            src: 'static/img/card/card-3.jpg',
            text: '介绍3'
          },
          {
            name: '姓名4',
            src: 'static/img/card/card-4.jpg',
            text: '介绍4'
          }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {}
}
</script>

<style scoped>
.item {
  margin-bottom: 16px;
}
</style>
<style lang ="scss">
    @import '../../styles/datacard.scss';
</style>
