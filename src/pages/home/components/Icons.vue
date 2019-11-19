<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
	export default {
		name: 'HomeIcons',
        props: {
		    icon: Array
        },
        data () {
			return {
				swiperOption: {
					pagination: '.swiper-pagination',
					// loop: true,
				}
            }
        },
        computed: {
			pages () {
				const pages = [];
                this.icon.forEach((item, index) => {
                    const page = Math.floor(index / 8);
                    if (!pages[page]) {
                    	pages[page] = []
                    }
                    pages[page].push(item)
                });
                return pages
            }
        }
	}
</script>

<style scoped lang="stylus">
    @import '~styles/varibles.styl'
    @import '~styles/mixins.styl'
    .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets
        top: 3.8rem
    .icons >>> .swiper-container
        padding-top: .1rem
        height: 0
        padding-bottom: 54%
    .icon
        overflow: hidden
        position: relative
        width: 25%
        height: 0
        float: left
        padding-bottom: 25%
        .icon-img
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: .44rem
            box-sizing: border-box
            padding: .1rem
            .icon-img-content
                height: 100%
                display: block
                margin: 0 auto
        .icon-desc
            position: absolute
            left: 0
            right: 0
            bottom: 0
            line-height: .44rem
            height: .44rem
            text-align: center
            ellipse()
</style>
