//import statements

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

//parse request of content-type application/json

app.use(express.json());

//parse request of content-type- application/x-www-form-urlencoded

app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("synced db.");
  })
  .catch((err) => {
    console.log("failed to synch db " + err.message);
  });

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("drop and re-sync db");
//});

//simple route

app.get("/", (req, res) => {
  res.json({ message: "Welcome  to  bezkoder application." });
});

//set port, listen for requests
require("./app/routes/tutorial.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
