<template lang="html">
    <section :class="cname">
        <swiper :options="options" :not-next-tick="options.notNextTick">
            <swiper-slide v-for="item in items" :key="item.href">
                <router-link :to="{ name: item.href}">
                    <img :src="item.src" alt="">
                </router-link>
            </swiper-slide>
            <div class="swiper-pagination" v-if="options.pagination" slot="pagination"/>
        </swiper>
    </section>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper"
export default {
    components: {
        swiper,
        swiperSlide,
    },
    props: {
        cname: {
            type: String,
            default: "",
        },
        options: {
            type: Object,
            default() {
                return {
                    autoplay: true, // 自动播放
                    loop: true, // 循环播放
                    pagination: { // 分页器
                        el: ".swiper-pagination",
                    },
                    notNextTick: false,
                }
            },
        },
        items: {
            type: Array,
            default() {
                return []
            },
        },
    },
}
</script>

<style lang="css">
  @import "~swiper/dist/css/swiper.css";
</style>