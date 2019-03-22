import Mock from 'mockjs'
import { deepClone } from '@/utils'
import { filterAsyncRoutes } from '@/store/modules/permission'
import { asyncRoutes, constantRoutes } from '@/router'

const routes = deepClone([...constantRoutes, ...asyncRoutes])

const roles = [
  {
    key: 'admin',
    name: '超级管理员',
    username: 'admin_user',
    password: 'admin_password',
    email: 'admin_user@yyft.com',
    description: '超级管理员，有权查看所有页面。',
    // routes: routes
    routes: routes
  },
  {
    key: 'editor',
    name: '普通员工',
    username: 'editor_user',
    password: 'editor_password',
    email: 'editor_user@yyft.com',
    description: '普通员工，可以查看除权限页之外的所有页。',
    routes: filterAsyncRoutes(routes, ['editor'])
  },
  {
    key: 'visitor',
    name: '访客',
    username: 'visitor_user',
    password: 'visitor_password',
    email: 'visitor_user@yyft.com',
    description: '只是个访客，只能查看主页和文档页。',
    routes: [{
      path: '',
      redirect: 'dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          meta: { title: 'dashboard', icon: 'dashboard' }
        }
      ]
    }]
  }
]

export default {
  getRoutes() {
    return routes
  },
  getRoles() {
    return roles
  },
  addRole() {
    return Mock.mock('@integer(300, 5000)')
  },
  updateRole() {
    const res = {
      data: 'success'
    }
    return res
  },
  deleteRole() {
    const res = {
      data: 'success'
    }
    return res
  }
}
