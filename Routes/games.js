const express = require("express");
const games = express.Router();
const connect = require('../Database/db');

const GamesController = require("../Controller/GameController");


games.route('/')
.get(GamesController.index)
.post(GamesController.store)



module.exports = games;