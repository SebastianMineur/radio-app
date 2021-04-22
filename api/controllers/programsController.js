const fetch = require("node-fetch");

async function getAllPrograms(req, res) {
  try {
    const response = await fetch(
      "http://api.sr.se/api/v2/programs?format=json&pagination=false"
    );
    const data = await response.json();
    res.send(data.programs);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
}

async function getProgram(req, res) {
  try {
    const url = `http://api.sr.se/api/v2/programs/${req.params.id}?format=json`;
    const response = await fetch(url);

    if (!response.ok) {
      console.log("Request:", url);
      console.log(`Response: ${response.status} ${response.statusText}`);
      res.status(response.status).send();
      return;
    }

    const data = await response.json();
    res.send(data.program);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
}

module.exports = { getAllPrograms, getProgram };