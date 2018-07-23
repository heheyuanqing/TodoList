<template>
  <div>
    <div>
      <ul>
        <li v-for="task in tasks" v-bind:class={finished:task.isFinished} v-on:click="finish(task)">{{task.content}}
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
  import Bus from './bus';

  export default {
    name: 'Content',
    data() {
      return {
        tasks: [
          {
            content: "read books",
            isFinished: false
          }
        ],
        newTask: ''
      }
    },
    created() {
      Bus.$on('addTasks', (task) => {
        this.tasks.push(task);
      });
    },
    methods: {
      finish(task) {
        task.isFinished = !task.isFinished;
      }
    }
  }
</script>
<style>
  ul {
    list-style: circle;
    text-align: left;
    width: 400px;
    margin: 50px auto 0 auto;
  }

  .btn {
    margin-top: 40px;
  }
</style>
