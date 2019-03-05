<template>
    <div class="login">
        <div class="login-icon" @click="$router.back()">
            <i class="iconfont icon-fanhui"></i>
        </div>
        <div class="login-container">
             <div class="login-header">
                <h1 class="header">外卖登录</h1>
        </div>
        <div class="login-content">
            <div class="login-item">
                <span class="left "  :class="{active : left == true}" @click="changeleft()">短信登录</span>
                <span class="right"  :class="{active : right == true}" @click="changeright()">密码登录</span>
            </div>
            
            <ul class="login-list">
                <li class="left-item" v-show="left">
                    <div class="item">
                        <span>手机号</span>
                        <input type='text' />
                        <span class="code">获取验证码</span>
                    </div>                 
                    <div class="item">
                        <span>验证码</span>
                        <input type='text'/>
                    </div>                   
               
                </li>
                <li class="right-item" v-show="right">
                    <div class="item">
                        <span>用户名</span>
                        <input type='text' />
                    </div>                 
                    <div class="item">
                        <pre style="display:inline">密   码</pre>
                        <input type='text' /> 
                    </div> 
                    <div class="item">
                        <span>验证码</span>
                        <input  type='text' /> 
                        
                    </div>  
                </li>
            </ul>
        </div>
        <div class="text">
            <div>温馨提示：未注册外卖的手机号，登录时将自动注册，且代表已同意
                <a class="link" href="javascript:">《用户服务协议》</a>
            </div>
        </div>
        <div class="login-btn" @click="login()">
            <button>登录</button>
        </div>
        <div class="footer">
            <a>关于我们</a>
        </div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data() {
            return {
                left:true,
                right:false
            }
        },
        methods: {
            changeleft(){
                this.left = true;
                this.right = false
            },
            changeright(){
                this.left = false;
                this.right = true
            },
            login(){
                axios.post("http://yapi.demo.qunar.com/mock/14516/api/test/post"
                ).then(function (response) {
                    console.log(response);
                   })
                 .catch(function (error) {
                    console.log(error);
                   });
            }
        }
        }
</script>

<style scoped>

    .login{
        width: 100%;
        height: 100%;
        background: #fff;
        overflow: hidden;
    }
    .login-icon{
       margin:10px 0 0 10px; 
    }

    .iconfont{
        font-size: 20px;
    }

    .login-container{
        width: 300px;
        margin: auto;
    }

    .login-header{
        font-size: 40px;
        font-weight: 800;
        color: green;
        margin: 30px 0;
        text-align: center
    }

    .login-content{
       
    }

    input{
        border: 0;
        width: 160px;
        height: 30px;
        line-height: 30px;
        font-size: 16px;
        outline: none;
    }


    .login-item{
        text-align: center;
         padding: 10px;
    }
    
    .left{
        padding: 5px;
        margin-right:10px; 
    }

    .right{
    padding: 5px;
    margin-left:10px;
    }
    
    .active{
        color: green;
        border-bottom: 2px solid green
    }

    .left-item{
       
    }
    .right-item{
    }

    .item{
        border: 1px solid gainsboro;
        height: 40px;
        line-height: 40px;
        padding: 5px;
        border-radius: 2px;
        margin: 20px 0;
    }

    .code{
        font-size: 12px;
        color: rgb(182, 179, 179)
    }

    .text{
        font-size: 15px;
        color: rgb(182, 179, 179);
    }

    .text a{
        text-decoration: none;
    }

    .login-btn{
        text-align: center;
        margin: 30px 0;
    }
    

    .login-btn button{
        border: 0;
        background: green;
        color: #fff;
        width: 300px;
        height: 40px;
        border-radius: 3px;
        outline: none
    }

    .footer{
        text-align: center;
        font-size: 12px;
        color: rgba(66, 65, 65, 0.849);
    }
</style>