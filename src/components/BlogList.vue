<template>
    <div>
      <h5> {{ blogData[0].title }}</h5>
      <p>{{ blogData[0].date }}</p>

      <h5> {{ blogData[1].title }}</h5>
      <p>{{ blogData[1].date }}</p>

      <h5> {{ blogData[2].title }}</h5>
      <p>{{ blogData[2].date }}</p>

    </div>
</template>

<script>

export default {
    name: 'BlogList', // 이름은 마음대로 작명 가능
    props : {
        blogData : Array
    }


}
</script>

<style>

</style>