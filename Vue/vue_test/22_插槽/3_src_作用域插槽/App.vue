<template>
    <div class="container">      
        <MyCategory title="游戏">
            <template scope="yue">
                <ul>
                    <li v-for="(game, index) in yue.games" :key="index">{{game}}</li>
                </ul>
            </template>            
        </MyCategory>
        <MyCategory title="游戏">
            <template scope="yue">
                <ol>
                    <li v-for="(game, index) in yue.games" :key="index">{{game}}</li>
                </ol>
            </template>            
        </MyCategory>
        <MyCategory title="游戏">
            <template scope="yue">               
                <h4 v-for="(game, index) in yue.games" :key="index">{{game}}</h4>
            </template>             
        </MyCategory>
        
    </div>
</template>

<script> 

    import MyCategory from './components/MyCategory.vue'
    

    export default {
        name: 'App',
        components: {MyCategory}
    }
</script>

<style>
    .container, .foot {
        display: flex;
        justify-content: space-around;
    }

    video {
        width: 100%;
    }
    
    img {
        width: 100%;
    }
</style>