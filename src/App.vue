<template>
  <div id="app">
 <Title/>
    <Input/>
  </div>
</template>

<script>

import Title from "./components/Title";
import Input from "./components/Input";

export default {
  name: 'App',
  components: {
    Input,
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
