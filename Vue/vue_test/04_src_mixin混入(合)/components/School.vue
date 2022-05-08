<template>
    <div>
        <!-- 组件的结构 -->
        <h2 @click="showName">学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
    </div>		
</template>

<script>

    import {mixin} from '../mixin'
    // 组件交互相关的代码（数据、方法等）
     export default {
            name: 'MySchool',            
            // el:'#root', //组件定义时，一定不要写el配置项，因为最终所有的组件都要被一个vm管理，由vm决定服务于哪个容器。
            data() {
                return {
                    name: '尚硅谷',
                    address: '北京昌平'
                }
            },
            mixins: [mixin]
            
        }
        
</script>