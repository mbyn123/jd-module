<template>
    <panel title="理财精选">
        <section class="content">
            <dl class="item" v-for="item in items" :key="item.title">
                <dt>{{item.title}}<span>{{item.sub}}</span></dt>
                <dd>{{item.rate}}</dd>
                <dd>{{item.text}}</dd>
            </dl>
        </section>
    </panel>
</template>

<script>
    import panel from '../components/panel'

    export default {
        name: "Money.vue",
        components: {
            panel
        },
      data(){
            return{
                items:[
                    {
                        title: "定期理财",
                        sub: "理财首选",
                        rate: "5.60%",
                        text: "历史年化回报率",
                    }, {
                        title: "小白理财",
                        sub: "理财首选",
                        rate: "4.22%",
                        text: "7日年化收益率",
                    }, {
                        title: "月月盈",
                        sub: "养老保障",
                        rate: "5%",
                        text: "七日年化收益率",
                    }, {
                        title: "小白基金",
                        sub: "天天赚钱",
                        rate: "4.27%",
                        text: "7日年化收益率",
                    }
                ]
            }
      }
    }
</script>

<style scoped lang="scss">
@import '../assets/style/element.scss';
    .content{
        @include list(row);
         justify-content: center;
          box-sizing: border-box;
        &:after{
          content: '';
          display: block;
            height: 0;
            width: 100%;
            box-sizing: border-box;
            border-bottom: 1px solid #ddd;
            position: relative;
            top:-93px;
        }
        .item{
            width:50%;
            box-sizing: border-box;
            position: relative;
            padding-bottom: 10px;
            &:after{
                content: '';
                display: block;
                width: 1px;
                height: 95px;
                border-right: 1px solid #ddd;
                position: absolute;
                top:0;
                right:0;
            }
            &:nth-child(2n){
                &:after{
                    display: none;
                }
            }
            dt{
                font-size: 16px;
                font-weight: bolder;
                line-height: 42px;
                padding-left:10px ;
                span{
                    font-size: 12px;
                    color: red;
                    margin-left: 5px;
                    padding: 0 4px;
                    vertical-align: 1px;
                }
            }
            dd{
                padding-left: 10px;
                &:nth-child(2){
                    font-size: 18px;
                    font-weight: 700;
                    color: #ff5155;
                    line-height: 26px;
                }
                &:nth-child(3){
                    color:#666666;
                    font-size: 12px;
                    line-height: 17px;
                }
            }
        }
    }
</style>
