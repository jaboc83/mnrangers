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
  this.video = options.video;
  this.season = options.season;
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
    location: locations['2016'].rangers,
    awayScore: 82,
    homeScore: 115,
    video: null,
    season: 2016
  }),
  new Matchup({
    id: "160430",
    awayTeam: teams.rangers,
    homeTeam: teams.storm,
    dateTime: "Sat. April 30th 3:00 PM",
    location: locations['2016'].storm,
    awayScore: 118,
    homeScore: 109,
    video: null,
    season: 2016
  }),
  new Matchup({
    id: "160515",
    awayTeam: teams.rangers,
    homeTeam: teams.fury,
    dateTime: "Sun. May 15th 2:30 PM",
    location: locations['2016'].fury,
    awayScore: 108,
    homeScore: 118,
    video: 'https://youtu.be/KwpqkVTJWtk',
    season: 2016
  }),
  new Matchup({
    id: "160521",
    awayTeam: teams.rangers,
    homeTeam: teams.clovers,
    dateTime: "Sat. May 21st 7:00 PM",
    location: locations['2016'].clovers,
    awayScore: 104,
    homeScore: 110,
    video: 'https://youtu.be/i8Y3vgZP89w',
    season: 2016
  }),
  new Matchup({
    id: "160528",
    awayTeam: teams.courtKings,
    homeTeam: teams.rangers,
    dateTime: "Sat. May 28th 1:00 PM",
    location: locations['2016'].rangers,
    awayScore: 90,
    homeScore: 93,
    video: 'https://youtu.be/IhiU0v3QLs8',
    season: 2016
  }),
  new Matchup({
    id: "160604",
    awayTeam: teams.rangers,
    homeTeam: teams.broncos,
    dateTime: "Sat. June 4th 7:00 PM",
    location: locations['2016'].broncos,
    awayScore: 118,
    homeScore: 106,
    video: 'https://youtu.be/94-_zKhybH8',
  }),
  new Matchup({
    id: "160611",
    awayTeam: teams.storm,
    homeTeam: teams.rangers,
    dateTime: "Sat. June 11th 1:00 PM",
    location: locations['2016'].rangersAlternate,
    awayScore: 'f',
    homeScore: 0,
    video: null,
    season: 2016
  }),
  new Matchup({
    id: "160611",
    awayTeam: teams.fury,
    homeTeam: teams.rangers,
    dateTime: "Sat. June 18th 1:00 PM",
    location: locations['2016'].rangers,
    awayScore: 101,
    homeScore: 122,
    video: 'https://youtu.be/Gklf_csqekg',
    season: 2016
  }),
  new Matchup({
    id: "160625",
    awayTeam: teams.rangers,
    homeTeam: teams.lions,
    dateTime: "Sat. June 25th 6:00 PM",
    location: locations['2016'].lions,
    awayScore: 120,
    homeScore: 116,
    video: null,
    season: 2016
  }),
  new Matchup({
    id: "160709",
    awayTeam: teams.courtKings,
    homeTeam: teams.rangers,
    dateTime: "Sat. July 9th 1:00 PM",
    location: locations['2016'].rangers,
    awayScore: 98,
    homeScore: 101,
    video: 'https://youtu.be/OyoFXcJHkKg',
    season: 2016
  }),
  new Matchup({
    id: "160716",
    awayTeam: teams.broncos,
    homeTeam: teams.rangers,
    dateTime: "Sat. July 16th 1:00 PM",
    location: locations['2016'].rangers,
    awayScore: 128,
    homeScore: 135,
    video: 'https://youtu.be/mKvFTQnhAYU',
    season: 2016
  }),
  new Matchup({
    id: "160723",
    awayTeam: teams.rangers,
    homeTeam: teams.storm,
    dateTime: "Sat. July 23rd 3:00 PM",
    location: locations['2016'].storm,
    awayScore: 0,
    homeScore: 'f',
    video: null,
    season: 2016
  }),
  new Matchup({
    id: "160730",
    awayTeam: teams.rangers,
    homeTeam: teams.fury,
    dateTime: "Sat. July 30th 2:30 PM",
    location: locations['2016'].fury,
    awayScore: 122,
    homeScore: 130,
    video: null,
    season: 2016
  }),
  new Matchup({
    id: "160806",
    awayTeam: teams.lions,
    homeTeam: teams.rangers,
    dateTime: "Sat. August 6th 1:00 PM",
    location: locations['2016'].rangers,
    awayScore: 101,
    homeScore: 111,
    video: 'https://youtu.be/GKY1si--JLY',
    season: 2016
  }),

  // 2017
  new Matchup({
    id: "170401",
    awayTeam: teams.rangers,
    homeTeam: teams.lions,
    dateTime: "Sat. April 1st 5PM",
    location: locations['2017'].lions,
    awayScore: 114,
    homeScore: 110,
    video: 'https://www.youtube.com/watch?v=wPUvAPcUpes',
    season: 2017
  }),
  new Matchup({
    id: "170409",
    awayTeam: teams.rangers,
    homeTeam: teams.pitbulls,
    dateTime: "Sat. April 8th 12:50PM",
    location: locations['2017'].pitbulls,
    awayScore: 0,
    homeScore: 'f',
    video: null,
    season: 2017
  }),
  new Matchup({
    id: "170422",
    awayTeam: teams.eagles,
    homeTeam: teams.rangers,
    dateTime: "Sat. April 22nd 3PM",
    location: locations['2017'].rangers,
    awayScore: 120,
    homeScore: 141,
    video: "https://youtu.be/DIK2_Xzg1Tw",
    season: 2017
  }),
  new Matchup({
    id: "170423",
    awayTeam: teams.rangers,
    homeTeam: teams.broncos,
    dateTime: "Sun. April 23rd 3PM",
    location: locations['2017'].broncos,
    awayScore: 116,
    homeScore: 108,
    video: null,
    season: 2017
  }),
  new Matchup({
    id: "170430",
    awayTeam: teams.fury,
    homeTeam: teams.rangers,
    dateTime: "Sun. April 30th 3PM",
    location: locations['2017'].rangers,
    awayScore: null,
    homeScore: null,
    video: null,
    season: 2017
  }),
  new Matchup({
    id: "170506",
    awayTeam: teams.rangers,
    homeTeam: teams.dream,
    dateTime: "Sat. May 6th (TIME TBD)",
    location: locations['2017'].dream,
    awayScore: null,
    homeScore: null,
    video: null,
    season: 2017
  }),
  new Matchup({
    id: "170513",
    awayTeam: teams.courtKings,
    homeTeam: teams.rangers,
    dateTime: "Sat. May 13th 3PM",
    location: locations['2017'].rangers,
    awayScore: null,
    homeScore: null,
    video: null,
    season: 2017
  }),
  new Matchup({
    id: "170514",
    awayTeam: teams.lions,
    homeTeam: teams.rangers,
    dateTime: "Sun. May 14th 3PM",
    location: locations['2017'].rangers,
    awayScore: null,
    homeScore: null,
    video: null,
    season: 2017
  }),
  new Matchup({
    id: "170520",
    awayTeam: teams.pitbulls,
    homeTeam: teams.rangers,
    dateTime: "Sat. May 20th 3PM",
    location: locations['2017'].rangers,
    awayScore: null,
    homeScore: null,
    video: null,
    season: 2017
  }),
  new Matchup({
    id: "170521",
    awayTeam: teams.courtKings,
    homeTeam: teams.rangers,
    dateTime: "Sun. May 21th 3PM",
    location: locations['2017'].rangers,
    awayScore: null,
    homeScore: null,
    video: null,
    season: 2017
  }),
  new Matchup({
    id: "170603",
    awayTeam: teams.rangers,
    homeTeam: teams.storm,
    dateTime: "Sat. June 3rd (TIME TBD)",
    location: locations.tbd,
    awayScore: null,
    homeScore: null,
    video: null,
    season: 2017
  }),
  new Matchup({
    id: "170604",
    awayTeam: teams.broncos,
    homeTeam: teams.rangers,
    dateTime: "Sun. June 4th 3PM",
    location: locations['2017'].rangers,
    awayScore: null,
    homeScore: null,
    video: null,
    season: 2017
  }),
  new Matchup({
    id: "170610",
    awayTeam: teams.rangers,
    homeTeam: teams.fury,
    dateTime: "Sat. June 10th (TIME TBD)",
    location: locations['2017'].fury,
    awayScore: null,
    homeScore: null,
    video: null,
    season: 2017
  }),
  new Matchup({
    id: "170617",
    awayTeam: teams.rangers,
    homeTeam: teams.courtKings,
    dateTime: "Sat. June 17th (TIME TBD)",
    location: locations['2017'].courtKings,
    awayScore: null,
    homeScore: null,
    video: null,
    season: 2017
  }),
  new Matchup({
    id: "170624",
    awayTeam: teams.panthers,
    homeTeam: teams.rangers,
    dateTime: "Sat. June 24th 3PM",
    location: locations['2017'].rangers,
    awayScore: null,
    homeScore: null,
    video: null,
    season: 2017
  }),
  new Matchup({
    id: "170625",
    awayTeam: teams.rangers,
    homeTeam: teams.pitbulls,
    dateTime: "Sun. June 25th (TIME TBD)",
    location: locations['2017'].pitbulls,
    awayScore: null,
    homeScore: null,
    video: null,
    season: 2017
  })
];
