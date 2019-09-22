<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/recommend">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/singer">
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span class="tab-link">排行</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/search">
      <span class="tab-link">搜索</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Tab',
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
	@import '../../assets/stylus/variable.styl'

	.tab
		display flex									//4
		height 44px										//1
		line-height 44px							//2
		font-size $font-size-medium		//3
		// 123写完，div.width还是默认为100%,如何水平排列，用flex
		.tab-item
			// 5：flex-grow	1也行，flex为1也是指flex-grow为1，也就是各占1份
			flex	1											//5
			text-align center						//6
			.tab-link
				padding-bottom 5px				//7
				color $color-text-l				//8
			// https://segmentfault.com/q/1010000011052931
			// stylus的&代表上一级选择器，这里缩进了2格，而上一级选择器是.tab-item，所以&代表.tab-item的元素，this也是，指代父级
			// 实际编译div.tab-item{...},div.router-link-active{....}
			&.router-link-active        //注意这里的写法，一定要缩进2格，&代表上一级选择器，不然没有效果
				.tab-link									//这里是子选择器，所以再缩进，下面的样式是代表有.router-link-active的类的子标签span的样式，加下边框
					color $color-theme			//9
					border-bottom 2px solid $color-theme		//10
</style>
