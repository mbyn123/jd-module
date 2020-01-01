<template>
  <section :class="[panelClass,cname]">
      <h4>-{{title}}-</h4>
      <slot/>
  </section>
</template>
<script>
export default {
  props:{
      cname:{
          type:String,
          default:''
      },
      title:{
          type:String,
          default:''
      }
  },  
  data() {
    return {
        panelClass:'panel'// 面板组件，默认样式
    };
  }
};
</script>
<style lang='scss' scoped>
@import '../assets/style/element.scss';
.panel{
    @include panel;
}
</style>