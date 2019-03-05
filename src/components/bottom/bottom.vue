<template>
<div class="app">

     <div class="item " :class="{active : $route.path ==='/home' }" @click="goto('home')">
        <span class="icon">
          <i class="iconfont icon-homepage"></i>
       </span>
       <div>主页</div>
     </div>

     <div class="item" :class="{active : $route.path ==='/search'}" @click="goto('search')">
        <span class="icon">
          <i class="iconfont icon-search"></i>
       </span>
       <div>搜索</div>
     </div>

     <div class="item" :class="{active : $route.path ==='/order'}" @click="goto('order')">
        <span class="icon">
          <i class="iconfont icon-publishgoods_fill"></i>
       </span>
       <div>购物车</div>
     </div>

     <div class="item" :class="{active : $route.path ==='/person'}" @click="goto('person')">
       <span class="icon">
          <i class="iconfont icon-people"></i>
       </span>      
       <div>我的</div>
     </div>

  </div>
</template>

<script>
export default {
  name: 'bottom',
  data () {
    return {
      
    }
  },
  methods: {
    goto(path){
        this.$router.replace(path)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: fixed;
  width: 100%;
  height: 65px;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content:space-around;
}

.item{
  display: inline-block;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  width: 80px;
}

.item div{
  font-size: 16px;
}

span{
  margin-top: 2px;
  margin-bottom: 2px;
}

.iconfont{
  font-size: 30px;
}

.active{
  color: #02a774;
}
</style>
