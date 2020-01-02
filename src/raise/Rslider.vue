<template>
    <section class="content">
        <img src="//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png" alt="">
        <swiper :options="options" >
            <swiper-slide v-for="item in items" :key="item.href">
                <span>{{item.text}}<em>></em></span>
            </swiper-slide>
        </swiper>
    </section>
</template>

<script>
    import { swiper, swiperSlide } from "vue-awesome-swiper"
    export default {
        name: "Rslider",
        components: {
            swiper,
            swiperSlide,
        },
        data(){
            return{
                options:{
                    autoplay: true,
                    loop: true,
                    direction: "vertical",
                },
                items:[
                    {
                      text:'百万白条券免费送，速来领取！！'
                    },
                    {
                      text:'签到领流量，1元500M！'
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~swiper/dist/css/swiper.css";
    .content{
        margin-top: 55px;
        overflow: hidden;
        display: flex;
        img{
           width: 80px;
            height: 35px;
        }
        .swiper-container{
            width: 100%;
            height: 35px;
            line-height: 35px;
            background-color: #fff;
            padding-left: 40px;
            span{
                font-size: 14px;
                em{
                    float: right;
                    padding-right: 10px;
                }
            }
        }
    }
</style>
