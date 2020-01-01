<template>
  <div :class="[butClass,cname]">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props:{
      cname:{
          type:String,
          default:''
      }
  },  
  data() {
    return {
      butClass: "btn" // 按钮组件默认样式
    };
  }
};
</script>

<style lang='scss' scoped>
@import '../assets/style/element.scss';
 .btn { 
  @include btn;
}
</style>