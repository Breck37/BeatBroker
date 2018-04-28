const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const ctrl = require("./controller");

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get("/api/b/showall", ctrl.read);
app.get('/api/bringbeats/:type', ctrl.bringBeats)
app.post('/api/beatsadded', ctrl.addSong)
app.delete('/api/deletebeat/:id', ctrl.deleteBeat)
app.put('/api/editbeat/:id', ctrl.editBeat)

const PORT = 3700;

app.listen(PORT, () => console.log("We be jammin on " + PORT));
