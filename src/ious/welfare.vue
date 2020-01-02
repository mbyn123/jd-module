<template>
    <panel title="白条福利">
        <section class="content">
            <div class="item" v-for="item in items" :key='item.index'>
                <img :src="item.src" alt="">
                <div class="message">
                    <h4>{{item.title}}</h4>
                    <p>{{item.msg}}</p>
                </div>
                <div class="em">{{item.em}}</div>
            </div>
        </section>
    </panel>
</template>

<script>
    import panel from '../components/panel'
    export default {
        name: "welfare",
        components:{
            panel
        },
        data(){
            return{
                items:[
                    {
                        src:'//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120',
                        title:'开通白条',
                        msg:'送188元礼包',
                        em:'立即开通'
                    },
                    {
                        src:'//img12.360buyimg.com/jrpmobile/jfs/t4150/330/141981421/9147/604e3e04/58affc3bNbfa8f9d7.jpg?width=120&height=120',
                        title:'白条闪付',
                        msg:'新手享158元礼包',
                        em:'随机立减'
                    },
                    {
                        src:'//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120',
                        title:'白条提额',
                        msg:'金融app专享提额礼包',
                        em:'去提额'
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
            img{
                width: 44px;
                height:44px;
                margin: 0 20px;
            }
            .message{
                    width: 125px;
                    h4{
                        font-size: 16px;
                        font-weight: bolder;
                        margin-bottom: 5px;
                    }
                    p{
                        font-size: 14px;
                        color:#ddd;
                        @include textOverflow;
                    }
                }
            .em{
                color:#FF801A;
                font-size: 14px;
                width: 100px;
                text-align: right;
            }
        }
    }

</style>
