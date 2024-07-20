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
  <img :src="retrieveSrc()" :alt="filename" class="photo" />
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

