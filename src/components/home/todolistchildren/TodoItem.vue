<template>
  <li @mouseenter="enter" @mouseleave="leave">
    <label @click="chackActive">
      <div>
        <el-checkbox v-model="todos.complete"></el-checkbox>
      </div>
      <span>{{todos.title}}</span>
    </label>
    <div>
      <button v-if="flag" @click="delItem"><i class="el-icon-close"></i></button>
    </div>
  </li>

</template>

<script>
export default {
  name: "TodoItem",
  components: {},
  props: {
    todos: {
      type: Object,
      default: {}
    },
    index: {
      type: Number
    },
    checkAll: {
      type: Boolean
    }
  },
  data() {
    return {
      flag: false
    }
  },
  methods: {
    enter() {
      this.flag = true
    },
    leave() {
      this.flag = false
    },
    delItem() {
      // let {todos} = this
      // if (window.confirm(`确认删除${todos.title}吗?`)) {
        this.$emit("delItem", this.index)
      // }
    },
    chackActive() {
      this.$emit("chackActive", this.index)
    }
  },
  mounted() {

  },
  created() {

  },
  filters: {},
  computed: {

  },
  watch: {},
  directives: {}
}
</script>

<style scoped lang="scss">
li {
  list-style: none;
  height: 44px;
  line-height: 44px;
  padding: 0 5px;
  position: relative;
}
li label {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  width: 100%;
  span {
    margin-left: 20px;
  }
}
li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
li button {
  font-size: 18px;
  height: 100%;
  float: right;
  position: absolute;
  z-index: 100;
  right: 0;
  top: 0;
  border: none;
  background: none;
  &:hover {
    cursor: pointer;
    color: red;
  }
}
li:before {
  content: initial;
}

</style>