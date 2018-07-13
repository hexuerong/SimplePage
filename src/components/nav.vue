<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
        <li v-for="item in navList" v-bind:data-id="item.id">{{item.text}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'navList',
  data () {
    return {
      msg: 'test',
      navList: [{id: '0', text: '菜单1'}, {id: '1', text: '菜单2'}]
    }
  }
}
</script>

<style scoped>
h1{
    background-color: aquamarine;
}
ul,ul>li{
    list-style: none;
}
li{
    float: left;
    background-color: gray;
}
</style>
