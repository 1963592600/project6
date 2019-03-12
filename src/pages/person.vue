<template>
  <div class="person">
      <headertop>
        <a class="header_title" slot="title">
          <span class="header_title_text">我的</span>
        </a>
      </headertop>
      <section class="profile-number">
        <router-link to="/login" class="profile-link clear">
          <div class="profile_image">
            <i class="iconfont icon-morentouxiang"></i>
          </div>
          <div class="user-info">
            <div>
              <p class="user-info-top">登录/注册</p>
              <p>
               <span class="user-icon">
                <i class="iconfont icon-Phoneshouji"></i>
               </span>
               <span class="icon-mobile-number">暂无绑定手机号</span>
              </p>
            </div>

          </div>
          <span class="arrow">
            <i class="iconfont icon-enter"></i>
          </span>
        </router-link>
      </section>
      <section class="profile_info_data border-1px">
        <ul class="info_data_list clear">
          <a href="javascript:" class="info_data_link">
            <span class="info_data_top"><span>0.00</span>元</span>
            <div class="info_data_bottom">我的余额</div>
          </a>
          <a href="javascript:" class="info_data_link">
            <span class="info_data_top"><span>0</span>个</span>
            <div class="info_data_bottom">我的优惠</div>
          </a>
          <a href="javascript:" class="info_data_link">
            <span class="info_data_top"><span>0</span>分</span>
            <div class="info_data_bottom">我的积分</div>
          </a>
        </ul>
      </section>
      <section class="profile_my_order border-1px">
        <!-- 我的订单 -->
        <a href='javascript:' class="my_order clear">
          <span>
            <i class="iconfont icon-other"></i>
          </span>
          <div class="my_order_div">
            <span>我的订单</span>
            
          </div>
          <span class="my_order_icon">
              <i class="iconfont icon-enter"></i>
            </span>
        </a>
        <!-- 积分商城 -->
        <a href='javascript:' class="my_order clear">
          <span>
            <i class="iconfont icon-diamond"></i>
          </span>
          <div class="my_order_div">
            <span>积分商城</span>
            
          </div>
          <span class="my_order_icon">
              <i class="iconfont icon-enter"></i>
          </span>
        </a>
        <!-- Mint外卖会员卡 -->
        <a href="javascript:" class="my_order clear">
          <span>
            <i class="iconfont icon-select"></i>
          </span>
          <div class="my_order_div">
            <span>会员卡</span>
            
          </div>
          <span class="my_order_icon">
              <i class="iconfont icon-enter"></i>
          </span>
        </a>
      </section>
      <section class="profile_my_order border-1px">
        <!-- 服务中心 -->
        <a href="javascript:" class="my_order clear">
          <span>
            <i class="iconfont icon-remind_fill"></i>
          </span>
          <div class="my_order_div">
            <span>服务中心</span>
            
          </div>
          <span class="my_order_icon">
              <i class="iconfont icon-enter"></i>
          </span>
        </a>
      </section>
    </section>
  </div>
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
.person{
  width: 100%;
  height: 100%;
  background: #fff;
}
a{
  text-decoration: none;
}

.profile-number{
  background: gainsboro;
  border-top: 1px solid #fff;
  position: relative;
  width: 100%;
  height: 100px;
  line-height: 100px;
}

.profile-link{
  display: block;
  height: 100%;
}

.profile_image, .user-info{
  height: 100%;
  float: left;
}

.arrow{
  float: right;
  color: green
}

.arrow .iconfont{
 font-size: 20px;
 padding: 10px;
}

.info_data_list a:nth-child(2){
  border-left: 1px solid gainsboro;
  border-right: 1px solid gainsboro;
}

.profile_image .iconfont{
font-size: 50px;
color: #fff;

}

.user-info{
  line-height: 30px;
  color: rgb(150, 149, 149);
}

.user-info-top{
  color: #000;
  font-size: 22px;
  padding: 20px 0 0 5px;
}

.user-icon, .icon-mobile-number{
font-size: 12px;
}


.info_data_list{
  border-bottom: 1px solid gainsboro;
  height: 80px;
  line-height: 35px;
}

.info_data_link{
  text-align: center;
  display: block;
  margin-top: 5px;
  height: 65px;
  width: 33%;
  float: left;
}

.info_data_bottom{
  color: #000;
}

.my_order{
  display: block;
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid gainsboro;
  color: #000;
}
.my_order .iconfont{
  color: green;
  font-size: 20px;
}
.my_order_div{
  display: inline-block;
}

.my_order_icon{
  float: right;
  padding: 0 10px;
}

.clear::before,
.clear::after{
  content: '';
  display: block;
  clear: both;
  height: 0;
  line-height: 0;
}
</style>