const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { sequelize } = require('./models/db');
const app = express();

var corsOptions = {
    origin: "http://localhost:4200"
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
sequelize.sync()
// Routes
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Learn Empire application." });
});
app.use("/api/courses", require('./routes/courses'));

// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});