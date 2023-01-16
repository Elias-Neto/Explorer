const { Router } = require("express")
const MovieTagsController = require("../controllers/MovieTagsController")

const tagRoutes = Router()
const movieTagsController = new MovieTagsController()

tagRoutes.get("/:user_id", movieTagsController.show)

module.exports = tagRoutes
