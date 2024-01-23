<template>
  <div class="home">
    <h1>Welcome to home page of my movies SPA!</h1>
    <div class="clock-div">
      <h1 class="clock">{{ clock }}</h1>
    </div>

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
  color: #63E6BE;
}

.clock {
  font-size: 120px;
  opacity: 1;
}
.clock-div {
  text-align: center;
  height: 10rem;
  background-color: black;
  opacity: 0.25;
  margin-left: 300px;
  margin-right: 300px;

}
.home {
  min-height: 100vh;
  width: 100%;
  text-align: center;
}
</style>
