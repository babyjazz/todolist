import { api } from './api-creator'

api.interceptors.request.use((config) => {
  return {
    ...config,
    headers: {
      'Content-Type': 'application/json',
      ...config.headers,
    },
  }
})

function ApiError(error) {
  const { response } = error
  this.response = response
}

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    const errorObj = new ApiError(error)
    // NOTE can implement refresh token here when statusCode and message means to refresh token

    return Promise.reject(errorObj)
  },
)
