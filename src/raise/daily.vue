<template>
    <panel title="每日签到">
        <section class="content">
            <img v-for="item in items" :key="item.index" :src="item.img" alt="">
            <p>不抢白不抢</p>
        </section>
    </panel>
</template>

<script>
    import panel from '../components/panel'

    export default {
        name: "daily",
        components: {
            panel
        },
        data() {
            return {
                items:[
                    {
                        img :"//img12.360buyimg.com/jrpmobile/jfs/t3184/283/6032981290/37056/fa30c674/589bd5a2Nabdbbbd9.jpg?width=376&height=160"
                    }
                    ,
                    {
                        img :"//img12.360buyimg.com/jrpmobile/jfs/t3298/196/6130416421/33755/a0536d3e/589bd5d4Nf32e7adc.jpg?width=374&height=160"
                    }
                ]

        }
        }
    }
</script>

<style scoped lang="scss">
.content{
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    padding-bottom: 20px;
    img{
        width: 180px;
        height: 66px;
    }
    p{
        position: absolute;
        top:-35px;
        right:10px;
        font-size: 14px;
        color: #999999;
    }
}
</style>
