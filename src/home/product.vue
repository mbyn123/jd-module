<template lang="html">
    <Panel title="新品推荐" :class="$style.panel">
        <section :class="$style.content">
            <div class="arrow">更多尖货 ></div>
            <Slider :options="options" :items="items" cname="product-slider"/>
        </section>
    </Panel>
</template>

<script>
    import Panel from "../components/panel"
    import Slider from "../components/slider"

    export default {
        components: {
            Panel,
            Slider,
        },
        data() {
            return {
                items: [
                    {
                        href: "home",
                        src: "//img12.360buyimg.com/jrpmobile/jfs/t15784/188/381232069/39444/8878571d/5a2f6a4aNbd5a574c.jpg?width=335&height=421",
                    }, {
                        href: "home2",
                        src: "//img12.360buyimg.com/jrpmobile/jfs/t13021/306/1996997425/21953/bda69db3/5a2f6a17N9da099b1.jpg?width=335&height=421",
                    }, {
                        href: "home3",
                        src: "//img12.360buyimg.com/jrpmobile/jfs/t14125/310/1997192193/46667/3c910f8b/5a2f6a36Nad95b650.jpg?width=335&height=421",
                    }, {
                        href: "home4",
                        src: "//img12.360buyimg.com/jrpmobile/jfs/t15784/188/381232069/39444/8878571d/5a2f6a4aNbd5a574c.jpg?width=335&height=421",
                    },
                    {
                        href: "home5",
                        src: "//img12.360buyimg.com/jrpmobile/jfs/t15784/188/381232069/39444/8878571d/5a2f6a4aNbd5a574c.jpg?width=335&height=421",
                    }, {
                        href: "home6",
                        src: "//img12.360buyimg.com/jrpmobile/jfs/t13021/306/1996997425/21953/bda69db3/5a2f6a17N9da099b1.jpg?width=335&height=421",
                    }, {
                        href: "home7",
                        src: "//img12.360buyimg.com/jrpmobile/jfs/t14125/310/1997192193/46667/3c910f8b/5a2f6a36Nad95b650.jpg?width=335&height=421",
                    }, {
                        href: "home8",
                        src: "//img12.360buyimg.com/jrpmobile/jfs/t15784/188/381232069/39444/8878571d/5a2f6a4aNbd5a574c.jpg?width=335&height=421",
                    }
                ],
                options: {
                    slidesPerView: 2.3,
                    spaceBetween: 30,
                    freeMode: true,
                },
            }
        },
    }
</script>

<style lang="scss">
    .product-slider {
        .swiper-container {
            box-sizing: border-box;
            padding: 0 24px;

            .swiper-slide {
                a {
                    display: inline-block;
                    width: 100%;

                    img {
                        width: 100%;
                        display: block;
                        /*height: 314px;*/
                        border: 1px solid #fafafa;
                    }
                }
            }
        }
    }
</style>

<style lang="scss" module>
    @import "../assets/style/element";

    .panel {
        @include panel;

        .content {
            padding-bottom: 40px;
            position: relative;

            & > div {
                position: absolute;
                font-size: 14px;
                color: #999;
                right: 10px;
                top: -35px;
            }
        }
    }
</style>
