<template>
  <div class="m-header">
    <div class="top">
      <span class="music-logo"></span>
      <router-link tag="div" to="/user">
        <span class="iconfont icon-wode"></span>
      </router-link>
    </div>

    <div class="nav">
      <router-link tag="div" class="nav-item" to="/recommend">推荐</router-link>
      <router-link tag="div" class="nav-item" to="/singer">歌手</router-link>
      <router-link tag="div" class="nav-item" to="/rank">排行</router-link>
      <router-link tag="div" class="nav-item" to="/search">搜索</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name:'MHeader'
}
</script>

<style lang="stylus" scoped>
  // @import "../../assets/stylus/variable"
  // @import "../../assets/stylus/mixin"

  .m-header
    .top
      display flex    //1 ▲
      align-items center    //2   ▲
      justify-content space-between   //3▲
      height 44px    //4
      padding 0 10px    //5
      background-color #31c27c  //6
      .music-logo 
        width 90px  //7
        height 25px //8
        background-image url('../../assets/img/logo.png') //9
        background-size cover //10背景图片完全覆盖容器，并保持宽高比例（图像不会压扁）▲
      .iconfont
        font-size 22px  //11
        color #fff      //12
    .nav
      display flex  //13▲▲
      height 40px   //14
      line-height 40px  //15
      .nav-item 
        flex-grow 1    //16▲▲
        text-align center   //17
        color #666  //18
      .router-link-active
        color #31c27c   //19
        border-bottom 2px solid #31c27c

</style>
