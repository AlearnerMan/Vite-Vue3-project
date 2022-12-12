import { ref,computed,Ref } from "vue";
interface TodoList {
    title: string,
    done: boolean
}
export function userTodo(){
    let title = ref<string>("");
    let color = ref<string>("blue");
    let todos:Ref<TodoList[]> = ref<[TodoList]>([{title:"学习Vue",done:false}]);
    function addTodo(){
        todos.value.push({
            title:title.value,
            done:false
        })
        title.value = "";
        color.value = Math.random()*10 > 5 ? "blue" : "red"; 
    }
    function clear(){
        todos.value = todos.value.filter(v=>!v.done)
    }
    let active = computed(()=>{
        return todos.value.filter(v=>!v.done).length;
    })
    
    let all = computed(()=>todos.value.length);
    
    let allDone = computed({
        get: function(){
            return active.value === 0
        },
        set:function(value:boolean){
            todos.value.forEach((todo)=>{
                todo.done = value;
            })
        }
    })
    return { color, title, todos, addTodo,clear,active,all,allDone}
}