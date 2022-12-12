type Empty = string | null;
function EMPTY_VALIDATOR_FN(rule:any, value:Empty, callback:any){
    if(isEmpty(value)) return callback(new Error("请输入"))
    callback();
}

function NUMBER_STRING_VALIDATOR_FN(rule:any,value:string,callback:any){
    if(!reg_userName.test(value)) return callback(new Error("请输入数字、大小写字符、下划线"))
    callback();
}


const reg_userName = /^[a-zA-Z0-9_]+$/;



export const EMPTY_VALIDATOR =  {validator: EMPTY_VALIDATOR_FN, trigger: "change"}
export const REQUIRE_VALIDATOR = {require: true,message:"该项不能为空",trigger: "change"}
export const NUMSTR_VALIDATOR = {validator: NUMBER_STRING_VALIDATOR_FN, trigger: "change"}

function isEmpty(value:Empty){
    return value === '' || value === null;
}