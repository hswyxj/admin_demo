
<template>
  <div class="login-container">
    <div class="login-main">
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
        <div class="title-container">
          <h3 class="title">
            投放管理平台
          </h3>
        </div>

        <el-form-item prop="username">
          <span class="svg-container">
            <svg-icon icon-class="user" />
          </span>
          <el-input
            ref="username"
            v-model="loginForm.username"
            placeholder="用户账号"
            name="username"
            type="text"
            auto-complete="on"
            clearable
          />
        </el-form-item>

        <el-tooltip v-model="capsTooltip" content="大写锁定已开启" placement="right" manual>
          <el-form-item prop="password">
            <span class="svg-container">
              <svg-icon icon-class="password" />
            </span>
            <el-input
              :key="passwordType"
              ref="password"
              v-model="loginForm.password"
              :type="passwordType"
              placeholder="用户密码"
              name="password"
              auto-complete="on"
              clearable
              show-password
              @keyup.native="checkCapslock"
              @blur="capsTooltip = false"
              @keyup.enter.native="handleLogin"
            />
          </el-form-item>
        </el-tooltip>

        <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">
          登 录
        </el-button>

        <div class="tips">
          <span>超级管理账号 : admin</span>
          <span>密码 : Test123123</span>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { validNumAlphabets } from '@/utils/validate'

export default {
  name: 'Login',
  data() {
    // 自定义验证
    const validatePassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入账号密码'))
      } else if (!validNumAlphabets(value)) {
        callback(new Error('大小写字母+数字组合,不少于8位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: 'Test123123'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', message: '请输入正确的用户名' },
          { min: 4, message: '用户账号长度 4 个字符以上', trigger: 'blur' }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  created() {
    // window.addEventListener('storage', this.afterQRScan)
  },
  mounted() {
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    checkCapslock({ shiftKey, key } = {}) {
      if (key && key.length === 1) {
        if (shiftKey && (key >= 'a' && key <= 'z') || !shiftKey && (key >= 'A' && key <= 'Z')) {
          this.capsTooltip = true
        } else {
          this.capsTooltip = false
        }
      }
      if (key === 'CapsLock' && this.capsTooltip === true) {
        this.capsTooltip = false
      }
    },
    handleLogin(val) {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          // store.dispatch 可以处理被触发的 action 的处理函数返回的 Promise，并且 store.dispatch 仍旧返回 Promise
          this.$store.dispatch('user/login', this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || '/' })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" >
  /* 修复input 背景不协调 和光标变色 */
  /* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */
$bg:#283443;
// $light_gray:#fff;
// $cursor: #fff;
$light_gray:#787982;
$cursor:#787982;
@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
    }
  }
  /* reset element-ui css */
  .login-container {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
      // background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 5px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      }
    }
    .el-form-item {
    border: 1px solid rgb(214, 214, 216);
    // background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
.login-container {
  min-height: 100%;
  width: 100%;
  // background-color: url(../../assets/login.png);
  background-image: url(../../assets/top_images/login.png);
  background-size: cover;
  overflow: hidden;
  .login-main{
    border-radius: 16px;
    padding: 15% 50px 25px 50px;
  }
  .login-form {
    position: relative;
    left:25%;
    width: 400px;
    max-width: 100%;
    padding: 35px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 5px;
    box-sizing: border-box;
    background-color: #fff;
  }
  .tips {
    font-size: 14px;
    color: $dark_gray;
    margin-bottom:30px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      color: $dark_gray;
      margin: 0px auto 35px auto;
      text-align: center;
      font-weight: bold;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }
}
</style>
