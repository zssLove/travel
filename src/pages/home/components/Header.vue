<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
            <div class="header-right">
                {{this.city}}
                <span class="iconfont arrow-icon">&#xe6aa;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
	export default {
		name: 'HomeHeader',
        computed: {
			//将vuex中的city映射到computed中，这样this.$store.state.city = this.city
			...mapState(['city']),
            // ...mapGetters(['doubleCity'])
        }
	}
</script>

<style scoped lang="stylus">
    @import '~styles/varibles.styl'
    // 1rem = html font-size = 50px
    .header
        display: flex
        height: $headerHeight
        line-height: $headerHeight
        background: $bgColor
        color: #fff

        .header-left
            width: .64rem
            float left
            .back-icon
                text-align: center
                font-size: .4rem

        .header-input
            flex: 1
            background: #fff
            border-radius: .1rem
            height: .62rem
            line-height: .62rem
            margin-top: .12rem
            margin-left: .2rem
            padding-left: .1rem
            color: #ccc

        .header-right
            min-width: 1.04rem
            padding: 0 .1rem
            float: right
            text-align: center
            color: #fff
            .arrow-icon
                font-size: .24rem
                margin-left: -.04rem
</style>
