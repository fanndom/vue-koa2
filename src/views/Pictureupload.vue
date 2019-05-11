<template>
  <div class="about">
    <el-card class="box-card">
      <div class="title">
        <span>支持拖拽</span>
      </div>
      <el-card class="box-card box-card-word">
        <div>
          <span>Element UI自带上传组件</span>
        </div>
      </el-card>
      <div>
        <Drag></Drag>
      </div>
      <div>
        <div class="title title1">
          <span>支持裁剪</span>
        </div>
        <el-card class="box-card box-card-word">
          <div>
            <span>vue-image-crop-upload</span>
          </div>
        </el-card>
        <Tailoring :show="show" :imgDataUrl="imgDataUrl" @toggleShow="toggleShow"></Tailoring>
      </div>
    </el-card>
  </div>
</template>

<script>
// @ is an alias to /src
import Drag from "@/components/pictureupload/Drag.vue";
import Tailoring from "@/components/pictureupload/Tailoring.vue";

export default {
  name: "Pictureupload",
  components: {
    Drag,
    Tailoring
  },
  data() {
    return {
      show: false,
      imgDataUrl: ''
    }
  },
  methods: {
    toggleShow() {
      this.show = !this.show
    }
  }
};
</script>

<style scoped lang="scss">
.box-card {
  text-align: left;
}
.title {
  font-size: 22px;
  font-weight: 500;
  padding-bottom: 20px;
  color: #585858;
}
.box-card-word {
  background: #e9eef3;
  box-shadow: none;
  margin-bottom: 20px;
}
.title1 {
  margin-top: 20px;
}
</style>