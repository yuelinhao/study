<template>
    <div>
        <CountSum></CountSum>
        <hr>
        <MyPerson></MyPerson>
    </div>
</template>

<script> 
    import CountSum from './components/CountSum.vue'
    import MyPerson from './components/MyPerson.vue'
    export default {
        name: 'App',
        components: {CountSum,MyPerson}
    }
</script>
