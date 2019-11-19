<template>
    <div class="wrapper">
        <swiper>
            <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" alt="" :src="item.imgUrl" >
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
	export default {
		name: 'HomeSwiper',
        data () {
            return {
				swiperOption: {
					pagination: '.swiper-pagination',
                    loop: true,
                    autoplay: 1000
                },
                swiperList: [
                    {
                    	id: '0001',
                        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201911/6da1597f11456f5a42a1818ab3f6fa08.jpg_750x200_31b64c4a.jpg'
                    },
                    {
                    	id: '0002',
                        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201911/1d8faa9f4d49b77ca1e61e2b478260f7.jpg_750x200_25cf76e2.jpg'
                    },
                    {
                    	id: '003',
                        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/33d3df12507f1786fde6b72917af38cc.jpg_750x200_c8cc2871.jpg'
                    }
                ]
            }
		}
	}
</script>

<style scoped lang="stylus">
    .wrapper >>> .swiper-pagination-bullet-active
        background #fff !important
    .wrapper
        overflow hidden
        width: 100%
        height: 0
        padding-bottom: 26.66666%
        background-color: #eee
        .swiper-img
            width: 100%
</style>
