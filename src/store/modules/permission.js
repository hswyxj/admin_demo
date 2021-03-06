import { constantRoutes, generalRoutes } from '@/router'
import { getInfo } from '@/api/user'
import { getToken } from '@/utils/auth'

export const _import = (path) => { // 路由懒加载
  return () => Promise.resolve(require(`@/views/${path}`).default)
}

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  // 如果是隐藏的菜单, 都是可访问的, 因为隐藏的菜单不会出现在左侧菜单栏, 不可编辑权限
  if (route.hidden) return true
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

// 将从服务器获得的路由表转换为vue - router的路由表
function mapAsyncRoutes(asyncRoutes) {
  return asyncRoutes.map(route => {
    route.component && (route.component = _import(route.component))
    if (route.children) {
      route.children = mapAsyncRoutes(route.children)
    }
    return route
  })
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}

const state = {
  routes: [],
  addRoutes: [],
  asyncRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  generateRoutes({ commit }, roles) {
    return new Promise(resolve => {
      let accessedRoutes
      getInfo(getToken()).then(res => {
        const asyncRoutes = res.data.routes
        // console.log(res.data)
        if (roles.includes('admin')) {
          accessedRoutes = mapAsyncRoutes(asyncRoutes).concat(generalRoutes)
        } else {
          accessedRoutes = mapAsyncRoutes(filterAsyncRoutes(asyncRoutes, roles)).concat(generalRoutes)
        }
        commit('SET_ROUTES', accessedRoutes)
        resolve(accessedRoutes)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
