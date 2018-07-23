<template>
  <div id="app">
    <Title/>
    <Input/>
    <Content/>
  </div>
</template>

<script>

import Title from "./components/Title"
import Content from "./components/Content"
import Input from "./components/input";

export default {
  name: 'App',
  components: {
    Input,
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
