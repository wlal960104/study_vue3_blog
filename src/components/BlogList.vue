<template>
    <div>
      <h5> {{ blogData.title }}</h5>
      <p>{{ blogData.date }}</p>

    </div>
</template>

<script>

export default {
    name: 'BlogList', // 이름은 마음대로 작명 가능
    props : {
        blogData : Object
    }


}
</script>

<style>

</style>