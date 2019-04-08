import Mock from 'mockjs'

const role_channels = [
  {
    id: '1',
    role_name: '超级管理员',
    channel_name: ['朋友玩', '泛娱', '测试'],
    channel_namelist: ['朋友玩', '泛娱', '测试', 'test1', 'test2', 'test3', 'test4', 'test5'],
    game_package_name: 'package1',
    update_user: 'update_user1',
    timestamp: +Mock.Random.date('T'),
    update_time: +Mock.Random.date('T'),
    description: '朋友玩渠道'
  },
  {
    id: '2',
    role_name: '普通员工',
    channel_name: ['泛娱'],
    channel_namelist: ['朋友玩', '泛娱', '测试', 'test1', 'test2', 'test3', 'test4', 'test5'],
    game_package_name: 'package2',
    update_user: 'update_user2',
    timestamp: +Mock.Random.date('T'),
    update_time: +Mock.Random.date('T'),
    description: '泛娱渠道'
  },
  {
    id: '3',
    role_name: '访客',
    channel_name: ['测试'],
    channel_namelist: ['朋友玩', '泛娱', '测试', 'test1', 'test2', 'test3', 'test4', 'test5'],
    game_package_name: 'package3',
    update_user: 'update_user3',
    timestamp: +Mock.Random.date('T'),
    update_time: +Mock.Random.date('T'),
    description: '测试渠道'
  }
]

export default [
  // get
  {
    url: '/channels',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: role_channels
      }
    }
  },

  // add
  {
    url: '/channel',
    type: 'post',
    response: {
      code: 20000,
      data: {
        key: Mock.mock('@integer(300, 5000)')
      }
    }
  },

  // update
  {
    url: `/channel/[A-Za-z0-9]`,
    type: 'put',
    response: {
      code: 20000,
      data: {
        status: 'success'
      }
    }
  },
  // delete Rolechannels
  {
    url: '/channel/[A-Za-z0-9]',
    type: 'delete',
    response: {
      code: 20000,
      data: {
        status: 'success'
      }
    }
  }
]
