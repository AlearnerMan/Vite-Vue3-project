<template>
<el-main>
    <el-row :gutter="20">
         <el-col :span="8" :offset="8">
            <el-form
                :model="formData"
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="form-main"
            >
                <el-form-item label="用户名" prop="userName">
                    <el-input type="text" v-model="formData.userName"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="passwd">
                    <el-input type="text" v-model="formData.passwd"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-button type="primary" @click="validatorForm(ruleForm)">登陆</el-button>
                    <el-button>取消</el-button>
                </el-form-item>

            </el-form>
         </el-col>
    </el-row>
   
</el-main>
</template>
<script setup lang="ts">
import { EMPTY_VALIDATOR,NUMSTR_VALIDATOR,REQUIRE_VALIDATOR } from "../utils/validate";
import {ref,reactive} from "vue";
import type {FormInstance} from "element-plus"
import {useStore} from "vuex";
import { userTodo } from "../utils/todoList";
import {useRoute,useRouter} from "vue-router"
interface Form_data {
    userName?: string,
    passwd?:string
}
let formData:Form_data = reactive({
    userName: "",
    passwd: ""
});

let rules = reactive({
    userName: [
        EMPTY_VALIDATOR,
        NUMSTR_VALIDATOR,
        {min:1,max:15,message:"请输入1-15个字符以内的数据～",trigger:"blur"}
    ],
    passwd: [
        REQUIRE_VALIDATOR,
        NUMSTR_VALIDATOR,
        {min:6,max:15,message:"请输入6-15个字符以内的数据～",trigger:"blur"}
    ]
});

const ruleForm = ref<FormInstance>();
function validatorForm(formEL:FormInstance | undefined){
    if(!formEL) return;
    formEL.validate(valid=>{
        if(valid){
            console.log(valid,formData.userName,'valid')
            checkLogin();
        }else {
            console.log(valid,"isValid")
        }
    })
}

const store = useStore();
const router = useRouter();
const route = useRoute();
async function checkLogin(){
    const data = await store.dispatch("login",{...formData}).catch(e=>{});
    if(data){
        router.push({
            path:"/"
        })
    }
}

</script>
