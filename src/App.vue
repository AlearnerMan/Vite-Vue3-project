<script setup lang="ts">
import Count from "./components/Count.vue";
</script>

<template>
 
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>



  <!-- <div>
    <h1>路由跳转测试</h1>
    <router-link to="/home">Home Page</router-link>
    <router-link to="/about">About Page</router-link>
  </div> -->
  <!-- <count></count> -->
</template>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
.el-header,
.el-footer{
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
}
.el-aside{
  background-color: #d3dce6;
  color:#333;
}
.el-main{
  background-color: #e9eef3;
  color:#333;
}
body > .el-contanier{
  margin-bottom: 40px;
}
</style>
