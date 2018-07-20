<template>
  <div>
    <input type="text" v-on:keyup.enter="addTask" v-model="newTask"/>
    <button v-on:click="addTask">确认</button>
    <div>
      <ul>
        <li v-for="task in tasks" v-bind:class={finished:task.isFinished} v-on:click="finish(task)">{{task.content}}</li>
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
  methods: {
    addTask() {
      this.tasks.push({content: this.newTask, isFinished: false});
      this.newTask = '';
    },
    finish(task) {

      task.isFinished = !task.isFinished;
    }
  }
}
</script>
<style>
ul{
  list-style: circle;
  text-align: left;
  width: 400px;
  margin: 50px auto 0 auto;
}
.finished{
  text-decoration: line-through;
}
  .btn{
    margin-top: 40px;
  }
</style>
