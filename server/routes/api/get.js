const router = require('express').Router();
const getController = require("../../controllers/getController");

//Get all saved beers
router.get('/beers', getController.beers);
//Get single saved beers
router.get('/beers/:id', getController.beerId);
//Get all saved notes
router.get('/notes', getController.notes);
//Get single saved note
router.get('/notes/:id', getController.noteId)
module.exports = router;