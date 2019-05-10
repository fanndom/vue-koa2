const router = require("koa-router")();
const newGoods = require("../newGoods");
const multer = require('koa-multer')

router.get("/json", async ctx => {
  ctx.body = {
    code: 200,
    data: newGoods
  }
})

//加载koa-multer模块
//文件上传
//配置
let storage = multer.diskStorage({
  //文件保存路径
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  //修改文件名称
  filename: function (req, file, cb) {
    let fileFormat = (file.originalname).split(".");
    cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
  }
})
//加载配置
let upload = multer({storage: storage});
//路由
router.post('/upload', upload.single('file'), async (ctx, next) => {
  ctx.body = {
    filename: ctx.req.file.filename,
    path: ctx.req.file.path//返回文件名
  }
})

module.exports = router
