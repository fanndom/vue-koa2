<template>
  <div class="block">
    <el-card class="box-card">
      <div class="item" v-for="(item,index) in recycleBin">
        <div class="text">
          <span>{{item.name}}</span>
          <div class="right">
            <span class="time">{{item.time}}</span>
            <div>
              <el-button size="small" type="warning" @click="reduction(index)">还原</el-button>
            </div>
          </div>
        </div>
        <el-divider></el-divider>
      </div>
      <div class="allready">
        <el-button v-if="recycleBin.length>0" type="info" size="small" @click="emptyTrash">清空回收站</el-button>
        <span class="notime" v-else>暂无消息</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Recyclebin",
  props: {
    recycleBin: {
      type: Array,
      default: []
    }
  },
  data () {
    return {

    }
  },
  methods: {
    reduction(index) {
      this.$emit("reduction", index)
    },
    emptyTrash() {
      this.$emit("emptyTrash")
    }
  }
};
</script>

<style scoped lang="scss">
.text {
  display: flex;
  justify-content: space-between;
  line-height: 40px;
}

.right {
  display: flex;
  margin: 0 10px !important;
  .time {
    margin-right: 20px;
    font-size: 14px;
  }
}
.el-divider {
  margin: 16px 0 !important;
}
.el-tag {
  width: 80px;
  height: 32px;
  font-size: 12px;
  line-height: 32px;
}
.allready {
  text-align: left;
}
.notime {
  color: #8f8f8f;
}
</style>
