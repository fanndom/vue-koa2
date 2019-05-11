<template>
  <div class="about">
    <div class="top">
      <el-button type="danger" size="small">查看</el-button>
      <el-button type="primary" size="small">发布</el-button>
    </div>
    <div>
      <Articleinformation :judgement="judgement" v-if="flag === true"></Articleinformation>
      <Informationview v-else></Informationview>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Articleinformation from "@/components/publisharticles/Articleinformation.vue"
import Informationview from "@/components/publisharticles/Informationview.vue"

export default {
  name: "Publisharticles",
  components: {
    Articleinformation,
    Informationview
  },
  data() {
    return {
      flag: true
    }
  },
  methods: {
    judgement() {
      this.flag = !this.flag
    }
  }
};
</script>

<style scoped lang="scss">
.about {
  background: #fff;
}

.about>div {
  margin-bottom: 20px;
}
.top {
  width: 100%;
  height: 50px;
  background: #3f644d;
  text-align: right;
  line-height: 50px;
}
.top>button:nth-child(2) {
  margin-left: 20px;
  margin-right: 50px;
}
</style>