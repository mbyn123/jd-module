<template>
    <panel :class="[$style.panel,cname]" titile="公司信息">
        <section :class="$style.content">
            <ul>
                <li :class="$style.help">
                    <router-link :to="{name:'home'}">
                        <img alt=""
                             src="//img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252">
                    </router-link>
                </li>
                <li :class="$style.terminal">
                    <div v-for="item in items" :key="item.href">
                        <router-link :to="{name:item.href}">
                            <img :src="item.img" alt="">
                            <p>{{item.name}}</p>
                        </router-link>
                    </div>
                </li>
                <li :class="$style.message" v-for="value in list" :key="value.index">
                    {{value.msg}}
                </li>
            </ul>
        </section>
    </panel>
</template>

<script>
    import panel from '../components/panel'

    export default {
        name: "Footer",
        components: {
            panel
        },
        props:{
            cname:{
                type:String,
                default:''
            }
        },
        data() {
            return {
                items: [
                    {
                        href: 'home1',
                        img: '//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108',
                        name: '客户端'
                    },
                    {
                        href: 'home2',
                        img: '//img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108',
                        name: '触屏版'
                    },
                    {
                        href: 'home3',
                        img: '//img12.360buyimg.com/jrpmobile/jfs/t2920/282/1283157010/1040/23f1430b/577cf3e5N53f740b8.png?width=108&height=108',
                        name: '电脑版'
                    },
                ],
                list: [
                    {
                        msg: 'Copyright © 2004-2017 京东JD.com 版权所有'
                    },
                    {
                        msg: '投资有风险，购买需谨慎'
                    },
                    {
                        msg: '京东金融平台服务协议'
                    },
                    {
                        msg: '京东金融隐私政策'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" module>
    @import '../assets/style/element';

    .panel {
        @include panel;
        & > h4 {
            display: none;
        }

        .content {
             margin-bottom: 50px;
            background-color: #F5F5F5;
            > ul {
                .help {
                    width: 100%;
                    box-sizing: border-box;

                    img {
                        width: 100%;
                        height: 72px;
                    }
                };
                .terminal{
                    height: 86px;
                    @include evenly;
                    >div{
                        text-align: center;
                        img{
                            width: 45px;
                            margin-bottom: 5px ;
                        }
                        p{
                            color: #666;
                        }
                    }
                };
                .message{
                    padding: 12px 0;
                    text-align: center;
                    &:nth-child(n+3){
                        border-top: 1px solid #ddd;
                    }
                }
            }
        }
    }
</style>
