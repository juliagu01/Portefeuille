<script setup>
  import Portefeuille from '@/components/Portefeuille.vue';
  const props = defineProps(['photos'])
</script>

<template>
  <Portefeuille :photos="props.photos" />
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

