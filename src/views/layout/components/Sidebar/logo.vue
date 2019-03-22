<template>
  <div class="logo">
    <transition name="fade">
      <span v-if="isCollapse" key="0" :class="{'is-text':!type,'is-img':type}" class="logo_title is-bold ">
        <template v-if="type">
          <img :src="P" width="40" height="40" >
        </template>
        <template v-else>
          P
        </template>
      </span>
    </transition>
    <transition-group name="fade">
      <template v-if="!isCollapse">
        <span key="1" class="logo_title is-bold">管理后台</span>
        <span key="2" class="logo_subtitle">PYW</span>
      </template>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Logo',
  props: {
    isCollapse: {
      required: true,
      validator: function(value) {
        return (
          value === null ||
        Array.isArray(value) && value.length > 0
        )
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['website']),
    type: function(val) {
      return this.website.logo.indexOf('static') !== -1
    }
  },
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
