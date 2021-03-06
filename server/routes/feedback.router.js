const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');


// Adds a new answer to the database.
router.post('/', (req, res) => {
  let newAnswer = req.body;
  console.log(`Adding a new answer`, newAnswer);

  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                   VALUES ($1, $2, $3, $4);`;
  pool
    .query(queryText, [
      newAnswer.feeling,
      newAnswer.understanding,
      newAnswer.support,
      newAnswer.comments,
    ])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error adding new answer`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
