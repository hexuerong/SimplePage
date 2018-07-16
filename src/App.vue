<template>
  <div id="app1">
    <img src="./assets/logo.png">
    <div class="list-group">
      <router-link to="/">Go to HelloWorld</router-link>
      <router-link to="/TestRouter">Go to TestRouter</router-link>
    </div>
    <router-view/>
    <firstcomponent></firstcomponent>
  </div>
</template>

<script type="text/ecmascript-6">
import firstcomponent from './components/nav'
export default {
  name: 'App',
  components: { firstcomponent }
}
</script>

<style lang="less" scoped>
#app1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .list-group{
    background-color: #cccccc;
    color: red;
  }
}
</style>
