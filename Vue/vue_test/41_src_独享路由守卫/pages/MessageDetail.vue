<template>
  <ul>
    <li>消息编号：{{id}}</li>
    <li>消息标题：{{title}}</li>
  </ul>
</template>

<script>
  export default {
    name: 'MessageDetail',
    props: ['id', 'title']
    
    
  }
</script>