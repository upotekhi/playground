const mysql = require("mysql2");
const fs = require("fs");

// Load .env variables
require("dotenv").config();

// Read SQL seed query
const seedQuery = fs.readFileSync("db/creating.sql", {
  encoding: "utf-8",
});

// Connect to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  multipleStatements: true, // IMPORTANT
});

connection.connect();

console.log("Running SQL create...");

// Run seed query
connection.query(seedQuery, (err) => {
  if (err) {
    throw err;
  }

  console.log("SQL create completed!");
  connection.end();
});
