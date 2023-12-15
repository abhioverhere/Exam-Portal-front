import axios from 'axios';
const axiosInst=axios.create({
    baseURL:''
    // baseURL:'http://localhost:4000'
})
axiosInst.interceptors.request.use((config)=>{
    const accessToken=sessionStorage.getItem("userToken");
    const accessAdminToken=sessionStorage.getItem("adminToken");
    if(accessToken){
        if(config) config.headers.token=accessToken;
    }else if(accessAdminToken){
        if(config) config.headers.token=accessAdminToken;
    }
    return config;
},
    (error)=>{
        return Promise.reject(error);        
    }
)
export default axiosInst