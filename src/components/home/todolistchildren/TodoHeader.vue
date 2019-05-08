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

</style>