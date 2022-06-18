// 员工相关的接口
import request from '@/utils/request'

// 获取员工简单信息列表
export const reqGetSimpleList = () => {
  return request.get('/sys/user/simple')
}

// 获取员工列表
export const reqGetEmployeesList = (page, size) => request.get('/sys/user', {
  params: { page, size }
})

// 新增员工
export const reqAddEmployee = data => request.post('/sys/user', data)

// 删除员工
export function reqDelEmployee(id) {
  return request({
    method: 'delete',
    url: `/sys/user/${id}`
  })
}
