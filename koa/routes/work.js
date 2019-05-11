const router = require("koa-router")();
const Work = require("../models/Work");

router.prefix("/work");

router.post("/release", async ctx => {
  let newWork = new Work(ctx.request.body);
  await newWork
    .save()
    .then(() => {
      ctx.body = {
        code: 200,
        message: "发布成功",
        data: newWork
      };
    })
    .catch(error => {
      ctx.body = {
        code: 500,
        message: error
      };
    });
});

module.exports = router;
