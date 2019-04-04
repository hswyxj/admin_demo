import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const List = []
const count = 1000
const baseContent = '<p>我是测试数据我是测试数据</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'
const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment', // @占位符
    timestamp: +Mock.Random.date('T'),
    author: '@cname',
    reviewer: '@cname',
    title: '@ctitle(5, 10)',
    content_short: '我是测试数据',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    importance: '@integer(1, 3)',
    // 'type|1': ['CN', 'US', 'JP', 'EU'],
    // 'status|1': ['published', 'draft', 'deleted'], // 从属性值 status的array 中随机选取 1 个元素，作为最终值。
    'status|1': ['published', 'draft'], // 从属性值 status的array 中随机选取 1 个元素，作为最终值。
    display_time: '@datetime',
    comment_disabled: true,
    pageviews: '@integer(300, 5000)',
    image_uri,
    platforms: ['a-platform']
  }))
}

export default {
  getList: config => {
    // const { importance, type, status, title, page = 1, limit = 20, sort } = param2Obj(config.url)

    // 变量已经存在了，但是没有值，比如importance1, status1, title1，所以会输出undefined,所以不能用let
    // 在`let`和`const`之间，建议优先使用`const`，尤其是在全局环境，不应该设置变量，只应设置常量。
    // 对于复合类型的变量，变量名不指向数据，而是指向数据所在的地址。const命令只是保证变量名指向的地址不变，并不保证该地址的数据不变
    const { importance, status, title, page = 1, limit = 20, sort } = param2Obj(config.url)

    // // 例子
    // const { author, reviewer, id } = { reviewer: '123', id: 'abc' }
    // console.log(author)
    // console.log(reviewer)
    // console.log(id)

    let mockList = List.filter(item => {
      if (importance && item.importance !== +importance) return false
      if (status && item.status !== status) return false
      if (title && item.title.indexOf(title) < 0) return false
      return true
    })

    if (sort === '-id') {
      mockList = mockList.reverse()
    }

    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

    return {
      mockList: mockList,
      total: mockList.length,
      items: pageList

    }
  },
  getPv: () => ({
    pvData: [{ key: 'PC', pv: 1024 }, { key: 'mobile', pv: 1024 }, { key: 'ios', pv: 1024 }, { key: 'android', pv: 1024 }]
  }),
  getArticle: (config) => {
    const { id } = param2Obj(config.url)
    for (const article of List) {
      if (article.id === +id) {
        return article
      }
    }
  },
  createArticle: () => ({
    data: 'success'
  }),
  updateArticle: () => ({
    data: 'success'
  }),
  batchremoveArticle: () => ({
    data: 'success'
  })
}
