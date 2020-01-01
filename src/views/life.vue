<template>
    <panel title="生活服务">
        <section class="content">
            <ul>
                <li v-for="item in items" :key="item.href">
                    <router-link :to="{ name: item.href}">
                        <img :src="item.img" alt="">
                        <p>{{item.title}}</p>
                        <p>{{item.msg}}</p>
                    </router-link>
                </li>
            </ul>
        </section>
    </panel>
</template>

<script>
    import panel from '../components/panel'

    export default {
        name: "life",
        components: {
            panel
        },
        data() {
            return {
                items: [
                    {
                        href: 'home',
                        img: '//img12.360buyimg.com/jrpmobile/jfs/t4375/104/1184122472/3976/89741da4/58be8a6eNf10193d0.png?width=135&height=135',
                        title: '惠加油'
                    },
                    {
                        href: 'home2',
                        img: '//img12.360buyimg.com/jrpmobile/jfs/t4747/185/1901740991/5892/1383fb93/58f57851N17ee6993.jpg?width=132&height=132',
                        title: '小白信用',
                        msg: '全新升级'
                    },
                    {
                        href: 'home3',
                        img: '//img12.360buyimg.com/jrpmobile/jfs/t3241/234/8044685271/3713/7b29f77f/58be89c8Nb9d41295.png?width=135&height=135',
                        title: '信用卡还款'
                    },
                    {
                        href: 'home4',
                        img: '//img12.360buyimg.com/jrpmobile/jfs/t3172/259/7993557249/4351/fd082707/58be8a81Nd7716a06.png?width=135&height=135',
                        title: '卡转让'
                    },
                    {
                        href: 'home5',
                        img: '//img12.360buyimg.com/jrpmobile/jfs/t3085/320/8107659086/4344/cdbba2dd/58be8acfNdadcaf00.png?width=135&height=135',
                        title: '定期还款'
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/style/element';

    .content {
        padding-bottom: 10px;

        > ul {
            @include top;

            > li {
                text-align: center;
                width: 50px;

                img {
                    width: 45px;
                    height: 45px;
                }

                p {
                    &:nth-child(2) {
                        color: #666;
                        margin: 10px 0;
                        @include textOverflow;
                    }
                ;

                    &:nth-child(3) {
                        color: #FF801A
                    }
                }
            }
        }
    }
</style>
