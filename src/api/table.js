import request from '@/utils/request'

export function getTableList(query) {
  return request({
    url: '/table/list',
    method: 'get',
    params: query
  })
}

export function fetchTable(id) {
  return request({
    url: '/table/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/table/pv',
    method: 'get',
    params: { pv }
  })
}

export function createTable(data) {
  return request({
    url: '/table/create',
    method: 'post',
    data
  })
}

export function updateTable(data) {
  return request({
    url: '/table/update',
    method: 'post',
    data
  })
}

