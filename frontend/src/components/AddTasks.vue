<template>
  <div>
    <el-row>
      <el-col :span="3">
        Activity:
      </el-col>

      <el-col :span="8">
        <el-input 
          placeholder="Please input the activity"
          v-model="activity" 
          size="mini">
        </el-input>
      </el-col>
      <el-col :span="3">
        Date:
      </el-col>
      <el-col :span="8">
        <el-date-picker
          v-model="date"
          type="date"
          placeholder="Pick a day">
        </el-date-picker>
      </el-col>
    </el-row>
    <el-button 
      type="primary"
      icon="el-icon-circle-plus-outline"
      circle
      @click="addActivityMethod()">
    </el-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e) {
      e.preventDefault();
      this.addTodo(this.title);
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}

input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>
