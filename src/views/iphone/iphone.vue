<template>
  <div class="app-container">
    <div>
      <Iphone :option="easyDataOption0" />
    </div>
  </div>
</template>

<script>

import Iphone from '@/components/Iphone'

export default {
  name: 'Report',
  components: { Iphone },
  data() {
    return {
      easyDataOption0: {
        data: [
          {
            src: 'static/img/card/card-1.jpg'
          },
          {
            src: 'static/img/card/card-2.jpg'
          },
          {
            src: 'static/img/card/card-3.jpg'
          },
          {
            src: 'static/img/card/card-4.jpg'
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

<style lang ="scss">
    /* @import '@/styles/datacard.scss'; */
</style>
