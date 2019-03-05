<template>
<div class="search">
 <section class="search">
    <headertop>
      <a class="header_title" slot="title">
        <span class="header_title_text">搜索</span>
      </a>
    </headertop>
    <form class="search_form clear" action="#">
      <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input">
      <input type="submit" class="search_submit">
    </form>
 </section>
<!--省略js与style-->
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

.search{
    background: white;
    height: 100%;
    width: 100%;
}

.search_form{
    text-align: center;
    padding: 10px;
    line-height: 57px;
}

.search_input{
border: 0;
background: #f5f5f5;
width: 78%;
height: 35px;
float: left;
border-radius: 2px;
outline: none;
}
.search_submit{
    background: #02a774;
    color: white;
    border: 0;
    border-radius: 2px;
    width: 20%;
    height: 35px;
    float:right;
    outline: none;
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