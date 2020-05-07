const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const encryptLib = require("../modules/encryption");
const pool = require("../modules/pool");
const userStrategy = require("../strategies/user.strategy");

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get("/", rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post("/register/nonprofit", (req, res, next) => {
  const username = req.body.email;
  const password = encryptLib.encryptPassword(req.body.password);
  const nonProfitData = req.body;

  // nonprofit user query
  const queryTextNonProfit = `INSERT INTO "nonprofit_users" ("org_name", "contact_name", "address", "phone", "mission_statement", "email")
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING "id";`;

  pool
    .query(queryTextNonProfit, [
      nonProfitData.organizationName,
      nonProfitData.contactName,
      nonProfitData.address,
      nonProfitData.phone,
      nonProfitData.missionStatement,
      nonProfitData.email,
    ])
    .then((response) => {
      const nonProfitUserId = response.rows[0].id;

      // RUN SECOND QUERY FOR USER AUTHENTICATION
      const queryText =
        'INSERT INTO "user" (username, password, nonprofit_id) VALUES ($1, $2, $3) RETURNING id';
      pool
        .query(queryText, [username, password, nonProfitUserId])
        .then(() => res.sendStatus(201))
        .catch((err) => {
          console.log("USER INSERT:", err);
          res.sendStatus(500);
        });
    })
    .catch((err) => {
      console.log("NONPROFIT INSERT:", err);
      res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post("/login", userStrategy.authenticate("local"), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post("/logout", (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
