import axios from 'axios';
import Task from '../../models/Task';
import TaskList from '../../models/TaskList';

const state = {
  tasks: TaskList,
  task: new Task()
};

const getters = {
  allTasks: state => state.tasks
};

const actions = {
  async getTasks({ commit }) {
    const response = await axios.get(
      'http://127.0.0.1:8990/api/tasks'
    );

    commit('setTasks', response.data);
  },
  async addTasks({ commit }, Task) {
    const response = await axios.post(
      'http://127.0.0.1:8990/api/tasks',Task
    );

    commit('newTask', response.data);
  },
  async deleteTask({ commit }, id) {
    await axios.delete(`http://127.0.0.1:8990/api/tasks/${id}`);

    commit('removeTask', id);
  },
  async updateTask({ commit }, Task) {
    const response = await axios.put(
      `http://127.0.0.1:8990/api/tasks/${Task.id}`, Task
    );

    commit('updateTask', response.data);
  }
};

const mutations = {
  setTasks: (state, tasks) => (state.tasks = tasks),
  newTask: (state, task) => state.tasks.add(task),
  removeTask: (state, id) => state.tasks.remove(this.tasks.find({id: id})),
  updateTask: (state, task) => {
    const oldTask = this.tasks.find({id: task.id});
    this.tasks.replace(oldTask, task);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
