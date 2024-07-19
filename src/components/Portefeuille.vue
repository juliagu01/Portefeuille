<script setup>
  import { ref } from 'vue'
  import Thumbnail from '@/components/Thumbnail.vue'

  const props = defineProps(['photos'])
  const photoIndex = ref()
  const popup = ref(false);
</script>

<template>
  <div v-if="popup" id="popup">
    <div class="text">
      <h2>Image {{photos[photoIndex].filename}}</h2>
      <p v-if="photos[photoIndex].caption">{{photos[photoIndex].caption}}</p>
      <div class="nav-buttons">
        <a @click="photoIndex ? photoIndex-- : 0">Previous</a>
        <a @click="photoIndex < photos.length-1 ? photoIndex++ : 0">Next</a>
        <a @click="popup = false">Close</a>
      </div>
    </div>
    <Thumbnail :filename="photos[photoIndex].filename" />
  </div>
  <div v-else id="portefeuille" class="content">
    <Thumbnail v-for="(p, index) in photos" :key="p.filename" :filename="p.filename" @click="photoIndex = index; popup = true" />
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #portefeuille {
    display: grid;
    grid-auto-flow: row dense;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 0.75em;
    row-gap: 0.75em;
  }

    #portefeuille .photo {
      cursor: pointer;
    }

  #popup {
    position: fixed;
    left: 0;
    top: 0;
    background-color: white;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    box-sizing: border-box;
    padding: 2em;
    display: flex;
    column-gap: 3em;
    justify-content: space-between;
    align-items: flex-end;
  }

  .text {
    min-width: 300px;
  }

  .nav-buttons {
    display: flex;
    column-gap: 1em;
  }
</style>

