import Axios from 'axios'

// export const baseURL = 'http://127.0.0.1:8000/api/'
export const baseURL = import.meta.env.VITE_BASE_URL_API
// const refetchTokenURL = ${baseURL}/${V1}/user/refresh-token

async function authRequestInterceptor(config: any) {
  const _token = await localStorage.getItem('user-token')
  // Fix stupid axios typescript
  if (_token && _token !== 'undefined' && config.headers) {
    const token: any = _token
    config.headers.authorization = `Bearer ${token.access_token}`
    config.headers.common['Accept-Language'] = localStorage.getItem('language')

    // console.log(`Bearer ${token}`)
  }
  return config
}

export const request = Axios.create({
  baseURL,
})

request.interceptors.request.use(authRequestInterceptor)
