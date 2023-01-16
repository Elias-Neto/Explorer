const { Router } = require("express")
const userRoutes = require("./user.routes")
const movieNoteRoutes = require("./movieNote.routes")
const movieTagsRoutes = require("./movieTags.routes")

const routes = Router()

routes.use("/users", userRoutes)
routes.use("/movie_notes", movieNoteRoutes)
routes.use("/movie_tags", movieTagsRoutes)

module.exports = routes
