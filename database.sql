
CREATE TABLE "user"
(
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "volunteer_id" INTEGER,
    "nonprofit_id" INTEGER,
);
CREATE TABLE "nonprofit_users"
(
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "volunteer_id" INTEGER,
    "nonprofit_id" INTEGER,
);



CREATE TABLE "events"
(
    "eventName" VARCHAR,
    "event_date" VARCHAR,
    "event_type" VARCHAR,
    "event_Address" VARCHAR,
    "starting_time" TIME,
    "ending_time" TIME,
    "job_one" VARCHAR,
    "num_job_one" NUMERIC,
    "job_two" VARCHAR,
    "num_job_two" NUMERIC,
    "job_three" VARCHAR,
    "num_job_three" NUMERIC,
    "job_four" VARCHAR,
    "num_job_four" NUMERIC
);
  