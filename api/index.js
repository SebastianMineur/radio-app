const express = require("express");
const session = require("express-session");

const usersRoute = require("./routes/usersRoute");
const channelsRoute = require("./routes/channelsRoute");
const categoriesRoute = require("./routes/categoriesRoute");
const programsRoute = require("./routes/programsRoute");
const scheduleRoute = require("./routes/scheduleRoute");

const port = 3001;
const app = express();

app.use(express.json());

app.use(
  session({
    secret: "dd8b4e9e-537f-48e4-8a17-1b5d52eb674c",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: "auto" },
  })
);

app.use("/api/v1/users", usersRoute);
app.use("/api/v1/channels", channelsRoute);
app.use("/api/v1/categories", categoriesRoute);
app.use("/api/v1/programs", programsRoute);
app.use("/api/v1/schedule", scheduleRoute);

app.listen(port, (err) => {
  if (err) {
    console.error("Server could not start:", err);
    return;
  }
  console.log("Listening on port:", port);
});
