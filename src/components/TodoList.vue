<template>
    <div>
        <h1>你知道v-bind可以绑定css了吗</h1>
        <input type="text" v-model="title" @keydown.enter="addTodo"/>
        <button v-if="active < all" @click="clear">清理</button>
        <ul v-if="todos.length">
            <li v-for="todo in todos">
                <input type="checkbox" v-model="todo.done"/>
                <span :class="{done:todo.done}">{{todo.title}}</span>
            </li>
        </ul>
        <div v-else>暂无数据</div>
        <div>
            全选<input type="checkbox" v-model="allDone"/>
            <span>{{active}} / {{all}}</span>
        </div>

    </div>
</template>
<script setup>
import {userTodo} from "../utils/todoList";

let { color, title, todos, addTodo,clear,active,all,allDone} = userTodo();




</script>
<style scoped>
h1{
    color: v-bind(color);
}
</style>