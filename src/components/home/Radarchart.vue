<template>
  <div>
    <div style="width:100%;">
      <ve-radar :data="chartData" style="width:100%;"></ve-radar>
    </div>
  </div>
</template>

<script>
import VeRadar from "v-charts/lib/radar.common"
export default {
  components: { VeRadar },
  name: "Radarchart",
  props: {
    msg: String
  },
  data () {
    return {
      chartData: {
        columns: ['name', 'sales', 'ministration', 'techology', 'delelopmer', 'marketing'],
        rows: [
          { 'name': 'Allocated Budget', 'sales': 141, 'ministration': 81, 'techology': 32, 'delelopmer': 67, 'marketing': 98 },
          { 'name': 'Expected Spending', 'sales': 112, 'ministration': 65, 'techology': 57, 'delelopmer': 32, 'marketing': 109 },
          { 'name': 'Actual Spending', 'sales': 131, 'ministration': 54, 'techology': 43, 'delelopmer': 77, 'marketing': 53 },
        ]
      }
    }
  },
  methods: {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  display: flex;
  justify-content: space-between;
}
.card>div {
  width: 20%;
  box-shadow: 0 0 10px #bec3c7;
  display: flex;
  padding: 16px 26px;
  justify-content: space-between;
  background: #fff;
  border-radius: 4px;
}
.content-left {
  width: 48px;
  height: 48px;
  margin-left: 16px;
  img {
    width: 100%;
  }
}
.content-right {
  p {
    margin-bottom: 10px;
    color: #8f8f8f;
  }
  span {
    font-size: 20px;
    color: #606060;
  }
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}
</style>
