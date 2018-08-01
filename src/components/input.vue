<template>
  <div>
    <input type="text" v-on:keyup.enter="addTask()" v-model="newTask"/>
    <button v-on:click="addTask">确认</button>
  </div>
</template>
<script>
  // import Bus from './bus';
import store from '../store/store';

  export default {
    name:'Input',
    data(){
      return {
        newTask:''
      }
    },
    methods:{
    addTask(){
      console.log(this);
      store.commit('addTask',this.newTask);
      this.newTask="";
    }
    }
  }
</script>
