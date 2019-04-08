import request from '@/utils/request'

export function getRolechannels() {
  return request({
    url: '/channels',
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

export function updateRolechannels(id, data) {
  return request({
    url: `/channel/${id}`,
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

