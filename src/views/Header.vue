<template>
  <div :class="$style.header">
    <span :class="$style.left">
      <em>注册</em>&nbsp;|&nbsp;
      <em>登陆</em>
    </span>
    <btn :class='$style.btn'>App下载</btn>
  </div>
</template>
<script>
import btn from "../components/button";
export default {
  data() {
    return {};
  },
  components: {
    btn
  }
};
</script>
<style lang='scss' module>
@import "../assets/style/element.scss";
.header {
  color: #666;
  height: 50px;
  line-height: 50px;
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  background: url(//m.jr.jd.com/spe/qyy/main/images/jr-logo.png) no-repeat center center;
  background-size: auto 50%;
  z-index: 100;
  background-color: #fff;
  .left {
      font-size: 14px;
      height: 30px;
      line-height: 30px;
      margin: 17px 0 0 18px;
  };
  .btn{
      float: right;
      font-size: 14px;
      min-width: 60px;
      margin: 12px 12px 0 0;
   }
}
</style>