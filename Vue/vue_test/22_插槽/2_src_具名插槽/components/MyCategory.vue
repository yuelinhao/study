<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <slot name="center"></slot>
        <slot name="footer"></slot>
    </div>
</template>

<script>
    export default {
        name: 'MyCategory',
        props: ['title']
    }
</script>

<style scoped>
    .category {
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }

    h3 {
        text-align: center;
        background-color: orange;
    }
</style>