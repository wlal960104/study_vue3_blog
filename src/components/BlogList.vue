<template>
    <div>
        <div v-for="(a,i) in blogData" :key="i">
          <h5 @click="$router.push('/detail/' + i)"> {{ blogData[i].title }}</h5> <!-- router(페이지 이동관련)와 route(현재경로) 헷갈리지 않기-->
          <p>{{ blogData[i].date }}</p>
        </div>

<!--      <h5> {{ blogData[1].title }}</h5>-->
<!--      <p>{{ blogData[1].date }}</p>-->

<!--      <h5> {{ blogData[2].title }}</h5>-->
<!--      <p>{{ blogData[2].date }}</p>-->

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