import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  tasks:[
  ]
};

const mutation={
  addTask(state,task){
    state.tasks.push({content:task,isFinished:false});
  },
  deleteTask(state,taskName){
    state.tasks.map((task)=>{
      if(task.content === taskName){
        task.isFinished = !task.isFinished;
      }
    })
  }
};

const store = new Vuex.Store({
  state:state,
  mutations:mutation
});

export default store;
