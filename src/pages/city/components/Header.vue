<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont header-back">&#xe624;</div>
        </router-link>
    </div>
</template>

<script>
	export default {
		name: 'CityHeader'
	}
</script>

<style scoped lang="stylus">
    @import '~styles/varibles.styl'
    .header
        position: relative
        height: $headerHeight
        line-height: $headerHeight
        overflow: hidden
        text-align: center
        color: #fff
        font-size: .32rem
        background-color: $bgColor
        .header-back
            position: absolute
            top: -.03rem
            left: .2rem
            width: .64rem
            text-align: center
            font-size: .4rem
            color: #fff
</style>
