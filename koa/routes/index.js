const router = require("koa-router")();
const newGoods = require("../newGoods");

router.get("/json", async ctx => {
  ctx.body = {
    code: 200,
    data: newGoods
  }
})

module.exports = router
