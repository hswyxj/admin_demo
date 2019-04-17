import Mock from 'mockjs'
import { deepClone } from '../../src/utils/index.js'
import { asyncRoutes, constantRoutes } from './routes.js'

// 深拷贝
const routes = deepClone([...constantRoutes, ...asyncRoutes])

const rolelistname = ['超级管理员', '普通员工', '访客', 'test']

const roles = [
  {
    key: 'admin',
    name: '超级管理员',
    username: 'admin_user',
    password: 'admin_password',
    iphonenum: 13111111111,
    email: 'admin_user@yyft.com',
    description: '超级管理员。有权查看所有页面。',
    update_time: +Mock.Random.date('T'),
    routes: routes
  },
  {
    key: 'editor',
    name: '普通员工',
    username: 'editor_user',
    password: 'editor_password',
    iphonenum: 13111111112,
    email: 'editor_user@yyft.com',
    description: '普通员工。可以看到除权限页之外的所有页。',
    update_time: +Mock.Random.date('T'),
    routes: routes.filter(i => i.path !== '/permission' && i.path !== '/datecard') // just a mock
  },
  {
    key: 'visitor',
    name: '访客',
    username: 'visitor_user',
    password: 'visitor_password',
    iphonenum: 13111111113,
    email: 'visitor_user@yyft.com',
    description: '只是个访客,只能查看主页。',
    update_time: +Mock.Random.date('T'),
    routes: [{
      path: 'dashboard',
      redirect: 'dashboard/index',
      children: [
        {
          path: 'index',
          name: '首页',
          meta: { title: '首页', icon: 'dashboard' }
        }
      ]
    }]
  }
]

export default [
  // mock get all roleListname form server
  {
    url: '/routes',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: routes
      }
    }
  },

  // mock get all roleListname form server
  {
    url: '/rolelistname',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: rolelistname
      }
    }
  },

  // mock get all roles form server
  {
    url: '/roles',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: roles
      }
    }
  },

  // add role
  {
    url: '/role',
    type: 'post',
    response: {
      code: 20000,
      data: {
        key: Mock.mock('@integer(300, 5000)')
      }
    }
  },

  // update role
  {
    url: '/role/[A-Za-z0-9]',
    type: 'put',
    response: {
      code: 20000,
      data: {
        status: 'success'
      }
    }
  },

  // delete role
  {
    url: '/role/[A-Za-z0-9]',
    type: 'delete',
    response: {
      code: 20000,
      data: {
        status: 'success'
      }
    }
  }
]
