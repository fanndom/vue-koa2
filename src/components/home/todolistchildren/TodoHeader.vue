<template>
  <div>
    <el-checkbox v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
    <span style="float: right; padding: 3px 0">Todo List</span>
  </div>
</template>

<script>
export default {
  name: "TodoHeader",
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
    handleCheckAllChange() {
      this.$emit("checkAllChange", this.checkAll)
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