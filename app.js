const express = require("express");
const addDays = require("date-fns/addDays");
const app = express();

app.get("/", (request, response) => {
  let date = new Date();
  const futureDate = addDays(date, 100);
  response.send(futureDate);
});

app.listen(3000);
module.exports = app;
