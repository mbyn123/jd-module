<template>
    <div>
        <Header/>
        <Mslider/>
        <Aba/>
        <Mmoney/>
        <Abc/>
        <Finnace/>
        <Abd/>
        <Footer cname="mfooter"/>
        <NavBar/>
    </div>
</template>

<script>
    import Header from '../home/Header'
    import Footer from '../home/Footer'
    import NavBar from '../home/navbar'
    import Mslider from '../money/Mslider'
    import Aba from '../money/aba'
    import Mmoney from '../money/Mmomey'
    import Abc from '../money/abc'
    import Abd from '../money/adb'
    import Finnace from '../money/finnace'

    export default {
        name: "money",
        components: {
            Header,
            Footer,
            NavBar,
            Mslider,
            Aba,
            Mmoney,
            Abc,
            Abd,
            Finnace
        }
    }
</script>

<style  lang="scss">
    .mfooter {
        ul{
           li:first-child{
               display: none;
           }
        }
    }

</style>
