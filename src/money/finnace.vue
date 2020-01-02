<template>
    <panel title="理财精选">
        <section class="content">
            <div class="item" v-for="item in items" :key='item.index'>
                <img :src="item.src" alt="">
                <div>
                    <h4>{{item.title}}</h4>
                    <p>{{item.msg}}</p>
                </div>
                <em>去赚钱 ></em>
            </div>
        </section>
    </panel>
</template>

<script>
    import panel from '../components/panel'
    export default {
        name: "finnace",
        components:{
            panel
        },
        data(){
            return{
                items:[
                    {
                        src:'//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76',
                        title:'月度理财',
                        msg:'预期年化收益率4.50%'
                    },
                    {
                        src:'//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76',
                        title:'季度理财',
                        msg:'历史年化回报率5.50%'
                    },
                    {
                        src:'//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76',
                        title:'一年理财',
                        msg:'历史年化回报率5.80%'
                    }
                ]
            }
        }

    }
</script>

<style scoped lang="scss">
@import '../assets/style/element';
    .content{
        @include flex;
        .item{
            @include flex(row);
            align-items: center;
            height: 70px;
            box-sizing: border-box;
            &:after{
                content: '';
                width: 100%;
                height: 1px;
                border-bottom: 1px solid #ddd ;
                margin-left: 64px;
            }
            &:last-child:after{
                border-color:#fff ;
            }
            img{
                width: 44px;
                height: 44px;
                margin: 0 20px;
            }
            div{
                h4{
                    font-size: 16px;
                    font-weight: bolder;
                    margin-bottom: 5px;
                }
                p{
                    color: #ff5155;
                }
            }
            em{
                color: #FF801A;
                margin-left: 100px;
            }

        }
    }
</style>
