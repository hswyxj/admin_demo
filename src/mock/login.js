import { param2Obj } from '@/utils'

const userMap = {
  admin: {
    roles: ['admin'],
    password: 'admin_password',
    token: 'admin',
    introduction: '我是超级管理员',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  editor: {
    roles: ['editor'],
    password: 'editor_password',
    token: 'editor',
    introduction: '我是编辑',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

export default {
  loginByUsernamePwd: config => {
    const { username } = JSON.parse(config.body)
    const { password } = JSON.parse(config.body)
    // console.log(password)
    // console.log(userMap[username].password)
    if (password === userMap[username].password) {
      return userMap[username]
    } else {
      return false
    }
  },
  getUserInfo: config => {
    const { token } = param2Obj(config.url)
    if (userMap[token]) {
      return userMap[token]
    } else {
      return false
    }
  },
  logout: () => 'success'
}
