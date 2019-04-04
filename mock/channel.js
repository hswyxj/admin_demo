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

export default {
  getRolechannels() {
    return role_channels
  },
  addRolechannels() {
    return Mock.mock('@integer(300, 5000)')
  },
  updateRolechannels() {
    const res = {
      data: 'success'
    }
    return res
  },
  deleteRolechannels() {
    const res = {
      data: 'success'
    }
    return res
  }
}
