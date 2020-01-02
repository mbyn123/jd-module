<template>
    <panel title="更多福利">
        <section class="content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t7456/56/1425209238/21928/f1fe492d/599cee57Naea99020.jpg?width=250&height=330" alt="">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t7894/126/1440046618/24763/5ce6a129/599cee04Ne77b3641.jpg?width=250&height=330" alt="">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t6385/103/1675552688/24265/91be4150/59549aedNa30670f7.jpg?width=250&height=330" alt="">
            <span>专享福利 > </span>
        </section>
    </panel>
</template>

<script>
    import panel from '../components/panel'
    export default {
        name: "more",
        components:{
            panel
        }
    }
</script>

<style scoped lang="scss">
    .content{
        display: flex;
        justify-content: space-around;
        width: 100%;
        box-sizing: border-box;
        position: relative;
        img{
            width: 90px;
        }
        span{
            position: absolute;
            top:-35px;
            right: 5px;
            font-size: 14px;
        }
    }

</style>
