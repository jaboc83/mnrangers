var players = require("./players");
var matchups = require("./matchups");

function generateStatLine (matchupId, playerId, data) {
  var gameNum = 0;
  var starts = 0;
  var p = players.filter(function (player) {
    return player.id === playerId;
  })[0];
  for (var i = 0; i < matchups.length; i++) {
    if(matchups[i].id === matchupId) {
      gameNum = i + 1;
    }
  }

  return {
    matchup: "160423",
    number: p.number,
    name: p.getShortName(),
    starts: data[0], fgm: data[1], fga: data[2], threem: data[3], threea: data[4],
    ftm: data[5], fta: data[6], rbo: data[7], rbd: data[8], ast: data[9], to: data[10],
    stl: data[11], blk: data[12], pf: data[13], pts: data[14]
  }
}

module.exports = [
  // GAME 1
  generateStatLine("160423", "damienlolar", [
    00,07,07,02,02,05,10,01,07,05,04,01,00,00,21
  ]),
  generateStatLine("160423", "kennybass", [
    01,07,10,00,00,03,07,03,07,03,02,08,01,02,17
  ]),
  generateStatLine("160423", "dominiquedawson", [
    01,05,11,00,00,03,05,03,06,00,01,00,02,00,13
  ]),
  generateStatLine("160423", "rochesterrogers", [
    01,06,13,00,02,01,02,05,03,03,05,02,00,00,13
  ]),
  generateStatLine("160423", "brucehowell", [
    00,04,05,00,00,01,01,00,02,01,00,00,00,00,09
  ]),
  generateStatLine("160423", "tauricesmith", [
    00,03,11,01,02,00,02,00,05,00,00,01,00,02,07
  ]),
  generateStatLine("160423", "sammitchell", [
    00,01,02,00,01,02,02,00,03,00,02,00,00,01,04
  ]),
  generateStatLine("160423", "quintonjackson", [
    01,01,04,00,01,01,04,00,01,01,01,00,00,00,03
  ]),
  generateStatLine("160423", "timlott", [
    01,01,06,00,03,01,02,00,04,01,01,01,01,00,03
  ]),
  generateStatLine("160423", "jordanosberg", [
    00,01,03,01,02,00,00,00,03,02,03,02,00,00,03
  ])
  // GAME 2

]

