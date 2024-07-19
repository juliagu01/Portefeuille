<script setup>
  import { ref } from 'vue'
  import Thumbnail from '@/components/Thumbnail.vue'

  const projects = ref([
    {
      name: 'Placeholders',
      imgs: ['0418', '0270', '0453']
    },
    {
      name: 'For fun',
      blurb: 'Just because.',
      imgs: ['2818']
    },
  ])
</script>

<template>
  <div id="home-view">
    <div v-for="p in projects" :key="p" class="project">
      <div class="content project-content">
        <div class="text">
          <h2>{{p.name}}</h2>
          <p v-if="p.blurb">{{p.blurb}}</p>
          <a>Explore</a>
        </div>
        <Thumbnail :filename="p.imgs[0]" />
      </div>
      <hr />
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .photo {
    height: 250px;
  }

  .project-content {
    display: flex;
    justify-content: space-between;
    column-gap: 3em;
    align-items: center;
  }
</style>

