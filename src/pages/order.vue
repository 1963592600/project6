<template>

  <div class="order">
    <headertop >
      <a class="header_title" slot="title">
        <span class="header_title_text">订单列表</span>
      </a>
    </headertop>
    <div class="order_no_login">
        <img src="">
        <h3>登录后查看外卖订单</h3>
        <button>立即登陆</button>
    </div>
  </div>
<!--省略js与style-->

</template>

<script>
import headertop from '../components/headertop/headertop'
    export default {
        components:{
          headertop
        }
    }
</script>

<style scoped>
.order{
    width: 100%;
    height: 100%;
    background: #fff;
}


.order_no_login{
    text-align: center;
}

h3{
    margin: 10px;
}

button{
    background: #02a774;
    color: white;
    border: 0;
    border-radius: 2px;
    width: 20%;
    height: 35px;
    outline: none;
}
</style>