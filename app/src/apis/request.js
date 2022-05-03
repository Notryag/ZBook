import axios from 'axios';

import { BASE_URL, TIMEOUT} from './config';
import { getToken } from "@/utils";

const instance = axios.create({
  baseURL:BASE_URL,
  timeout:TIMEOUT
})

//添加拦截
instance.interceptors.request.use(config => {
  const token = getToken()
  if (token) {
    config.headers.common['Authorization'] = token
  }
  return config
},error => {

})

instance.interceptors.response.use(res => {
  return res.data
},error => {
  return error;
})


export default instance