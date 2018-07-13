<template>
    <div class="testRouter">
        <p>这是一个testRouter</p>
        <span>{{ msg }}</span>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '这是一条测试信息'
    }
  }
}
</script>

<style scoped>
.testRouter{
    position: relative;
    width: 100%;
    height: 100px;
    background-color: cadetblue;
}
p{
    font-weight: 900;
}
</style>
