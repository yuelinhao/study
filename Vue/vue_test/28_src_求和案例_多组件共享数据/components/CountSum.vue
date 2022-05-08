<template>
    <div>
        <h1>当前求和为：{{sum}}</h1>
        <h3>当前放大10倍为: {{bigSum}}</h3>
        <h3>我在{{school}}, 学习{{subject}}</h3>
        <h3>Person组件的总人数是: {{personList.length}}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>

<script>
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
    export default {
        name: 'CountSum',
        data() {
            return {
                n: 1,  
            }
        },
        computed: {            
            // ...mapState({sum:'sum', school:'school', subject:'subject'}),
            ...mapState(['sum','school','subject','personList']),
            
            // ...mapGetters({bigSum:'bigSum'})
            ...mapGetters(['bigSum'])
        },
        methods: {
            /* increment() {
               this.$store.commit('JIA', this.n)
            },
            decrement() {
                this.$store.commit('JIAN', this.n)
            }, */

            ...mapMutations({increment:'JIA', decrement:'JIAN'}),

            /* incrementOdd() {                
                this.$store.dispatch('jiaOdd', this.n)                
            },
            incrementWait() {               
                this.$store.dispatch('jiaWait', this.n)               
            } */
            ...mapActions({incrementOdd:'jiaOdd', incrementWait:'jiaWait'})
        },
    }
</script>

<style lang="css">
    button {
        margin-left: 5px;
    }
</style>
