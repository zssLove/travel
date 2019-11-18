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
        data () {
			return {
				swiperOption: {
					pagination: '.swiper-pagination',
					// loop: true,
				},
				iconList: [{
					id: '0001',
                    imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    desc: '景点门票'
                }, {
					id: '0002',
					imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
					desc: '名胜古迹'
                }, {
					id: '0003',
					imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/bf479a6bf700650fbc25837fea1c38e8.png',
					desc: '临泉海洋世界'
                }, {
					id: '0004',
					imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
					desc: '迪沟'
				}, {
					id: '0005',
					imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
					desc: '环球嘉年华'
				}, {
					id: '0006',
					imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
					desc: '八里河'
				}, {
					id: '0007',
					imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/48/cb72b99b71974c02.png',
					desc: '休闲玩乐'
				}, {
					id: '0008',
					imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
					desc: '自然风光'
				}, {
					id: '0009',
					imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
					desc: '动植物园'
				}, {
					id: '0010',
					imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
					desc: '阜阳生态园'
                }]
            }
        },
        computed: {
			pages () {
				const pages = [];
                this.iconList.forEach((item, index) => {
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
    .icons >>> .swiper-container
        height: 0
        padding-bottom: 50%
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
