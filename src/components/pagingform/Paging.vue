<template>
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentChange"
      :page-sizes="[10, 40, 60, 80]"
      :page-size="sizeChange"
      layout="total, sizes, prev, pager, next, jumper"
      :total="selectList.length">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "Paging",
  props: {
    selectList: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      sizeChange: 10,
      currentChange: 1
    }
  },
  methods: {
    handleSizeChange(sizeChange) {
      // console.log(`每页 ${sizeChange} 条`);
      this.sizeChange = sizeChange
      this.$emit("sizeChange", sizeChange)
    },
    handleCurrentChange(currentChange) {
      console.log(`当前页: ${currentChange}`);
      this.sizeChange = currentChange
      this.$emit("currentChange", currentChange)
    }
  }
};
</script>

<style scoped lang="scss">
.block {
  margin-top: 20px;
}
</style>
