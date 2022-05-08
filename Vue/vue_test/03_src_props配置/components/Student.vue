<template>
    <div>
        <!-- 组件的结构 -->
        <h1>{{msg}}</h1>
        <h2>学生名称：{{name}}</h2>
		<h2>学生年龄：{{myAge}}</h2>
		<button @click="updateAge">修改年龄</button>
    </div>
</template>

<script>
    // 组件交互相关的代码（数据、方法等）
     export default {
            name: 'MyStudent',            
            // el:'#root', //组件定义时，一定不要写el配置项，因为最终所有的组件都要被一个vm管理，由vm决定服务于哪个容器。
            data() {
                return {
                    msg: '我是一个学生',
                    myAge: this.age
                }
            },
            //简单声明接收
            props: ['name', 'age'],

            // 接收的同时对数据进行类型限制
            /* props: {
                name: String,
                age: Number
            }, */

            // 接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
           /*  props: {
                name: {
                    type: String,   //name的类型是字符串
                    required: true  //name是必要的
                },
                age: {
                    type: Number,
                    default: 99 //默认值
                }
            }, */
            methods: {
                updateAge() {
                    this.myAge++
                }
            }
        }
        
</script>

