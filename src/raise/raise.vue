<template>
    <div>
        <Header/>
        <Rslider/>
        <Daily/>
        <In/>
        <more/>
        <Footer/>
        <NavBar/>
    </div>
</template>

<script>
    import Header from '../home/Header'
    import Footer from '../home/Footer'
    import NavBar from '../home/navbar'
    import Rslider from './Rslider'
    import Daily from './daily'
    import In from './in'
    import more from './more'

    export default {
        name: "raise",
        components:{
            Header,
            Footer,
            NavBar,
            Rslider,
            Daily,
            In,
            more
        }
    }
</script>

<style scoped>

</style>
