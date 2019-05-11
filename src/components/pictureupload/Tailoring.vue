<template>
  <div>
    <el-button size="small" @click="toggleShow" type="primary">裁剪上传</el-button>
    <my-upload field="file"
      v-model="show"
      :width="300"
      :height="300"
      url="api/upload"
      img-format="png">
    </my-upload>
    <img :src="imgDataUrl">
  </div>
</template>

<script>
import myUpload from "vue-image-crop-upload"

export default {
  name: "Tailoring",
  components: {
    "my-upload": myUpload
  },
  props: {
    show: {
      type: Boolean
    },
    imgDataUrl: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  methods: {
    toggleShow() {
      this.$emit("toggleShow")
    }
  },
  mounted() {

  }
};
</script>

<style scoped lang="scss">

</style>
