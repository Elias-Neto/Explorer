const { Router } = require("express")
const MovieNotesController = require("../controllers/MovieNotesController")

const movieNoteRoutes = Router()
const movieNotesController = new MovieNotesController()

movieNoteRoutes.post("/:user_id", movieNotesController.create)
movieNoteRoutes.delete("/:id", movieNotesController.delete)
movieNoteRoutes.get("/", movieNotesController.index)
movieNoteRoutes.get("/:id", movieNotesController.show)

module.exports = movieNoteRoutes
