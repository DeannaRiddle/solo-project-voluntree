const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {});

/**
 * POST route template
 */
router.post("/", (req, res) => {
  console.log("Get it!", req.body);

  const queryString = `INSERT INTO "events" 
  ("event_name", "event_date", "event_type", event_address",
  "starting_time", "ending_time",  
  "job_one","num_job_one",
  "job_two","num_job_two",
  "job_three","num_job_three", 
  "job_four","num_job_four") 
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14 )`;

  pool
    .query(queryString, [
      eventData.eventName,
      eventData.eventDate,
      eventData.eventType,
      eventData.eventAddress,
      eventData.startingTime,
      eventData.endingTime,
      eventData.jobOne,
      eventData.numOfJobOne,
      eventData.jobTwo,
      eventData.numOfJobTwo,
      eventData.jobThree,
      eventData.numOfJobThree,
      eventData.jobFour,
      eventData.numOfJobFour,
    ])
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });

  res.sendStatus(201);
});

module.exports = router;
