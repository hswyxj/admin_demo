/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const tableRouter =
{
  path: '/example',
  component: Layout,
  redirect: '/example/table',
  name: 'Example',
  meta: { title: '模板例子', icon: 'list' },
  children: [
    {
      path: 'table',
      name: 'Table',
      component: () => import('@/views/table/inlineEditTable'),
      meta: { title: '表内编辑' }
    },
    {
      path: 'tree',
      name: 'Tree',
      component: () => import('@/views/tree/index'),
      meta: { title: '树形模板' }
    },
    {
      path: 'complex-table',
      name: 'complexTable',
      component: () => import('@/views/table/complexTable'),
      meta: { title: '综合模板' }
    }
  ]
}

export default tableRouter
