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

</style>