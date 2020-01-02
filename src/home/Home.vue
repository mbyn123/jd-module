<template>
  <div class="apps">
    <Header/>
    <Banner/>
    <Novice/>
    <Borrow/>
    <Money/>
    <Product/>
    <life/>
    <Footer/>
    <NavBar/>
  </div>
</template>

<script>
import Header from './Header'
import Banner from './Banner'
import Novice from './Novice'
import Borrow from './Borrow'
import Money  from './Money'
import Product from './product'
import life from './life'
import Footer from './Footer'
import NavBar from  './navbar'

export default {
  data() {
    return {
    };
  },
  components:{
     Header,
     Banner,
     Novice,
     Borrow,
     Money,
    Product,
    life,
    Footer,
    NavBar
  }
};
</script>
<style lang='scss'>
</style>
