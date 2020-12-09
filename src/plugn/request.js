import axios from 'axios';

const instance = axios.create({
  baseURL: "http://123.207.32.32:9001/",
  timeout: 5000
})


instance.interceptors.response.use(res => {
  return res.data
})

export default instance;