var players = require('./players.js');

function comparePlayers(playerA, playerB) {
  if (playerA.number < playerB.number){
    return -1;
  }
  return 1;
}

module.exports = {
  pg: players.filter(function(player) {
        return player.primaryPosition === "PG";
      }).sort(comparePlayers),
  sg: players.filter(function(player) {
        return player.primaryPosition === "SG";
      }).sort(comparePlayers),
  sf: players.filter(function(player) {
        return player.primaryPosition === "SF";
      }).sort(comparePlayers),
  pf: players.filter(function(player) {
        return player.primaryPosition === "PF";
      }).sort(comparePlayers),
  c: players.filter(function(player) {
        return player.primaryPosition === "C";
      }).sort(comparePlayers)
};
