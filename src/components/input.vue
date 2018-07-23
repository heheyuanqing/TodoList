<template>
  <div>
    <input type="text" v-on:keyup.enter="addTask" v-model="newTask"/>
    <button v-on:click="addTask">确认</button>
  </div>
</template>
<script>
  import Bus from './bus';

  export default {
    name:'Input',
    data(){
      return {
        newTask:''
      }
    },
    methods:{
      addTask() {
        Bus.$emit('addTasks',{content: this.newTask, isFinished: false});
        this.newTask = '';
      }
    }
  }
</script>
