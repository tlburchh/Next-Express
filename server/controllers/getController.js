const db = require('../models');
module.exports = {

  beers: (req, res) => {
    console.log('get all beers');
    db.Beers.find()
    .then(beers => {
      res.json(beers);
    }).catch(err => {
      console.log(`Error: ${err}`);
      res.json({ message: 'Error getting all beers'})
    });
  },
  beerId: (req, res) => {
    console.log(`Getting beer by id: ${req.params.id}`);
    const id = req.params.id;
    db.Beers.findById(id).then(beer => {
      res.json(beer);
    }).catch(err => {
      console.log(`Error: ${err}`);
      res.json({ message: "Error getting beer..." });
    });   
  },
//notes
  notes: (req, res) => {
    console.log('get all notes');
    db.Notes.find()
    .then(notes => {
      res.json(notes);
    }).catch(err => {
      console.log(`Error: ${err}`);
      res.json({ message: 'Error getting all notes'})
    });
  },
  noteId: (req, res) => {
    console.log(`Getting note by id: ${req.params.id}`);
    const id = req.params.id;
    db.Notes.findById(id).then(note => {
      res.json(note);
    }).catch(err => {
      console.log(`Error: ${err}`);
      res.json({ message: "Error getting note..." });
    });   
  },
};
