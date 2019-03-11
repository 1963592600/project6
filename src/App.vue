<template>
  <div class="app">
      <router-view></router-view>
      <bottom v-show="$route.meta.show"></bottom>
  </div>
</template>

<script>
import bottom from './components/bottom/bottom'
import {mapActions} from 'Vuex'
export default {
  name: 'App',
   methods: {
     ...mapActions([
         'getAddress'
       ])
   },
  //  mounted() {
  //    this.$store.dispatch('getAddress')
  //  },
  components:{
    bottom
  }
}
</script>

<style>
.app{
  width: 100%;
  height: 100%;
  background: #f5f5f5
}
</style>
