"use strict";
// For setting up mongoDB call this file in server.js

const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
//const URL=process.env.DATABASE_URL;

mongoose.set("useFindAndModify", false);
//mongoose.set("bufferCommands", false);

//mongoose.connect(
//process.env.DATABASE_URL,
//{
//  useNewUrlParser: true,
// },
//() => {
//  console.log("Connected to DB!");
// }
//);

(async () => {
  try {
    await mongoose.connect(
      process.env.DATABASE_URL,
      {
        useNewUrlParser: true,
      },
      () => {
        console.log("Connected to DB!");
      }
    );
  } catch (err) {
    console.log("error: " + err);
  }
})();
//mongoose.set("useFindAndModify", false);
