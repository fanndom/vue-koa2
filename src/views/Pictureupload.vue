<template>
  <div class="about">
    <h1>图片上传</h1>
    <el-upload
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <div>
      <el-button size="small" @click="toggleShow" type="primary">裁剪上传</el-button>
      <my-upload field="file"
         v-model="show"
         :width="300"
         :height="300"
         url="api/upload"
         :params="params"
         :headers="headers"
         img-format="png">
      </my-upload>
      <img :src="imgDataUrl">
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import myUpload from 'vue-image-crop-upload';

export default {
  name: "Pictureupload",
  components: {
    'my-upload': myUpload
  },
  data() {
    return {
      show: false,
      imgDataUrl: ''
    }
  },
};
</script>

<style scoped lang="scss">

</style>