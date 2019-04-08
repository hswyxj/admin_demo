// Just a mock data

export const constantRoutes = [
  {
    path: '/redirect',
    component: 'layout/Layout',
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: 'views/redirect/index'
      }
    ]
  },
  {
    path: '/login',
    component: 'views/login/index',
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: 'views/login/authredirect',
    hidden: true
  },
  {
    path: '/404',
    component: '/views/errorPage/404',
    hidden: true
  },
  {
    path: '/401',
    component: 'views/errorPage/401',
    hidden: true
  },
  {
    path: '',
    component: 'layout/Layout',
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: 'views/dashboard/index',
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard', noCache: true, affix: true }
      }
    ]
  }
]

export const asyncRoutes = [
  // {
  //   path: '/datecard',
  //   component: 'layout/Layout',
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'datecard',
  //       component: 'views/datecard/datecard',
  //       meta: { title: '卡片展示', icon: 'list' }
  //     }
  //   ]
  // },
  // {
  //   path: '/nested',
  //   component: 'layout/Layout',
  //   redirect: '/nested/menu1/menu1-1',
  //   name: 'Nested',
  //   meta: {
  //     title: '多级菜单',
  //     icon: 'list'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: 'views/nested/menu1/index', // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'menu1' },
  //       redirect: '/nested/menu1/menu1-1',
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: 'views/nested/menu1/menu1-1',
  //           name: 'Menu1-1',
  //           meta: { title: 'menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: 'views/nested/menu1/menu1-2',
  //           name: 'Menu1-2',
  //           redirect: '/nested/menu1/menu1-2/menu1-2-1',
  //           meta: { title: 'menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: 'views/nested/menu1/menu1-2/menu1-2-1',
  //               name: 'Menu1-2-1',
  //               meta: { title: 'menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: 'views/nested/menu1/menu1-2/menu1-2-2',
  //               name: 'Menu1-2-2',
  //               meta: { title: 'menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: 'views/nested/menu1/menu1-3',
  //           name: 'Menu1-3',
  //           meta: { title: 'menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       name: 'Menu2',
  //       component: 'views/nested/menu2/index',
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },
  {
    path: '/example',
    component: 'Layout/Layout',
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '模板例子', icon: 'list' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: 'views/table/inlineEditTable',
        meta: { title: '表内编辑' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: 'views/tree/index',
        meta: { title: '树形模板' }
      },
      {
        path: 'complex-table',
        name: 'complexTable',
        component: 'views/table/complexTable',
        meta: { title: '综合模板' }
      }
    ]
  },
  {
    path: '/form',
    component: 'layout/Layout',
    children: [
      {
        path: 'index',
        name: 'Form',
        component: 'views/form/index',
        meta: { title: '提交模板', icon: 'list' }
      }
    ]
  },
  {
    path: '/permission',
    component: 'layout/Layout',
    redirect: '/permission/index',
    meta: {
      title: '权限管理',
      icon: 'list',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'role',
        component: 'views/permission/role',
        name: 'RolePermission',
        meta: {
          title: '角色管理',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'role_channel',
        component: 'views/permission/role_channel',
        name: 'UserchannelPermission',
        meta: {
          title: '渠道权限',
          // if do not set roles, means: this page does not require permission
          roles: ['admin']
        }
      },
      {
        path: 'user_role',
        component: 'views/permission/user_role',
        name: 'UserRolePermission',
        meta: {
          title: '用户管理',
          roles: ['admin']
        }
      }
    ]
  }
]
