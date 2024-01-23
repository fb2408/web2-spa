<template>
  <div class="cont">
    <h1 class="text">Sorry, {{ $route.params.catchAll }} is not found.</h1>
    Try <router-link to="/">home</router-link>
  </div>
</template>
<style scoped>
div {
  text-align: center;
}
.cont {
  height:50rem;
  width:100%;
  color: white;
}

.text {
  color: white;
}
</style>
