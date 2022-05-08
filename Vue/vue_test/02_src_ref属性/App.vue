<template>
    <div>
        <img src="./assets/logo.png" alt="logo">
        <h1 v-text="msg" ref="title"></h1>
        <button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
        <School ref="sch"></School>
        <Student></Student>
    </div>
</template>

<script>
    //引入组件
    import School from './components/School.vue'
    import Student from './components/Student.vue'

    export default {
        name: 'App',
        components: {
            School,
            Student
        },
        data() {
            return {
                msg: '欢迎学习Vue!'
            }
        },
        methods: {
            showDOM() {
                console.log(this.$refs.title);
                console.log(this.$refs.btn);
                console.log(this.$refs.sch);
            }
        }
    }
</script>

