<template>
    <panel title="In货推荐">
        <section class="content" v-for="item in items" :key="item.index">
            <img class="title-img" :src="item.catory" alt="">
            <div class="list">
                <div class="item" v-for="item2 in item.list" :key="item2.index">
                    <img class="goods-img" :src="item2.img" alt="">
                    <p class="title">{{item2.title}}</p>
                    <p class="price">{{item2.price}} <em>起</em></p>
                    <div class="artic">
                        <div class="wrapper">
                            <div class="inner" :style="{width:item2.progress+'%'}"></div>
                        </div>
                        <div class="progress">{{item2.progress}}%</div>
                    </div>
                    <div class="label" v-if="item2.label">
                        {{item2.label}}
                    </div>
                </div>
            </div>
        </section>
    </panel>
</template>

<script>
    import panel from '../components/panel'

    export default {
        name: "in",
        components: {
            panel
        },
        data() {
            return {
                items: [{
                    catory: "//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200",
                    list: [{
                        img: "https://img30.360buyimg.com/cf/s250x250_jfs/t14881/283/656508232/143980/9b606acf/5a33a171N18c9c80a.jpg",
                        title: "双响炮蓝牙音箱",
                        price: "29.00",
                        progress: 172,
                        label:'精选'
                    }, {
                        img: "https://img30.360buyimg.com/cf/s250x250_jfs/t15529/308/632300625/135123/adb9c6d0/5a37676dNc31da9ea.jpg",
                        title: "脑波相机",
                        price: "998.00",
                        progress: 259,
                    }],
                }, {
                    catory: "//img12.360buyimg.com/jrpmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png?width=750&height=200",
                    list: [{
                        img: "https://img30.360buyimg.com/cf/s250x250_jfs/t11257/287/2281727659/55759/e00b90a/5a138f21N32dca834.jpg",
                        title: "智能电动牙刷",
                        price: "19.00",
                        progress: 481,
                    }, {
                        img: "https://img30.360buyimg.com/cf/s250x250_jfs/t14209/293/662014092/61635/bba5c330/5a33a983N077cac56.jpg",
                        title: "烟草加热电子烟",
                        price: "258.00",
                        progress: 105,
                        label:'精选'
                    }],
                }, {
                    catory: "//img12.360buyimg.com/jrpmobile/jfs/t3214/113/4408032436/61548/ce316eef/5846d310Ne93f00c9.png?width=750&height=200",
                    list: [{
                        img: "https://img30.360buyimg.com/cf/s250x250_jfs/t15007/47/884045069/149879/17987250/5a3cb182N15868ea1.jpg",
                        title: "赖公高淮封藏老酒",
                        price: "99.00",
                        progress: 199,
                    }, {
                        img: "https://img30.360buyimg.com/cf/s250x250_jfs/t14197/160/546457496/134173/4e1baccd/5a30ccc5Na44f7492.jpg",
                        title: "泗洪花雕醉蟹",
                        price: "58.00",
                        progress: 222,
                    }],
                }],
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/style/element';

    .content {
        .title-img {
            width: 100%;
            height: 92px;
        }

        .list {
            @include flex(row);
            .item {
                flex: 1;
                box-sizing: border-box;
                text-align: center;
                margin-bottom: 10px;
                position: relative;
                .goods-img {
                    width: 90px;
                    height: 90px;
                    margin: 22px auto 10px;
                }

                .title {
                    font-size: 13px;
                    font-weight: bolder;
                    margin-bottom: 5px;
                }

                .price {
                    color: #ff5155;
                    font-size: 18px;
                    font-weight: bolder;
                    margin-bottom: 10px;

                    em {
                        color: #999999;
                        font-size: 12px;
                    }

                    &:before {
                        content: '￥';
                        font-size: 16px;
                    }
                }

                .artic {
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    .wrapper {
                        width: 77px;
                        height: 5px;
                        background: #F6E6E6;

                        .inner {
                            width: 40%;
                            max-width: 100%;
                            height: 5px;
                            background-image: linear-gradient(270deg, #F55 1%, #FF9C31 100%);
                        }
                    }

                    .progress {
                        font-size: 12px;
                        color: #999999;
                        margin-left: 5px;
                    }
                }
                .label{
                    background-color: #999999;
                    color: red;
                    position: absolute;
                    top:0px;
                    left: 10px;
                    padding:2px 5px;
                }
            }
        }
    }
</style>
