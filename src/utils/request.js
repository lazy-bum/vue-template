import axios from 'axios'
import { ElMessage } from 'element-plus'
import { env } from '@/config/env'
import website from '@/config/website'

const service = axios.create({
  baseURL: website.baseUrl,
})

service.interceptors.request.use(
  config => {
    if (env.DEV) {
      const cookies = document.cookie.split('; ').reduce((count, ele) => {
        const item = ele.split('=')
        count[item[0]] = item[1]
        return count
      }, {})
      config.headers['x-csrf-token'] = cookies.csrfToken
    }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.status !== 200) {
      ElMessage.error(res.message || 'Error')
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error)
    ElMessage.error(res.message || 'Error')
    return Promise.reject(error)
  }
)

export default service
