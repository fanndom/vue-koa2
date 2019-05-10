<template>
  <div class="all">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#344054"
        text-color="#fff"
        active-text-color="#ffd04b">
          <el-menu-item index="1" @click="gotoContent(navList.home,1)">
            <i class="el-icon-location"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="2" @click="gotoContent(navList.pagingform,2)">
            <i class="el-icon-menu"></i>
            <span slot="title">分页表格</span>
          </el-menu-item>
          <el-menu-item index="3" @click="gotoContent(navList.tabpage,3)">
            <i class="el-icon-document"></i>
            <span slot="title">标签页</span>
          </el-menu-item>
          <el-menu-item index="4" @click="gotoContent(navList.pictureupload,4)">
            <i class="el-icon-check"></i>
            <span slot="title">图片上传</span>
          </el-menu-item>
          <el-menu-item index="5" @click="gotoContent(navList.publisharticles,5)">
            <i class="el-icon-message"></i>
            <span slot="title">发布文章</span>
          </el-menu-item>
          <el-menu-item index="6" @click="gotoContent(navList.exportexcel,6)">
            <i class="el-icon-setting"></i>
            <span slot="title">导出excel</span>
          </el-menu-item>
          <el-menu-item index="7" @click="gotoContent(navList.exitsystem,7)">
            <i class="el-icon-delete"></i>
            <span slot="title">退出系统</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    msg: String
  },
  data() {
    return {
      navList: {
        home: "Sidebar",
        pagingform: "pagingform",
        tabpage: "tabpage",
        pictureupload: "pictureupload",
        publisharticles: "publisharticles",
        exportexcel: "exportexcel",
        exitsystem: "exitsystem"
      },
      defaultActive: 1
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    gotoContent(value,index) {
      this.defaultActive = index
      this.$router.push({
        name: value
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-menu-item {
  font-size: 12px;
  line-height: 60px;
  &:hover {
    cursor: pointer;
    background: #2d3849 !important;
  }
}
.icon {
  color: #acacac;
  margin-right: 10px;
}
</style>
