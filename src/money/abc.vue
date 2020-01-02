<template>
    <panel title="神劵满" :cname="$style.panel">
        <section :class="$style.content">
            <router-link to="home">
                <img :src="img" alt="">
            </router-link>
        </section>
    </panel>
</template>

<script>
    import panel from '../components/panel'

    export default {
        name: "aba",
        components: {
            panel
        },
        data() {
            return {
                img: '//img12.360buyimg.com/jrpmobile/jfs/t10876/23/2566835181/40527/d7d27c08/59f97d68Ne53fda5b.png?width=1080&height=240'
            }
        }
    }
</script>

<style module lang="scss">
    .panel {
        & > h4 {
            display: none;
        }

        .content {
            img {
                width: 100%;
            }
        }
    }


</style>
