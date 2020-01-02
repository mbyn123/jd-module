<template>
    <panel title='新手特权'>
        <section class="content">
            <div class="item">
                <h4>下载APP <span class="Red">送888元礼包</span></h4>
                <p class="Grey">新手专享</p>
                <img alt=""
                     src="//img12.360buyimg.com/jrpmobile/jfs/t10384/155/1759179594/9776/185bd062/59e5f0ebNec4cf494.png?width=100&height=100">
            </div>
            <div class="item">
                <ul>
                    <li>
                        <div>
                            <h4><span class="Red">领128元新手礼包</span></h4>
                            <p class="Grey">立即开通</p>
                        </div>
                        <img alt=""
                             src="//img12.360buyimg.com/jrpmobile/jfs/t4639/162/1782623297/60754/98ea03b4/58e60952N7fdb2b85.png?width=200&height=200">
                    </li>
                    <li>
                        <div>
                            <h4>打白条 <span class="Red">享免息</span></h4>
                            <p class="Grey">立即开通享豪礼</p>
                        </div>
                        <img alt=""
                             src="//img12.360buyimg.com/jrpmobile/jfs/t4804/179/657713323/5908/66dce262/58e6095fNd3dc3f39.png?width=100&height=100">

                    </li>
                </ul>
            </div>
        </section>
    </panel>
</template>
<script>
    import panel from '../components/panel'

    export default {
        components: {
            panel
        }
    };
</script>

<style lang='scss' scoped>
    @import '../assets/style/element.scss';

    .content {
        font-size: 16px;
        font-weight: bold;
        @include list(row);
        border-top:1px solid #ddd;

        .item {
            flex: 1;

            &:first-child {
                text-align: center;
                border-right: 1px solid #ddd;

                img {
                    width: 61px;
                    height: 61px;
                    margin: 10px auto 0;
                }
            }
        ;

            > ul > li {
                height: 70px;
                display: flex;
                padding: 0 12px;
                 &:first-child{
                     border-bottom: 1px solid #ddd;
                 }
                    > div {
                        width: 110px;
                    }

                h4 {
                   @include textOverflow
                }

                img {
                    width: 40px;
                    height: 40px;
                    margin: 12px auto;
                }
            }

            .Red {
                color: red
            }
        ;

            .Grey {
                font-size: 14px;
                color: #666666;
            }

            h4 {
                line-height: 40px;
            }
        }
    }
</style>
