//该文件用于创建整个应用的路由器
import VueRouter from "vue-router";
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import HomeNews from '../pages/HomeNews'
import HomeMessage from '../pages/HomeMessage'
import MessageDetail from '../pages/MessageDetail'
//创建一个路由器
export default new VueRouter({
  routes:[
    {
      name: 'guanyu',
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'news',
          component: HomeNews
        },
        {
          path: 'message',
          component: HomeMessage,
          children: [
            {
              name: 'xiangqing',
              path: 'detail',
              component: MessageDetail
            },
          ]
        }
      ]
    },
  ]
})

