<template>
  <div id="app">
    <nav>
      <div id="page-links">
        <router-link v-for="route in $router.options.routes" :key="route.path" :to="route.path">{{ route.name }}</router-link>
      </div>
    </nav>
    <hr />
    <router-view />
  </div>
</template>

<script>
</script>

<style>
  body {
    font-family: "Bebas Neue", sans-serif;
    font-size: 24px;
    box-sizing: border-box;
    margin: 0;
    padding: 8px;
    width: 100vw;
    overflow-x: hidden;
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #page-links {
    display: inline-flex;
    column-gap: 1em;
    margin: 10px 0px;
  }

  a {
    color: gray;
    text-decoration: none;
    font-size: 20px;
    cursor: pointer;
  }

  .content {
    margin: auto;
    width: 700px;
    padding: 1em;
  }
</style>

