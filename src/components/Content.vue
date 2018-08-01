<template>
  <div>
    <div>
      <ul>
        <li v-for="task in tasks" v-bind:class={finished:task.isFinished} v-on:click="finish(task.content)">{{task.content}}
        </li>
      </ul>
    </div>
    <div v-bind:class={btn:true}>
      <button>全部</button>
      <button>已完成</button>
      <button>未完成</button>
    </div>
  </div>
</template>
<script>
  // import Bus from './bus';
  import store from '../store/store';

  export default {
    name: 'Content',
    computed: {
      tasks() {
        return store.state.tasks
      }
    },

    methods: {

      finish(name) {
        store.commit('deleteTask',name);
      }
    },
    store
  }
</script>
<style>
  ul {
    list-style: circle;
    text-align: left;
    width: 400px;
    margin: 50px auto 0 auto;
  }

  .finished {
    text-decoration: line-through;
  }

  .btn {
    margin-top: 40px;
  }
</style>
