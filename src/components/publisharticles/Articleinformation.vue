<template>
  <el-form
    :rules="rules"
    :model="ruleForm"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm">
    <el-form-item label="文章标题" required prop="title">
      <el-input v-model="ruleForm.title"></el-input>
    </el-form-item>
    <el-form-item label="文章摘要" required prop="abstract">
      <el-input v-model="ruleForm.abstract"></el-input>
    </el-form-item>
    <div style="display: flex">
      <el-form-item label="作者" required prop="author">
        <el-input v-model="ruleForm.author"></el-input>
      </el-form-item>
      <el-form-item label="类目" required prop="region">
        <el-select placeholder="请选择" v-model="ruleForm.region">
          <el-option label="vue" value="vue"></el-option>
          <el-option label="react" value="reacts"></el-option>
          <el-option label="node.js" value="node.js"></el-option>
          <el-option label="性能优化" value="性能优化 "></el-option>
          <el-option label="JavaScript" value="JavaScript"></el-option>
          <el-option label="小程序" value="小程序"></el-option>
          <el-option label="工具" value="工具"></el-option>
          <el-option label="其他类" value="其他类"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="来源" required prop="source">
        <el-select placeholder="请选择来源" v-model="ruleForm.source">
          <el-option label="原创" value="原创"></el-option>
          <el-option label="转载" value="转载"></el-option>
          <el-option label="与他人合作" value="与他人合作"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="重要性" required prop="importance">
        <el-select placeholder="请选择" v-model="ruleForm.importance">
          <el-option label="1" value="1"></el-option>
          <el-option label="2" value="2"></el-option>
          <el-option label="3" value="3"></el-option>
          <el-option label="4" value="4"></el-option>
          <el-option label="5" value="5"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="发布时间">
        <el-form-item prop="date">
          <el-date-picker
            type="datetime"
            placeholder="选择日期"
            style="width: 100%;"
            v-model="ruleForm.date"
          ></el-date-picker>
        </el-form-item>
      </el-form-item>
    </div>
    <div>
      <Editingarticles></Editingarticles>
    </div>
    <div class="edit">
      <el-button type="primary" @click="submitForm('ruleForm')" size="small">发布</el-button>
    </div>
  </el-form>
</template>

<script>
import Editingarticles from "@/components/publisharticles/Editingarticles.vue";
export default {
  name: "Articleinformation",
  components: {
    Editingarticles
  },
  props: {
    // selectList: {
    //   type: Array,
    //   default: []
    // }
  },
  data () {
    return {
      ruleForm: {
        value: "", //内容
        title: "", //标题
        abstract: "", //摘要
        author: "", //作者
        category: "", //类目
        source: "", //来源
        importance: "", //重要性
        date: "", //发布时间
        delivery: false
      },
      rules: {
        title: [{ required: true, message: "请输入文章名称", trigger: "blur" }],
        abstract: [{ required: true, message: "请输入摘要内容", trigger: "blur" }],
        author: [{ required: true, message: "请输入作者", trigger: "blur" }],
        category: [{ required: true, message: "请选择类目", trigger: "change" }],
        source: [{ required: true, message: "请选择来源", trigger: "change" }],
        importance: [
          { required: true, message: "请选择重要性", trigger: "change" }
        ],
        date: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ]
      }
    }
  },
  methods: {
    /*submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },*/
    submitForm(formName) {
      //点击发布
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios
            .req('/api/work/release',{
              title: this.ruleForm.title,
              abstract: this.ruleForm.abstract,
              author: this.ruleForm.author,
              category: this.ruleForm.region,
              source: this.ruleForm.source,
              importance: this.ruleForm.importance,
              date: this.ruleForm.date
            })
            .then(res => {
              console.log(res);
              this.$message({
                message: "恭喜你发布成功",
                type: "success"
              })
              console.log(res.data);
              this.$store.state.article.push(res.data)
              this.$emit("judgement")
            })
            .catch(error => {
              console.log(error);
            })

          // console.log(this.$store.state.article)
          // this.$message({
          //   message: "恭喜你发布成功",
          //   type: "success"
          // });
          // this.$router.push("/see");
          // console.log(this.ruleForm)
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

  }
};
</script>

<style scoped lang="scss">
.el-form>div {
  margin-bottom: 20px;
  margin-right: 20px;
}
.edit {
  text-align: left;
  margin-left: 20px;
  button {
    margin-bottom: 50px;
  }
}
</style>
