import axios from 'axios'

const api = axios.create({
  baseURL: '/docker_image_builder',
  timeout: 1000 * 60,
  withCredentials: true
})

export default api