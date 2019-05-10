<template>
  <div class="about">
    <template>
      <el-tabs v-model="activeName">
        <el-tab-pane :label="`未读消息(`+unreadMessage.length+`)`" name="first">
          <Unreadmessage :unreadMessage="unreadMessage" @already="already" @allReady="allReady"></Unreadmessage>
        </el-tab-pane>
        <el-tab-pane :label="`已读消息(`+readMessage.length+`)`" name="second">
          <Readmessage :readMessage="readMessage" @deletMessage="deletMessage" @deletAllMessage="deletAllMessage"></Readmessage>
        </el-tab-pane>
        <el-tab-pane :label="`回收站(`+recycleBin.length+`)`" name="third">
          <Recyclebin :recycleBin="recycleBin" @reduction="reduction" @emptyTrash="emptyTrash"></Recyclebin>
        </el-tab-pane>
      </el-tabs>
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import Unreadmessage from "@/components/tabpage/Unreadmessage.vue";
import Readmessage from "@/components/tabpage/Readmessage.vue";
import Recyclebin from "@/components/tabpage/Recyclebin.vue";

export default {
  name: "tabpage",
  components: {
    Unreadmessage,
    Readmessage,
    Recyclebin
  },
  data() {
    return {
      activeName: "first",
      allMessage: [
        //全部信息
        {
          id: 1,
          name: "【系统消息】 该系统将于今晚凌晨2点到5点进行升级维护",
          time: "2018-4-19 20:00:00",
          alreadyRead: false
        },
        {
          id: 2,
          name: "今晚12点整发大红包，先到先得",
          time: "2018-4-19 21:00:00",
          alreadyRead: false
        },
        {
          id: 3,
          name: "会打开始打是那么的，很快就撒都不",
          time: "2018-4-20 20:00:00",
          alreadyRead: true
        }
      ],
      readMessage: [], //已读消息
      unreadMessage: [], //未读消息
      recycleBin: [] //回收站
    }
  },
  methods: {
    //获取初始已读和未读
    getReadMessage() {
      this.readMessage = this.allMessage.filter(item => {
        return item.alreadyRead === true
      })
      this.unreadMessage = this.allMessage.filter(item => {
        return item.alreadyRead === false
      })
    },
    //标记单个已读
    already(id) {
      // 修改全部消息里的alreadyRead
      for (let i of this.allMessage.values()) {
        if (i.id === id) {
          i.alreadyRead = true
        }
      }
      // 过滤已读消息
      this.readMessage = this.allMessage.filter(item => {
        return item.alreadyRead === true
      })
      // 过滤未读消息
      this.unreadMessage = this.allMessage.filter(item => {
        return item.alreadyRead === false
      })
    },
    //标记全部已读
    allReady() {
      this.allMessage = this.allMessage.filter(item => {
        return item.alreadyRead = true
      })
      //过滤已读消息
      this.readMessage = this.allMessage.filter(item => {
        return item.alreadyRead === true
      })
      //过滤未读消息
      this.unreadMessage = []
    },
    //删除单个已读
    deletMessage(id) {
      for (let i of this.readMessage.entries()) {
        if (i[1].id === id) {
          this.recycleBin.push(this.readMessage[i[0]])
          this.readMessage.splice(i[0],1)
        }
      }
    },
    //删除全部已读
    deletAllMessage() {
      this.recycleBin = this.readMessage
      this.readMessage = []
    },
    //还原
    reduction(index) {
      this.readMessage.push(this.recycleBin[index])
      this.recycleBin.splice(index,1)
    },
    //清空回收站
    emptyTrash() {
      this.recycleBin = []
    }
  },
  mounted() {
    this.getReadMessage()
  }
};
</script>

<style scoped lang="scss">
.about {
  height: 800px;
}
</style>