const { Router } = require("express")
const userRouter = require("./user.routes")
const noteRouter = require("./note.routes")
const tagRouter = require("./tag.routes")

const routes = Router()

routes.use("/users", userRouter)
routes.use("/notes", noteRouter)
routes.use("/tags", tagRouter)

module.exports = routes
