<template>
  <div class="card">
    <div class="new-visits">
      <div class="content-left">
        <img src="../assets/aa.svg" alt="">
      </div>
      <div class="content-right">
        <p>New Visits</p>
        <countTo :startVal='0' :endVal='102400' :duration='1000'></countTo>
      </div>
    </div>
<!--    <div class="new-visits">-->
<!--      <div class="content-left">-->
<!--        <img src="../assets/aa.svg" alt="">-->
<!--      </div>-->
<!--      <div class="content-right">-->
<!--        123-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="new-visits">-->
<!--      <div class="content-left">-->
<!--        <img src="../assets/aa.svg" alt="">-->
<!--      </div>-->
<!--      <div class="content-right">-->
<!--        123-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="new-visits">-->
<!--      <div class="content-left">-->
<!--        <img src="../assets/aa.svg" alt="">-->
<!--      </div>-->
<!--      <div class="content-right">-->
<!--        123-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
import countTo from "vue-count-to"
export default {
  components: { countTo },
  name: "Sidebar",
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
  width: 22%;
  box-shadow: 0 0 8px #bec3c7;
  display: flex;
  padding: 16px 10px;
  justify-content: space-between;
}
.content-left {
  width: 48px;
  height: 48px;
  img {
    width: 100%;
  }
}
</style>
