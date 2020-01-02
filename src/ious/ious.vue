<template>
    <div>
        <Header/>
        <Islider/>
        <welfare/>
        <service/>
        <Footer/>
        <NavBar/>
    </div>
</template>

<script>
    import Header from '../home/Header'
    import Footer from '../home/Footer'
    import NavBar from '../home/navbar'
    import Islider from './Islider'
    import welfare from  './welfare'
    import service from './service'


    export default {
        name: "ious",
        components:{
            Header,
            Footer,
            NavBar,
            Islider,
            welfare,
            service,
        }
    }
</script>

<style scoped>

</style>
