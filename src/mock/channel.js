import Mock from 'mockjs'

const role_channels = [
  {
    id: '1',
    role_name: '超级管理员',
    channel_name: ['朋友玩', '泛娱', '测试'],
    channel_namelist: [
      { id: '1', name: '朋友玩' },
      { id: '2', name: '泛娱' },
      { id: '3', name: '测试' },
      { id: '4', name: 'test1' },
      { id: '5', name: 'test2' },
      { id: '6', name: 'test3' },
      { id: '7', name: 'test4' },
      { id: '8', name: 'test5' }
    ],
    game_package_name: 'package1',
    update_user: '@cname',
    timestamp: +Mock.Random.date('T'),
    display_time: '@datetime',
    description: '朋友玩渠道'
  },
  {
    id: '2',
    role_name: '普通员工',
    channel_name: ['泛娱'],
    channel_namelist: [
      { id: '1', name: '朋友玩' },
      { id: '2', name: '泛娱' },
      { id: '3', name: '测试' },
      { id: '4', name: 'test1' },
      { id: '5', name: 'test2' },
      { id: '6', name: 'test3' },
      { id: '7', name: 'test4' },
      { id: '8', name: 'test5' }
    ],
    game_package_name: 'package2',
    update_user: '@cname',
    timestamp: +Mock.Random.date('T'),
    display_time: '@datetime',
    description: '泛娱渠道'
  },
  {
    id: '3',
    role_name: '访客',
    channel_name: ['测试'],
    channel_namelist: [
      { id: '1', name: '朋友玩' },
      { id: '2', name: '泛娱' },
      { id: '3', name: '测试' },
      { id: '4', name: 'test1' },
      { id: '5', name: 'test2' },
      { id: '6', name: 'test3' },
      { id: '7', name: 'test4' },
      { id: '8', name: 'test5' }
    ],
    game_package_name: 'package3',
    update_user: '@cname',
    timestamp: +Mock.Random.date('T'),
    display_time: '@datetime',
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
