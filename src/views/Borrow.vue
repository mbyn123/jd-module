<template>
    <panel title="极速借贷">
        <section class="content">
            <router-link :to="{name:'home'}">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t12721/42/2497849749/26333/ec584be4/5a421756N2416c88f.png?width=750&height=280" alt="">
            </router-link>
        </section>
    </panel>
</template>

<script>
    import panel from '../components/panel'

    export default {
        name: "Borrow",
        components: {
            panel
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/style/element.scss';
    .content{
        width:100%;
        box-sizing: border-box;
        img{
            width:100%;
        }
    }
</style>
