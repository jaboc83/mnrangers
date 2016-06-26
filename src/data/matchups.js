var locations = require('./locations');
var teams = require('./teams');

function Matchup(options) {
  this.id = options.id;
  this.awayTeam = options.awayTeam;
  this.homeTeam = options.homeTeam;
  this.dateTime = options.dateTime;
  this.location = options.location;
  this.awayScore = options.awayScore;
  this.homeScore = options.homeScore;
  this.result = (this.awayScore || "__") + " - " + (this.homeScore || "__");
  if(this.result.indexOf('f') !== -1) {
    this.result = 'Forfeit'
  }
}

Matchup.prototype.homeOrAway = function () {
  return this.homeTeam.teamName === "Minnesota Rangers" ? "home" : "away"
}

Matchup.prototype.rangersWon = function () {
  if(!this.homeScore && !this.awayScore) {
    return null;
  }

  if(this.homeScore === 'f') {
    return this.homeOrAway() === "home" ? false : true
  }

  if(this.awayScore === 'f') {
    return this.homeOrAway() === "away" ? false : true
  }

  return this.homeOrAway() === "home" ? this.homeScore > this.awayScore : this.awayScore > this.homeScore;
}

module.exports = [
  new Matchup({
    id: "160423",
    awayTeam: teams.broncos,
    homeTeam: teams.rangers,
    dateTime: "Sat. April 23rd 1:00 PM",
    location: locations.rangers,
    awayScore: 82,
    homeScore: 115
  }),
  new Matchup({
    id: "160430",
    awayTeam: teams.rangers,
    homeTeam: teams.storm,
    dateTime: "Sat. April 30th 3:00 PM",
    location: locations.storm,
    awayScore: 118,
    homeScore: 109
  }),
  new Matchup({
    id: "160515",
    awayTeam: teams.rangers,
    homeTeam: teams.fury,
    dateTime: "Sun. May 15th 2:30 PM",
    location: locations.fury,
    awayScore: 108,
    homeScore: 118
  }),
  new Matchup({
    id: "160521",
    awayTeam: teams.rangers,
    homeTeam: teams.clovers,
    dateTime: "Sat. May 21nd 7:00 PM",
    location: locations.clovers,
    awayScore: 104,
    homeScore: 110
  }),
  new Matchup({
    id: "160528",
    awayTeam: teams.courtKings,
    homeTeam: teams.rangers,
    dateTime: "Sat. May 28th 1:00 PM",
    location: locations.rangers,
    awayScore: 90,
    homeScore: 93
  }),
  new Matchup({
    id: "160604",
    awayTeam: teams.rangers,
    homeTeam: teams.broncos,
    dateTime: "Sat. June 4th 7:00 PM",
    location: locations.broncos,
    awayScore: 118,
    homeScore: 106
  }),
  new Matchup({
    id: "160611",
    awayTeam: teams.storm,
    homeTeam: teams.rangers,
    dateTime: "Sat. June 11th 1:00 PM",
    location: locations.rangersAlternate,
    awayScore: 'f',
    homeScore: 0
  }),
  new Matchup({
    id: "160611",
    awayTeam: teams.fury,
    homeTeam: teams.rangers,
    dateTime: "Sat. June 18th 1:00 PM",
    location: locations.rangers,
    awayScore: 101,
    homeScore: 122
  }),
  new Matchup({
    id: "160625",
    awayTeam: teams.rangers,
    homeTeam: teams.lions,
    dateTime: "Sat. June 25th 6:00 PM",
    location: locations.lions,
    awayScore: 120,
    homeScore: 116
  }),
  new Matchup({
    id: "160709",
    awayTeam: teams.courtKings,
    homeTeam: teams.rangers,
    dateTime: "Sat. July 9th 1:00 PM",
    location: locations.rangers,
    awayScore: null,
    homeScore: null
  }),
  new Matchup({
    id: "160716",
    awayTeam: teams.broncos,
    homeTeam: teams.rangers,
    dateTime: "Sat. July 16th 1:00 PM",
    location: locations.rangers,
    awayScore: null,
    homeScore: null
  }),
  new Matchup({
    id: "160723",
    awayTeam: teams.rangers,
    homeTeam: teams.storm,
    dateTime: "Sat. July 23rd 3:00 PM",
    location: locations.storm,
    awayScore: null,
    homeScore: null
  }),
  new Matchup({
    id: "160730",
    awayTeam: teams.rangers,
    homeTeam: teams.fury,
    dateTime: "Sat. July 30th 2:30 PM",
    location: locations.fury,
    awayScore: null,
    homeScore: null
  }),
  new Matchup({
    id: "160806",
    awayTeam: teams.lions,
    homeTeam: teams.rangers,
    dateTime: "Sat. August 6th 1:00 PM",
    location: locations.rangers,
    awayScore: null,
    homeScore: null
  })
];
