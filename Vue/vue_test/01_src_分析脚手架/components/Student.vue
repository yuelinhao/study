<template>
    <div class="demo">
        <!-- 组件的结构 -->
        <h2>学生名称：{{name}}</h2>
		<h2>学生年龄：{{age}}</h2>
		<button @click="showName">点我提示学生名</button>
    </div>
</template>

<script>
    // 组件交互相关的代码（数据、方法等）
     export default {
            name: 'MyStudent',            
            // el:'#root', //组件定义时，一定不要写el配置项，因为最终所有的组件都要被一个vm管理，由vm决定服务于哪个容器。
            data() {
                return {
                    name: '张三',
                    age: 18
                }
            },
            methods: {
                showName() {
                    alert(this.name)
                }
            }
        }
        
</script>

<style>
    /* 组件的样式 */
    .demo {
        background-color: orange;
    }
</style>