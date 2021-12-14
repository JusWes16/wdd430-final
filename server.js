const express = require("express");
const path = require("path");
const http = require("http");
const debug = require("debug")("node-angular");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();

const index = require("./server/routes/app");
const trailRoutes = require('./server/routes/trails');
// const contactRoutes = require('./server/routes/contacts');
// const documentRoutes = require('./server/routes/documents');

mongoose.connect(
  "mongodb+srv://weston:u1WsfW7iTGubaMkC@cluster0.yqxnp.mongodb.net/go-hike-it-db?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  (err, res) => {
    if (err) {
      console.log("Connection failed: " + err);
    } else {
      console.log("Connected to database!");
    }
  }
);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cookieParser());

app.use(logger("dev"));

// Add support for CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use(express.static(path.join(__dirname, "/go-hike-it")));

app.use("/", index);
app.use("/trails", trailRoutes);
// app.use("/contacts", contactRoutes);
// app.use("/documents", documentRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/src/index.html"));
});

const port = process.env.PORT || "3000";
app.set("port", port);

const server = http.createServer(app);

server.listen(port, function () {
  console.log("API running on localhost: " + port);
});
