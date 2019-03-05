<template>
<div class="home">
  <!-- <header class="home-header">
    <span class="home-search">
      <i class="iconfont icon-search"></i>
    </span>
    <span class="home-title">
      <span class="title-text">这里是地址搜索</span>
    </span>
    <span class="home-login">
      <span class="login-text">登录|注册</span>
    </span>
  </header> -->
  <headertop class="home-header">
    <i slot='search' class="iconfont icon-search"></i>
    
    <span class="title" slot="title">这里是地址搜索</span>
    
    <span slot="login" class="login-text">登录|注册</span>
    
  </headertop>
  <!--首页导航轮播-->
  <nav class="home-nav">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide ">
          <a href="javascript:" class="link_to_food item">
            <div class="food_container">
              <img src="../../static/image/home-nav-1.png">
            </div>
            <span>甜品饮品</span>
          </a>
          <a href="javascript:" class="link_to_food item">
            <div class="food_container">
              <img src="../../static/image/home-nav-1.png">
            </div>
            <span>商超便利</span>
          </a>
          <a href="javascript:" class="link_to_food item">
            <div class="food_container">
              <img src="../../static/image/home-nav-1.png">
            </div>
            <span>甜品饮品</span>
          </a>
          <a href="javascript:" class="link_to_food item">
            <div class="food_container">
              <img src="../../static/image/home-nav-1.png">
            </div>
            <span>商超便利</span>
          </a>
          <a href="javascript:" class="link_to_food item">
            <div class="food_container">
              <img src="../../static/image/home-nav-2.png">
            </div>
            <span>甜品饮品</span>
          </a>
          <a href="javascript:" class="link_to_food item">
            <div class="food_container">
              <img src="../../static/image/home-nav-2.png">
            </div>
            <span>商超便利</span>
          </a>
          <a href="javascript:" class="link_to_food item">
            <div class="food_container">
              <img src="../../static/image/home-nav-2.png">
            </div>
            <span>甜品饮品</span>
          </a>
          <a href="javascript:" class="link_to_food item">
            <div class="food_container">
              <img src="../../static/image/home-nav-2.png">
            </div>
            <span>商超便利</span>
          </a>
          <!--下面的图片省略-->
        </div>
        <div class="swiper-slide ">
          <a href="javascript:" class="link_to_food item">
            <div class="food_container">
              <img src="../../static/image/home-nav-3.png">
            </div>
            <span>甜品饮品</span>
          </a>
          <a href="javascript:" class="link_to_food item">
            <div class="food_container">
              <img src="../../static/image/home-nav-3.png">
            </div>
            <span>商超便利</span>
          </a>
          <a href="javascript:" class="link_to_food item">
            <div class="food_container">
              <img src="../../static/image/home-nav-3.png">
            </div>
            <span>甜品饮品</span>
          </a>
          <a href="javascript:" class="link_to_food item">
            <div class="food_container">
              <img src="../../static/image/home-nav-3.png">
            </div>
            <span>商超便利</span>
          </a>
          <a href="javascript:" class="link_to_food item">
            <div class="food_container">
              <img src="../../static/image/home-nav-4.png">
            </div>
            <span>甜品饮品</span>
          </a>
          <a href="javascript:" class="link_to_food item">
            <div class="food_container">
              <img src="../../static/image/home-nav-4.png">
            </div>
            <span>商超便利</span>
          </a>
          <a href="javascript:" class="link_to_food item">
            <div class="food_container">
              <img src="../../static/image/home-nav-4.png">
            </div>
            <span>甜品饮品</span>
          </a>
          <a href="javascript:" class="link_to_food item">
            <div class="food_container">
              <img src="../../static/image/home-nav-4.png">
            </div>
            <span>商超便利</span>
          </a>
          <!--同样省略-->
        </div>
      </div>
      <!-- 轮播图页码 -->
      <div class="swiper-pagination"></div>
    </div>
  </nav>
  <!--首页附近商家列表-->
  <div class="shop_header">
      <i class="iconfont icon-liebiaoshitucaidan"></i>
      <span class="shop_header_title">附近商家</span>
  </div>
  <shoplist></shoplist>
</div>
</template>

<script>
//  import '../../static/css/swiper.min.css'
//  import '../../static/js/swiper.min.js'
import headertop from '../components/headertop/headertop'
import shoplist from '../components/shoplist/shoplist'
    export default {
        components:{
          headertop,
          shoplist
        },
        mounted() {
          new Swiper('.swiper-container', {
          direction:'horizontal',
          // direction: 'vertical',
          pagination: {
          el: '.swiper-pagination'
           }
            })
        },
    }
</script>

<style  scoped>
.home{
    width: 100%;
    height: 100%;
    position: relative;
}

.home-header{
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content:space-between;
  align-items:center;
}

.iconfont{
    font-size: 25px;
}



.home-nav{
    position: fixed;
    top: 45px;
    color: #000;
    width: 100%;
    height: 250px;
    background: #fff
}

.item{
  padding: 10px 5px 0 8px;
  text-decoration: none;
  text-align: center;
  color: #000;
  float: left;
}

.swiper-container{
  width: 375px;
 
}

.swiper-pagination{
  position: relative;
  bottom: 2px;
}

.shop_header{
  width: 100%;
  height: 25px;
  top: 290px;
  padding: 5px;
  position: fixed;
  background: #fff;
  border-top: 1px solid rgb(192, 192, 192)
}

.shop_title{
  float: left;
  font-size: 22px;
  color: #000;
}

.shop_header .iconfont{
  line-height: 22px;
  font-size: 20px;
}

.shop_header_title{
  font-size: 20px;
}



</style>