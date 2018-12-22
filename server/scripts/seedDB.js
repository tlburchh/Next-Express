const mongoose = require("mongoose");
const db = require("../models");

// This file seeds our database

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Bruvue", { useNewUrlParser: true });

  const beersSeed = [
  
  ];

  const notesSeed = [
    {
      name: 'note name',
      note: 'I am a note'
    }
  ];

//seed initial data
db.Beers.deleteMany({}).then(
  db.Beers.insertMany(beersSeed).then(resp => {
    console.log("Added beers: " + resp);
  }).catch(err => {
      console.log("Error inserting beers");
  }))
