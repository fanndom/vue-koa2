<template>
  <div>
    <div class="about">
      <el-input
        v-model="search"
        @input="handleSelect(search)"
        size="large"
        placeholder="输入关键字搜索"/>
      <el-table
        :data="selectList
        .slice((currentChange - 1) * sizeChange,currentChange * sizeChange)"
        style="width: 100%">
        <el-table-column
          label="名称"
          prop="NAME"
          align="center">
        </el-table-column>
        <el-table-column
          label="商品编号"
          prop="GOODS_SERIAL_NUMBER"
          align="center">
        </el-table-column>
        <el-table-column
          label="原价"
          width="200px"
          prop="ORI_PRICE"
          align="center">
        </el-table-column>
        <el-table-column
          label="现价"
          width="200px"
          prop="PRESENT_PRICE"
          align="center">
        </el-table-column>
        <el-table-column
          label="操作"
          align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">修改</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <Paging :selectList="selectList" @sizeChange="handleSizeChange" @currentChange="handleCurrentChange"></Paging>
    </div>
    <div>
      <el-dialog title="" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="名称">
            <el-input v-model="tradeName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="原价">
            <el-input v-model="originalPrice" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="现价">
            <el-input v-model="presentPrice" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="handlemodify">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Paging from "@/components/pagingform/Paging.vue";

export default {
  name: "Pagingform",
  components: {
    Paging
  },
  data() {
    return {
      tableData: [],
      selectList: [],
      search: '',
      sizeChange: 10,
      currentChange: 1,
      form: {},
      dialogFormVisible: false,
      tradeName: "",
      originalPrice: "",
      presentPrice: "",
      index: ""
    }
  },
  methods: {
    handleSelect(val) {
      if (val !== '') {
        this.selectList = this.tableData.filter(item => {
          return item.NAME.indexOf(val) !== -1
        })
      } else {
        this.selectList = this.tableData
      }
    },
    handlemodify() {
      this.dialogFormVisible = false
      this.tableData[this.index].NAME = this.tradeName
      this.tableData[this.index].ORI_PRICE = this.originalPrice
      this.tableData[this.index].PRESENT_PRICE = this.presentPrice
    },
    handleEdit(index, row) {
      this.dialogFormVisible = true
      this.tradeName = row.NAME
      this.originalPrice = row.ORI_PRICE
      this.presentPrice = row.PRESENT_PRICE
      this.index = index
    },
    handleDelete(index) {
      this.tableData.splice(index + (this.currentChange-1) * this.sizeChange,1)
    },
    handleSizeChange(data) {
      this.sizeChange = data
    },
    handleCurrentChange(data) {
      console.log(data)
      this.currentChange = data
    }
  },
  mounted() {
    this.$axios
      .req("/api/json")
      .then(response => {
        this.selectList = this.tableData = response.data
        console.log(this.tableData);
      })
      .catch(err => {
        console.log(err);
      })
  },
  computed: {
  }
};
</script>

<style scoped lang="scss">
.el-table-column {
  text-align: center !important;
}
.el-input {
  margin-bottom: 20px;
  width: 240px;
}
.about {
  text-align: left;
}
</style>