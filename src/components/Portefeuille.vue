<script setup>
  import { ref } from 'vue'
  import Thumbnail from '@/components/Thumbnail.vue'

  const props = defineProps(['photos'])
  const photoIndex = ref()
  const popup = ref(false);

  function decIndex() {
    photoIndex.value--
    if (photoIndex.value < 0)
      photoIndex.value = props.photos.length - 1
  }
  function incIndex() {
    photoIndex.value++
    if (photoIndex.value >= props.photos.length)
      photoIndex.value = 0
  }
</script>

<template>
  <div v-if="popup" id="popup" @click.self="popup = false" @keyup.left="decIndex()" @keyup.right="incIndex()" tabindex="0" autofocus>
    <div class="text">
      <h2 v-if="photos[photoIndex].title">{{photos[photoIndex].title}}</h2>
      <h2 v-else>Image {{photos[photoIndex].filename}}</h2>
      <p v-if="photos[photoIndex].caption">{{photos[photoIndex].caption}}</p>
      <div class="nav-buttons">
        <a @click="decIndex()">Previous</a>
        <a @click="incIndex()">Next</a>
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
    /*
    display: grid;
    grid-auto-flow: row dense;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 0.75em;
    column-gap: 0.75em;
    */
    /*
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    height: 300px;
    max-width: 100%;
    row-gap: 0.75em;
    column-gap: 0.75em;
    */
    columns: 3 auto;
    column-gap: 0.75em;
  }

    #portefeuille .photo {
      cursor: pointer;
      margin: 0.2em 0;
      width: 100%;
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

