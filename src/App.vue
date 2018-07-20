<template>
  <div id="app">
    <Title/>
    <Content/>
  </div>
</template>

<script>

import Title from "./components/Title"
import Content from "./components/Content"

export default {
  name: 'App',
  components: {
    Content,
    Title
  }
}
</script>

<style>
  #app {
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
