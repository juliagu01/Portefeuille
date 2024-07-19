<script setup>
  import { ref } from 'vue'
  import Thumbnail from '@/components/Thumbnail.vue'

  const photos = ref([
    {
      filename: '0418',
      caption: 'Caption: lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
    },
    {
      filename: '2818',
      caption: 'Caption: lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
    },
    {
      filename: '0270',
    },
    {
      filename: '0453',
    },
  ])
  const photo = ref()
  const popup = ref(false);
  function showPopup(p) {
    photo.value = p;
    popup.value = true;
  }
</script>

<template>
  <div v-if="popup" id="popup" @click="popup = false">
    <div class="text">
      <h2>Image {{photo.filename}}</h2>
      <p v-if="photo.caption">{{photo.caption}}</p>
      <div class="nav-buttons">
        <a>Previous</a>
        <a>Next</a>
      </div>
    </div>
    <Thumbnail :filename="photo.filename" />
  </div>
  <div v-else id="portefeuille" class="content">
    <Thumbnail v-for="p in photos" :key="p.filename" :filename="p.filename" @click="showPopup(p)" />
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

