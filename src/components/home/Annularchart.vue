<template>
  <div>
    <div style="width:100%;">
      <ve-ring :data="chartData" :settings="chartSettings" style="width:100%;"></ve-ring>
    </div>
  </div>
</template>

<script>
import VeRing from "v-charts/lib/ring.common"
export default {
  components: { VeRing },
  name: "Annularchart",
  props: {
    msg: String
  },
  data () {
    this.chartSettings = {
      roseType: 'radius'
    }
    return {
      chartData: {
        columns: ['name', '访问用户'],
        rows: [
          { 'name': 'Industries', '访问用户': 141 },
          { 'name': 'Technology', '访问用户': 137 },
          { 'name': 'Forex', '访问用户': 87 },
          { 'name': 'Gold', '访问用户': 131 },
          { 'name': 'Forecasts', '访问用户': 99 }
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
