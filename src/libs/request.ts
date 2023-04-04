import Axios from 'axios'

export const baseURL = import.meta.env.VITE_BASE_URL_API

async function authRequestInterceptor(config: any) {
  const _token = JSON.parse(localStorage.getItem('user-token') || 'null')
  // Fix stupid axios typescript
  if (_token && _token !== 'undefined' && config.headers) {
    const token: any = _token
    config.headers.authorization = `Bearer ${token.access_token}`
    config.headers.common['Accept-Language'] = localStorage.getItem('language')
  }
  return config
}

export const request = Axios.create({
  baseURL,
})

request.interceptors.request.use(authRequestInterceptor)
