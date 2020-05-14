const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {
  const queryString = `SELECT * FROM "events";`;

  pool
    .query(queryString)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post("/", (req, res) => {
  console.log("Get it!", req.body);

  const queryString = `INSERT INTO "events"
  ("eventName", "event_date", "event_type", "event_Address",
  "starting_time", "ending_time",
  "job_one", "num_job_one",
  "job_two", "num_job_two",
  "job_three", "num_job_three",
  "job_four", "num_job_four")
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14);`;

  pool
    .query(queryString, [
      req.body.eventName,
      req.body.eventDate,
      req.body.eventType,
      req.body.eventAddress,
      req.body.startingTime,
      req.body.endingTime,
      req.body.jobOne,
      parseInt(req.body.numOfJobOne),
      req.body.jobTwo,
      parseInt(req.body.numOfJobTwo),
      req.body.jobThree,
      parseInt(req.body.numOfJobThree),
      req.body.jobFour,
      parseInt(req.body.numOfJobFour),
    ])
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
