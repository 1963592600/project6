
import ajax from "./ajax";

const BSAE_URL = '/api'

//根据经纬度获取位置详情(#1根据经纬度获取位置详情)

export const reqAddress = (geohash) => ajax(BSAE_URL+`/position/${geohash}`)

//获取食品分类列表(#2获取食品分类列表)

export const reqFoodCategorys = () => ajax(BSAE_URL+`/index_category`)

//根据经纬度获取商铺列表(#3根据经纬度获取商铺列表)

export const reqShops = (longitude, latitude) => ajax(BSAE_URL+`/shops`, {longitude, latitude})

//根据经纬度和关键字搜索商铺列表(#4根据经纬度和关键字搜索商铺列表)

export const reqSearch_shops = (geohash, keyword) => ajax(BSAE_URL+`/search_shops`,{geohash, keyword})

//获取一次性验证码(#5获取一次性验证码)

export const reqCaptcha = () => ajax(BSAE_URL+`/captcha`)

//用户名密码登陆(#6用户名密码登陆)

export const reqLogin_pwd = (name, pwd, captcha) => ajax(BSAE_URL+`/login_pwd`, {name, pwd, captcha})

//发送短信验证码(#7发送短信验证码)

export const reqSendcode = (phone) => ajax(BSAE_URL+`/sendcode`, {phone})

//手机号验证码登陆(#8手机号验证码登陆)

export const reqLogin_sms = (phone, code) => ajax(BSAE_URL+`/login_sms`, {phone, code})

//根据会话获取用户信息(#9根据会话获取用户信息)

export const reqUserinfo = () => ajax(BSAE_URL+`/userinfo`)

//用户登出(#10用户登出)

export const reqLogout = () => ajax(BSAE_URL+`/logout`)
