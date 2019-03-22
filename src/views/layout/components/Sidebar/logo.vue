<template>
  <div class="logo">
    <transition-group name="fade">
      <template v-if="!isCollapse">
        <span key="1" class="logo_title is-bold">管理后台</span>
        <span key="2" class="logo_subtitle">PYW</span>
      </template>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  // eslint-disable-next-line vue/require-prop-types
  props: ['isCollapse'],
  data() {
    return {}
  },
  computed: {},
  created() {},
  methods: {}
}
</script>

<style scoped="scoped" lang="scss">
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-active {
  transition: opacity 2.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.logo {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  // width: 230px;
  height: 110px;
  line-height: 1210px;
  background: #263548;
  color: #fdfdfd;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  overflow: hidden;
  box-sizing: border-box;
}
.logo_title {
  padding: 0 5px 0 0;
  color: #409eff;
  font-size: 20px;
  &.is-bold {
    font-weight: 700;
  }
}
.is-text {
  position: absolute;
  top: 0;
  // left: 20px;
}
.is-img {
  position: absolute;
  top: 10px;
  left: 10px;
}
.logo_subtitle {
  font-size: 16px;
  padding-top: 5px;
}
</style>
