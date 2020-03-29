import axios from 'axios';
import Task from '../../models/Task';

const state = {
  tasks: [Task]
};

const getters = {
  allTasks: state => state.tasks,
  countTasksIsDone: state => state.tasks.filter(task => task.done === true).length,
  countTasks: state => state.tasks.length

};

const actions = {
  async setTasks({ commit }) {
    const response = await axios.get(
      '/api/tasks/'
    );

    commit('setTasks', response.data);
  },
  async addTasks({ commit }, Task) {
    const response = await axios.post(
      process.env.URL_API +'/api/tasks/',Task
    );

    commit('newTask', response.data);
  },
  async deleteTask({ commit }, id) {
    await axios.delete(`/api/task/${id}/`);
    
    commit('removeTask', id);
  },
  async updateTask({ commit }, Task) {
    const response = await axios.put(
      `/api/task/${Task.id}/`, Task
    );

    commit('updateTask', response.data);
  }
};

const mutations = {
  setTasks: (state, tasks) => (state.tasks = tasks),
  newTask: (state, task) => state.tasks.add(task),
  removeTask: (state, id) => {
    state.tasks = state.tasks.filter(task => task.id !== id);
  },
  updateTask: (state, updatedTask) => {
    const index = state.tasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      state.tasks.splice(index, 1, updatedTask);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
