<template>
  <div id="app">
<!--    <router-view v-if="$route.path === '/Login' || $route.path === '/Register'"/>-->
    <el-container>
      <el-header>
        <Headerinformation></Headerinformation>
      </el-header>
      <el-container>
        <el-aside>
          <Sidebar></Sidebar>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Home from "./views/Home";
// import Login from "./views/Login";
import Headerinformation from "@/components/Headerinformation.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "App",
  components: {
    Home,
    // Login,
    Headerinformation,
    Sidebar
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-header, .el-footer {
  background-color: #2e5e85;
}
.el-aside {
  text-align: left;
  height: 700px;
  width: 200px !important;
  background-color: #344054;
}
.el-main {
  background-color: #e9eef3;
}
body > .el-container {
  margin-bottom: 40px;
}
</style>
