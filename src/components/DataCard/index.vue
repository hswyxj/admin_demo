<template>
  <div class="DataCard">
    <el-row :span="24">
      <el-col v-for="(item,index) in data" :span="span" :key="index">
        <div class="item">
          <img :src="item.src" class="item-img" >
          <div :style="{color:colorText,backgroundColor:bgText}" class="item-text">
            <h3>{{ item.name }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'DataCard',
  props: {
    option: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      span: this.option.span || 6,
      data: this.option.data || [],
      colorText: this.option.colorText || '#fff',
      bgText: this.option.bgText || '#2e323f',
      borderColor: this.option.borderColor || '#2e323f'
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
