<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <!-- slides -->
            <swiper-slide v-for="item of list" :key="item.id">
                <img class="swiper-img" alt="" :src="item.imgUrl" >
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
	export default {
		name: 'HomeSwiper',
        props: {
			list: Array
        },
        data () {
            return {
				swiperOption: {
					pagination: '.swiper-pagination',
                    loop: true,
                    autoplay: 1000
                }
            }
		},
        computed: {
			showSwiper () {
				return this.list.length
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
        padding-bottom: 31.25%
        background-color: #eee
        .swiper-img
            width: 100%
</style>
