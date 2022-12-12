import {createStore} from "vuex";

export const store = createStore({
    state(){
        return {
            count: 0,
            token:""
        }
    },
    getters:{
        token(state){
            return state.token;
        }
    },
    mutations:{
        addCount(state){
            state.count++;
        },
        changeToken(state,data){
            console.log(data,"mutation data")
            state.token = data;
        }
    },
    actions:{
        login({commit},{userName='',passwd=""}){
            if(!userName || !passwd) return false;
            if(userName === "admin" && passwd === "admin_123") {
                // 生成一个token 正常是下发服务端 来获取token的
                commit("changeToken","admin_123")
                return true;
            }
            return false
        }
    }
})

export function checkIsTokenOk(){
    return !!store.state.token;
}