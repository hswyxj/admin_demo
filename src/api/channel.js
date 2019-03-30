import request from '@/utils/request'

export function getRolechannellist(query) {
  return request({
    url: '/channel/list',
    method: 'get',
    params: query
  })
}

export function getRolechannels() {
  return request({
    url: '/channel',
    method: 'get'
  })
}

export function createRolechannel(data) {
  return request({
    url: '/channel',
    method: 'post',
    params: { data }
  })
}

export function updateRolechannels(key, data) {
  return request({
    url: `/channel/${key}`,
    method: 'put',
    params: { data }
  })
}

export function deleteRolechannels(id) {
  return request({
    url: `/channel/${id}`,
    method: 'delete'
  })
}

