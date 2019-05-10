<template>
  <div class="block">
    <el-card class="box-card">
      <div class="item" v-for="(item,index) in readMessage">
        <div class="text">
          <span>{{item.name}}</span>
          <div class="right">
            <span class="time">{{item.time}}</span>
            <div>
              <el-button type="danger" size="small" plain @click="deletMessage(item.id)">删除</el-button>
            </div>
          </div>
        </div>
        <el-divider></el-divider>
      </div>
      <div class="allready">
        <el-button v-if="readMessage.length>0" type="danger" size="small" @click="deletAllMessage">删除全部</el-button>
        <span class="notime" v-else>暂无未读消息</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Readmessage",
  props: {
    readMessage: {
      type: Array,
      default: []
    }
  },
  data () {
    return {

    }
  },
  methods: {
    deletMessage(id) {
      this.$emit("deletMessage",id)
    },
    deletAllMessage() {
      this.$emit("deletAllMessage")
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
    font-size: 14px;
    margin-right: 20px;
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
