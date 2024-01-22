<template>
  <div class="home">
    <h1>Welcome to home page of my ads SPA!</h1>
    <h1>clock: {{ clock }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clock: new Date().toLocaleTimeString("hr-HR"),
    };
  },
  mounted() {
    window.setInterval(() => {
      this.clock = new Date().toLocaleTimeString("hr-HR");
    }, 1000);
  },
};
</script>

<style scoped>
* {
  color: rgb(0, 72, 255);
}

.home {
  min-height: 100vh;
  width: 100%;
  text-align: center;
}
</style>
