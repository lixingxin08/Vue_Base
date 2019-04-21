import axios from 'axios'
import {domain} from './api_config'
axios.defaults.baseURL=domain;
//解决跨域
axios.defaults.withCredentials=true;
export default axios;