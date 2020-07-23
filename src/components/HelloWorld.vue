<template>
  <div class="hello">
     Vuebase
    <a href="http://baidu.com">baidu</a>
  </div>
</template>

<script scope>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{text-align: left;
width: 1.333333rem;
height: 1.333333rem;
border: 1px solid #000;
font-size: .24rem}
</style>
