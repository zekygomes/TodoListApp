<template>
  <div class="content">
    <h1>Todo List App</h1>
    <div v-if="isEmpty">
      <el-alert
        title="Não há tarefas cadastradas."
        type="info"
        :center="true"
        show-icon
        :closable="false">
      </el-alert>
      </div>
      <div v-else>
        <el-table
          :data="tasks"
          :row-class-name="tableRowColor">
          <el-table-column
            prop="title"
            label="Título">
          </el-table-column>
          <el-table-column
            label="Data">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{getDate(scope.row.date)}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="Apagar">
            <template slot-scope="scope">
              <el-button type="danger"
                icon="el-icon-delete"
                @click="removeTask(scope.row)" 
                circle
                size="small">
              </el-button>
            </template>
          </el-table-column>
          <el-table-column
            label="Check">
            <template slot-scope="scope">
              <el-button
                type="success"
                icon="el-icon-check"
                circle @click="isDone(scope.row)"
                size="small">
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div>
      <el-row type="flex" justify="center" class="counterSection">
        <el-col :span="4">
          Finalizadas :
        </el-col>
        <el-col :span="2">
          {{done}}
        </el-col>
        <el-col :span="3">
          Total :
        </el-col>
        <el-col :span="2">
          {{total}}
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import moment from 'moment';
  import Task from '../models/Task';

  export default {
    name: 'TodoList',
    data() {
      return {
        task: Task,
      }
    },
    methods: {
      ...mapActions(['setTasks', 'deleteTask', 'updateTask']),
      ...mapGetters(['countTasksIsDone', 'countTasks']),
      
      removeTask(task) {
        this.deleteTask(task.id)
      },

      isDone(task) {
        task.done = !task.done;
        this.updateTask(task)
      },

      tableRowColor({row}) {

        if (row.done === true) {
          return 'success-row';
        } else {
          return 'warning-row'
        }
      },

      getDate (data) {
        return moment(data).format('DD/MM/YYYY')
      }
    },
    computed: {
      ...mapGetters({
        'tasks': 'allTasks'
      }),
      done() {
        return this.countTasksIsDone();
      },
      total() {
        return this.countTasks();
      },
      isEmpty() {
        return this.countTasks() === 0;
      },
    },
    created() {
      this.setTasks();
    }
  }
</script>

<style>
.content {
  text-align: center;
}

.wrongNotification {
  margin-bottom: 0.2rem;
  width: 80%;
  margin-left: 10%;
  text-align: center
}

div.cell {
  text-align: center;
}

.counterSection {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>