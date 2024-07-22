<template>

    <div>
        <h4>* 상세페이지 *</h4>
        <h5>{{ blogData[$route.params.id].title }}</h5>
        <p>{{ blogData[$route.params.id].content }}</p>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'BlogDetail', // 이름은 마음대로 작명 가능
    props : {
        blogData : Array
    }
}
</script>

<style>
</style>