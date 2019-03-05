<template>
<div class="header">
    <span class="search">
      <slot name="search"></slot>
    </span>
    <span class="title">
      <slot name="title"></slot>
    </span>
    <span class="login">
      <slot name="login"></slot>
    </span>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.header{
    background: #02a774;
    color: #fff;
    width: 100%;
    line-height: 45px;
    height: 45px;
    text-align: center;
}

.search{
    padding:0 15px;
}

.title{
    font-size: 22px;
}

.login{
    font-size: 16px;
    padding: 0 15px;
}

</style>