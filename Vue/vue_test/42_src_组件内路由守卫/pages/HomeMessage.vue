<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">

        <!-- 跳转路由并携带query参数，to的对象写法 -->
        <router-link :to="{
          name: 'xiangqing',
          query: {
            id: m.id,
            title: m.title
          }
        }">
          {{m.title}}
        </router-link>&nbsp;&nbsp;
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
        <!-- 跳转路由并携带params参数，to的对象写法 -->
        <!-- <router-link :to="{
          name: 'xiangqing',
          params: {
            id: m.id,
            title: m.title
          }
        }">
          {{m.title}}
        </router-link>&nbsp;&nbsp; -->
      </li>      
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'HomeMessage',
    data() {
      return {
        messageList: [
          {id:1,title:'消息001'},
          {id:2,title:'消息002'},
          {id:3,title:'消息003'}
        ]
      }
    },
    methods: {
      pushShow(m) {
        this.$router.push({
          name: 'xiangqing',
          query: {
            id: m.id,
            title: m.title
          }
        })
      },
      replaceShow(m) {
        this.$router.replace({
          name: 'xiangqing',
          query: {
            id: m.id,
            title: m.title
          }
        })
      }
    },
  }
</script>