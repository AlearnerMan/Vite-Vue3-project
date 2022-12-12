<template>
    <div>
        <h1>count使用vuex中的数据来操作</h1>
        <h2 @click="addCount">{{count}}</h2>
    </div>
</template>
<script setup>
import { computed } from "vue";
import {useStore} from "vuex";
const store = useStore();
const count = computed(()=>store.state.count );
function addCount (){
    store.commit("addCount");
}
</script>