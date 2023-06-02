import axios from 'axios'

const baseURL = 'http://localhost:3000'

const axiosInstance = axios.create({
  baseURL,
  headers: {}
})

axiosInstance.interceptors.response.use(async (response) => await Promise.resolve(response),
  async (error) => {
    // if (error?.response?.status === 401) {
    //     localStorage.clear()
    //     window.open(Base_URL,'_self')
    //   }
    return await Promise.reject(error)
  })

axiosInstance
  .interceptors.request.use((config) => {
    // if (!config.headers.Authorization) {
    //     config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    //   }
    config.headers.Authorization = null
    return config
  }, async error => await Promise.reject(error)
  )

export default axiosInstance
