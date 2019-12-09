<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <!-- slides -->
                <swiper-slide
                        v-for="(item, index) in imgs"
                        :key="index"
                >
                    <img class="gallary-img" alt="" :src="item" >
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'CommonGallary',
        props: {
		    imgs: {
		    	type: Array,
                default () {
		    		return []
                }
            }
        },
        data() {
			return {
				swiperOptions: {
					pagination: '.swiper-pagination',
                    paginationType: 'fraction',
                    observer: true,
                    observeParents: true
				}
            }
        },
        methods: {
			handleGallaryClick() {
                this.$emit('close')
            }

        }
	}
</script>

<style scoped lang="stylus">
    .container >>> .swiper-container
        overflow: inherit
    .container
        display: flex
        flex-direction: column
        justify-content: center
        position: fixed
        z-index: 999
        top: 0
        left: 0
        right: 0
        bottom: 0
        background-color: #000
        .wrapper
            position: relative
            height: 0
            width: 100%
            padding-bottom: 100%
            .gallary-img
                width: 100%
            .swiper-pagination
                color: #fff
                bottom: -1rem
</style>
