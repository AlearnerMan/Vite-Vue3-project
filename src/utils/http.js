import axios from "axios";
import {useMsgBox,Message} from "element3";
import store from "@/store";
import { getToken } from "@/utils/auth";
import { BASEURL } from "@/utils/constants.js";
const service = axios.create({
    baseURL: BASEURL,
    timeout:5000,
});

service.interceptors.request.use(
    config => {
        if(store.getters.token) {
            config.headers["x-Token"] = getToken();
        }
        return config;
    },
    error =>{
        console.log(error);
        return Promise.reject(error);
    }
)

service.interceptors.response.use(
    response=>{
        const res = response.data;
        if(res.code !== 20000){
            console.log("接口信息报错",res.message);
            return Promise.reject(new Error(res.message || "Error"))
        }
        return res;
    },
    error =>{
        console.log("接口信息报错" + error);
        return Promise.reject(error);
    }
)

export default service;