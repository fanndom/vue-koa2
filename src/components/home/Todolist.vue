<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <TodoHeader @checkAllChange="checkAllChange" :todoList="todoList"></TodoHeader>
    </div>
    <div class="text item">
      <TodoMain :todoList="todoList" @delItem="delItem" @chackActive="chackActive"></TodoMain>
    </div>
    <div class="box-border"></div>
    <div>
      <TodoFooter :todoList="todoList"></TodoFooter>
    </div>
  </el-card>
</template>

<script>
import TodoHeader from "./todolistchildren/TodoHeader.vue";
import TodoMain from "./todolistchildren/TodoMain.vue";
import TodoFooter from "./todolistchildren/TodoFooter.vue";
export default {
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter
  },
  name: "Todolist",
  props: {
    msg: String
  },
  data () {
    return {
      checkAll: false,
      todoList: [
        {
          title: "star this repository",
          complete: false
        },
        {
          title: "fork this repository",
          complete: false
        },
        {
          title: "follow author",
          complete: false
        },
        {
          title: "vue-admin",
          complete: false
        },
        {
          title: "vue",
          complete: false
        },
        {
          title: "element-ui",
          complete: false
        },
        {
          title: "axios",
          complete: true
        },
        {
          title: "webpack",
          complete: true
        }
      ],
      Active: [],
      inComplete: []
    }
  },
  methods: {
    checkAllChange(data) {
      this.checkAll = data
      for (let i in this.todoList) {
        this.todoList[i].complete = this.checkAll
      }
    },
    delItem(index) {
      this.todoList.splice(index, 1)
    },
    chackActive(index) {
      // this.Active = this.todoList.filter(item => {
      //   return item.complete
      // })
      // this.inComplete = this.todoList.filter(item => {
      //   return !item.complete
      // })
      // this.Active.push(this.todoList[index])
      // this.inComplete.splice(this.Active.length-1,1)
      // console.log(this.Active);
      // console.log(this.inComplete);
    }
  },
  mounted() {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.box-card {
  text-align: left;
}
.box-border {
  width: 100%;
  height: 1px;
  background: #d8d8d8;
    margin: 16px 0;
}
</style>
