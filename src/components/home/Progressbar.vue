<template>
  <div>
    <img src="../../assets/20190507162849.jpg" class="image">
    <div class="progress">
      <div>
        <span>Vue</span>
        <el-progress :percentage="70"></el-progress>
      </div>
      <div>
        <span>Html</span>
        <el-progress :percentage="100" status="success"></el-progress>
      </div>
      <div>
        <span>Css</span>
        <el-progress :percentage="54"></el-progress>
      </div>
      <div>
        <span>JavaScript</span>
        <el-progress :percentage="70"></el-progress>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Progressbar",
  props: {
    msg: String
  },
  data () {
    return {

    }
  },
  methods: {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.image {
  width: 100%;
  display: block;
}
.progress {
  padding: 24px 0;
  text-align: left;
  div {
    padding-bottom: 6px;
  }
}
</style>
