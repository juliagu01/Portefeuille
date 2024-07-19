<script setup>
</script>

<template>
  <div id="home-view">
    <h1>Hi, I'm Julia Gu</h1>
    <h2>Photographer based in Los Angeles, CA</h2>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #home-view {
    position: absolute;
    top: 0px;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: -1;
  }

  h1, h2 {
    margin: 0.1em;
  }

  h1 {
    font-size: 54px;
  }

  h2 {
    color: dimgray;
  }
</style>

