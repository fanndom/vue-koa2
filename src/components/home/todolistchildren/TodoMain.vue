<!--
<template>
  <div>
    <ul>
      <TodoItem v-for="(item, index) in todoList" @delItem="delItem" :key="item.title" :todos="item"
        :index="index" @chackActive="chackActive">
      </TodoItem>
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem"

export default {
  name: "TodoMain",
  components: {
    TodoItem
  },
  props: {
    todoList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {}
  },
  methods: {
    delItem(index) {
      this.$emit('delItem', index)
    },
    chackActive(index) {
      this.$emit('chackActive', index)
    }
  },
  mounted() {

  },
  created() {

  },
  filters: {},
  computed: {},
  watch: {},
  directives: {}
}
</script>

<style scoped lang="scss">

</style>-->

<template>
  <div>
    <ul>
      <li v-for="(item, index) in todoList" :key="item.title"
        @mouseenter="enter" @mouseleave="leave"
        :index="index">
        <label @click="chackActive(index)">
          <div>
            <el-checkbox v-model="item.complete"></el-checkbox>
          </div>
          <span>{{item.title}}</span>
        </label>
        <div>
          <button v-if="flag" @click="delItem(index)"><i class="el-icon-close"></i></button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "TodoMain",
  components: {
  },
  props: {
    todoList: {
      type: Array,
      default: []
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
    delItem(index) {
      // let {todos} = this
      // if (window.confirm(`确认删除${todos.title}吗?`)) {
      this.$emit("delItem", index)
      // }
    },
    chackActive(index) {
      this.$emit("chackActive", index)
    }
  },
  mounted() {

  },
  created() {

  },
  filters: {},
  computed: {},
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

