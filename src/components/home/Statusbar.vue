<template>
  <div class="card">
    <div>
      <div class="content-left">
        <img src="../../assets/aa.svg" alt="">
      </div>
      <div class="content-right">
        <p>New Visits</p>
        <countTo :startVal='0' :endVal='102400' :duration='3000'></countTo>
      </div>
    </div>
    <div>
      <div class="content-left">
        <img src="../../assets/xao.svg" alt="">
      </div>
      <div class="content-right">
        <p>Messages</p>
        <countTo :startVal='0' :endVal='81212' :duration='3000'></countTo>
      </div>
    </div>
    <div>
      <div class="content-left">
        <img src="../../assets/rmb.svg" alt="">
      </div>
      <div class="content-right">
        <p>Purchases</p>
        <countTo :startVal='0' :endVal='9280' :duration='3000'></countTo>
      </div>
    </div>
    <div>
      <div class="content-left">
        <img src="../../assets/gou.svg" alt="">
      </div>
      <div class="content-right">
        <p>Shoppings</p>
        <countTo :startVal='0' :endVal='13600' :duration='3000'></countTo>
      </div>
    </div>
  </div>
</template>

<script>
import countTo from "vue-count-to"
export default {
  components: { countTo },
  name: "Statusbar",
  props: {
    msg: String
  },
  data() {
    return {

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
</style>
