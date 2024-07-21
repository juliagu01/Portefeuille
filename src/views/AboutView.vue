<script setup>
  import Thumbnail from '@/components/Thumbnail.vue'
</script>

<template>
  <div id="about-view">
    <div class="about-content content">
      <Thumbnail id="self" filename="IMG_2751.jpg" />
      <div class="text">
        <h3>Programmer by day, photographer by night.</h3>
        <p>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.</p>
      </div>
      <h3 id="email">[firstname].[lastname]01@gmail.com</h3>
      <div class="links">
        <a href="https://www.linkedin.com/in/julia-gu-017b9426a">LinkedIn</a>
        <a href="https://github.com/juliagu01">Github</a>
        <a href="https://www.pinterest.com/juliagu01">Pinterest</a>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #about-view {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: flex-end;
    z-index: -1;
  }

  .about-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 360px;
  }

  .text {
    margin: 1em 0;
  }

  p {
    text-align: justify;
    color: dimgray;
  }

  #email {
    margin: 0.2em 0;
  }
</style>

