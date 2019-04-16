/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/index'

const tableRouter =
{
  path: '/example',
  component: Layout,
  redirect: '/example/table',
  name: 'Example',
  hidden: false,
  meta: { title: '模板例子', icon: 'list' },
  children: [
    {
      path: 'table',
      name: 'Table',
      hidden: false,
      component: () => import('@/views/table/inlineEditTable'),
      meta: { title: '表内编辑' }
    },
    {
      path: 'tree',
      name: 'Tree',
      hidden: false,
      component: () => import('@/views/tree/index'),
      meta: { title: '树形模板' }
    },
    {
      path: 'complex-table',
      name: 'complexTable',
      hidden: false,
      component: () => import('@/views/table/complexTable'),
      meta: { title: '综合模板' }
    }
  ]
}

export default tableRouter
