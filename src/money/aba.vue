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
                img: '//img12.360buyimg.com/jrpmobile/jfs/t5842/235/8356236245/38364/2112fd7e/597a95d4Ne01da140.png?width=750&height=270'
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
