<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition :appear="true">
            <h1 v-show="isShow">你好啊！</h1>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'MyTest',
        data() {
            return {
                isShow: true
            }
        },
    }
</script>

<style scoped>
    h1 {
        background-color: orange;
    }

    .v-enter-active {
        animation: yue 1s linear;
    }

    .v-leave-active {
        animation: yue 1s reverse linear;
    }

    @keyframes yue {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>