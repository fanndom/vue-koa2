<template>
  <div>
    <div style="width:100%;">
      <ve-line :data="chartData" style="width:100%;"></ve-line>
    </div>
  </div>
</template>

<script>
import VeLine from "v-charts/lib/line.common"
export default {
  components: { VeLine },
  name: "Linechart",
  props: {
    msg: String
  },
  data () {
    return {
      chartData: {
        columns: ['日期', 'expected', 'actual'],
        rows: [
          { '日期': 'Mon', 'expected': 141, 'actual': 81 },
          { '日期': 'Tue', 'expected': 222, 'actual': 181 },
          { '日期': 'Wed', 'expected': 41, 'actual': 33 },
          { '日期': 'Thu', 'expected': 91, 'actual': 77 },
          { '日期': 'Fri', 'expected': 221, 'actual': 102 },
          { '日期': 'Sat', 'expected': 83, 'actual': 112 },
          { '日期': 'Sun', 'expected': 188, 'actual': 141 }
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
