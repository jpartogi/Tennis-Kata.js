var TennisGame = require("../app/TennisGame.js");

var game = new TennisGame("Eric", "John");

QUnit.test("First Game First Player win", function( assert ) {
  game.wonPoint("Eric");
  assert.equal(game.getScore(), "Fifteen-Love");
});