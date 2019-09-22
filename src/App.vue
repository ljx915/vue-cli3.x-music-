<template>
  <div id="app">
    <m-header></m-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MHeader from './pages/header/Header.vue'
import '@/assets/fonts/iconfont.css'
import '@/assets/stylus/reset.styl'
export default {
  name: 'app',
  components: {
    MHeader
  }
}
</script>

<style>

</style>
