<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1608/a3/a3311afcaf0fcd1fa3.img.jpg_600x330_e3352068.jpg" alt="">
            <div class="banner-info">
                <div class="banner-title">太和环球嘉年华游乐园</div>
                <div class="banner-number">
                <span class="iconfont banner-icon">&#xe692;
                    39
                </span>
                </div>
            </div>
        </div>
        <common-gallary
                :imgs="imgs"
                v-show="showGallary"
                @close="handleGallaryClose"
        ></common-gallary>
    </div>
</template>

<script>
	import CommonGallary from 'common/gallary/Gallary'
	export default {
		name: 'DetailBanner',
        data () {
            return {
            	showGallary: false,
				imgs: [
					'http://img1.qunarzz.com/sight/p0/1608/a3/a3311afcaf0fcd1fa3.img.jpg_r_800x800_9f2e654f.jpg',
					'http://img1.qunarzz.com/sight/p0/1611/aa/aaf0baf774d619dea3.water.jpg_r_800x800_21ad0025.jpg'
				]
            }
        },
        methods: {
			handleBannerClick() {
		    	this.showGallary = true
            },
			handleGallaryClose() {
				this.showGallary = false
            }
        },
		components: {
			CommonGallary
		}
	}
</script>



<style scoped lang="stylus">
    .banner
        position: relative
        overflow: hidden
        height: 0
        padding-bottom: 55%
        .banner-img
            width: 100%
        .banner-info
            display: flex
            position: absolute
            left: 0
            right: 0
            bottom: 0
            line-height: .6rem
            color: #fff
            background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
            .banner-title
                font-size: .32rem
                padding: 0 .2rem
                flex: 1
            .banner-number
                height: .32rem
                padding: 0 .4rem
                line-height: .4rem
                margin-top: .14rem
                border-radius: .2rem
                background-color: rgba(0, 0, 0, .8)
                font-size: .24rem
                .banner-icon
                    font-size: .24rem
</style>
