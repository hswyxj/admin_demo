// Just a mock data

export const constantRoutes = [
  {
    path: '/dashboard',
    component: 'layout/index',
    redirect: '/dashboard/index',
    children: [
      {
        path: 'index',
        component: 'views/dashboard/index',
        name: '首页',
        meta: { title: '首页', icon: 'dashboard', noCache: true, affix: true }
      }
    ]
  }
]

export const asyncRoutes = [
  {
    path: '/datecard',
    component: 'layout/index',
    children: [
      {
        path: 'index',
        name: 'datecard',
        component: 'datecard/datecard',
        meta: { title: '卡片展示', icon: 'list' }
      }
    ]
  },
  {
    path: '/iphone',
    component: 'layout/index',
    children: [
      {
        path: 'index',
        name: 'iphone',
        component: 'iphone/iphone',
        meta: { title: '手机模型', icon: 'list' }
      }
    ]
  },
  {
    path: '/nested',
    component: 'layout/index',
    name: 'Nested',
    redirect: '/nested/menu1/menu1-1',
    meta: {
      title: '多级菜单',
      icon: 'list'
    },
    children: [
      {
        path: 'menu1',
        component: 'nested/menu1', // Parent router-view
        name: 'Menu1',
        meta: { title: 'menu1' },
        redirect: '/nested/menu1/menu1-1',
        children: [
          {
            path: 'menu1-1',
            component: 'nested/menu1/menu1-1',
            name: 'Menu1-1',
            meta: { title: 'menu1-1' }
          },
          {
            path: 'menu1-2',
            component: 'nested/menu1/menu1-2',
            name: 'Menu1-2',
            redirect: '/nested/menu1/menu1-2/menu1-2-1',
            meta: { title: 'menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: 'nested/menu1/menu1-2/menu1-2-1',
                name: 'Menu1-2-1',
                meta: { title: 'menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: 'nested/menu1/menu1-2/menu1-2-2',
                name: 'Menu1-2-2',
                meta: { title: 'menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: 'menu1/menu1-3',
            name: 'Menu1-3',
            meta: { title: 'menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        name: 'Menu2',
        component: 'nested/menu2/index',
        meta: { title: 'menu2' }
      }
    ]
  },
  {
    path: '/table',
    component: 'layout/index',
    name: 'table',
    redirect: '/table/complex-table',
    meta: { title: '模板例子', icon: 'list' },
    children: [
      {
        path: 'complex-table',
        name: 'complexTable',
        component: 'table/complexTable',
        meta: { title: '综合模板' }
      },
      {
        path: 'table',
        name: 'Table',
        component: 'table/inlineEditTable',
        meta: { title: '表内编辑' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: 'tree/index',
        meta: { title: '树形模板' }
      }
    ]
  },
  {
    path: '/permission',
    component: 'layout/index',
    name: 'permission',
    redirect: '/permission/role',
    meta: {
      title: '权限管理',
      icon: 'list',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'role',
        component: 'permission/role',
        name: 'RolePermission',
        meta: {
          title: '角色管理',
          roles: ['admin', 'editor'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'user_role',
        component: 'permission/user_role',
        name: 'UserRolePermission',
        meta: {
          title: '用户管理',
          roles: ['admin', 'editor']
        }
      },
      {
        path: 'role_channel',
        component: 'permission/role_channel',
        name: 'UserchannelPermission',
        meta: {
          title: '渠道权限',
          // if do not set roles, means: this page does not require permission
          roles: ['admin', 'editor']
        }
      },
      {
        path: 'role_data',
        component: 'permission/role_data',
        name: 'RoledataPermission',
        meta: {
          title: '数据权限',
          roles: ['admin']
        }
      }
    ]
  }
]
