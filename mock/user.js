import { deepClone } from '../src/utils/index.js'
import { asyncRoutes, constantRoutes } from './role/routes.js'

// 深拷贝
const routes = deepClone([...constantRoutes, ...asyncRoutes])
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  },
  visitor: {
    token: 'visitor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    password: 'admin_password',
    introduction: '超级管理员',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'admin',
    routes: routes
  },
  'editor-token': {
    roles: ['editor'],
    password: 'editor_password',
    introduction: '普通员工',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'editor',
    routes: routes // just a mock
  },
  'visitor-token': {
    roles: ['visitor'],
    password: 'visitor_password',
    introduction: '访客',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'visitor',
    routes: [{
      path: '',
      redirect: 'dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          meta: { title: '首页', icon: 'dashboard' }
        }
      ]
    }]
  }

}

export default [
  // user login
  {
    url: '/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const { password } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: '帐户或密码不正确2。'
        }
      } else if (password !== users[token.token].password) {
        return {
          code: 60204,
          message: '帐户或密码不正确。'
        }
      }

      return {
        code: 20000,
        data: token
      }
    }
  },

  // get user info
  {
    url: '/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
