<template>
  <div>
    <div>
      <Statusbar></Statusbar>
    </div>
    <el-card class="box-card new-box-card" style="margin-top:20px;">
      <div class="text item">
        <Linechart></Linechart>
      </div>
    </el-card>
    <div class="card" style="margin-top:20px;">
      <Radarchart style="width:29%;"></Radarchart>
      <Annularchart style="width:29%;"></Annularchart>
      <Barchart style="width:29%;"></Barchart>
    </div>
    <div class="card" style="margin-top:20px;">
      <el-card class="box-card new-box-card" style="width:48%;">
        <Table></Table>
      </el-card>
      <Todolist style="width:25%;"></Todolist>
      <el-card class="box-card new-box-card" style="width:25%;">
        <Progressbar></Progressbar>
      </el-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Statusbar from "@/components/home/Statusbar.vue";
import Linechart from "@/components/home/Linechart.vue";
import Radarchart from "@/components/home/Radarchart.vue";
import Annularchart from "@/components/home/Annularchart.vue";
import Barchart from "@/components/home/Barchart.vue";
import Table from "@/components/home/Table.vue";
import Todolist from "@/components/home/Todolist.vue";
import Progressbar from "@/components/home/Progressbar.vue";

export default {
  name: "home",
  components: {
    Statusbar,
    Linechart,
    Radarchart,
    Annularchart,
    Barchart,
    Table,
    Todolist,
    Progressbar
  }
};
</script>
<style scoped lang="scss">
.card {
  display: flex;
  justify-content: space-between;
}
</style>