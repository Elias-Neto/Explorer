const { Router } = require("express")
const UsersController = require("../controllers/UsersController")
const ensureAuthentication = require("../middlewares/ensureAuthentication")
const multer = require("multer")
const uploadConfig = require("../configs/upload")
const UsersAvatarController = require("../controllers/UsersAvatarController")

const userRoutes = Router()
const usersController = new UsersController()
const upload = multer(uploadConfig.MULTER)
const usersAvatarController = new UsersAvatarController()

userRoutes.post("/", usersController.create)
userRoutes.put("/", ensureAuthentication, usersController.update)
userRoutes.patch(
  "/avatar",
  ensureAuthentication,
  upload.single("avatar"),
  usersAvatarController.update
)
userRoutes.get("/", ensureAuthentication, usersController.show)

module.exports = userRoutes
