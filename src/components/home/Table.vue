<template>
  <el-table
          :data="tableData"
          style="width: 100%">
    <el-table-column
            prop="Order_No"
            label="Order_No">
    </el-table-column>
    <el-table-column
            prop="price"
            label="price">
    </el-table-column>
    <el-table-column
            fixed="right"
            label="status"
            width="100">
      <template slot-scope="scope">
        <el-tag type="success" v-if="scope.row.status === 1">success</el-tag>
        <el-tag type="danger" v-else>pending</el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "Table",
  props: {
    msg: String
  },
  data () {
    return {
      tableData: [
        {
          Order_No: "4042b6Bb-Ef7E-5Ca2-9A5c-1F2b9e",
          price: "12,035.3",
          status: 0
        },{
          Order_No: "db2FD0BB-03Eb-cB68-E47a-FB8f5A",
          price: "3,469.5",
          status: 0
        },{
          Order_No: "e9E550AF-9712-f1CB-3Ed9-bd6b64",
          price: "3,380.5",
          status: 1
        },{
          Order_No: "F5bD99d5-eA64-Cfad-A8fb-cFD3e4",
          price: "7,334.98",
          status: 1
        },{
          Order_No: "1BdE5d4A-fd26-3eB4-bD68-0d5ef1",
          price: "10,852.44",
          status: 0
        },{
          Order_No: "DDA4dd0B-dB69-8eC9-f849-F91a8e",
          price: "5,335.32",
          status: 1
        },{
          Order_No: "aeeC3425-0D70-b2eF-76B5-5298D2",
          price: "4,874.3",
          status: 1
        },
      ]
    }
  },
  methods: {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
