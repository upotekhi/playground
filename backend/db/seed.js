const mysql = require("mysql2");
const fs = require("fs");
const bcrypt = require("bcrypt");

// Load .env variables
require("dotenv").config();

// Read SQL seed query
const seedQuery = fs.readFileSync("db/seeding.sql", {
  encoding: "utf-8",
});

// Connect to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  multipleStatements: true, // IMPORTANT
});

connection.connect();

// Generate random password for initial admin user
const psw = process.env.USER_PASS;
const hash = bcrypt.hashSync(psw, 10);

console.log("Running SQL seed...");

// Run seed query
connection.query(seedQuery, [hash], (err) => {
  if (err) {
    throw err;
  }

  console.log("SQL seed completed!");
  connection.end();
});
