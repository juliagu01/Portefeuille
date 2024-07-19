<script setup>
  const props = defineProps(['filename'])

  function retrieveSrc() {
    try {
      return require(`@/assets/DSC_${props.filename}.jpg`)
    }
    catch (error) {
      return ""
    }
  }
</script>

<template>
  <!--<div class="photo">-->
  <img :src="retrieveSrc()" :alt="filename" class="photo" />
  <!--</div>-->
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .photo {
    background-color: #f0f0f0;
    /*border-radius: 10px;*/
    box-sizing: border-box;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }

    .photo:hover {
      background-color: lightgray;
    }
</style>

