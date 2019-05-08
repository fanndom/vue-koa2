<template>
  <div>
    <div class="todo-footer">
      <span>{{completeCount}} items left</span>
<!--      <button class="btn btn-danger" @click="delAll" v-if="completeCount">清除已完成任务</button>-->
    </div>
<!--    {{todoArr}}-->
  </div>

</template>

<script>
export default {
  name: "TodoFooter",
  components: {},
  props: {
    todoList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      checkAll: false
    }
  },
  methods: {
    delAll () {
      let todos = this.todoList.filter(item => {
        return !item.complete
      })
      this.$emit('delAll', todos)
    }
  },
  mounted() {

  },
  created() {

  },
  filters: {},
  computed: {
    completeCount () {
      let arr = this.todoList.filter(item => {
        return item.complete === true
      })
      return arr.length
    },
    todoArr () {
      return this.$store.state.todoList
    }
  },
  watch: {},
  directives: {}
}
</script>

<style scoped lang="scss">
.todo-footer {
  font-size: 12px;
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>