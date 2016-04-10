var locations = {
  broncos: {
    mapSlug: "88GHQXp9k852",
    locationName: "Oxford Community Center"
  },
  clovers: {
    mapSlug: "",
    locationName: "TBD"
  },
  fury: {
    mapSlug: "RNKvdSsQiUG2",
    locationName: "Adele and Robert Stern Center"
  },
  rangers: {
    mapSlug: "88GHQXp9k852",
    locationName: "Oxford Community Center"
  },
  rangersAlternate: {
    mapSlug: "18qYUjfoeG42",
    locationName: "Eagan Community Center"
  },
  storm: {
    mapSlug: "6JBJVnYyvRA2",
    locationName: "New Testament Academy Gym"
  },
};

var teams = {
  broncos: {
    teamName: "Minnesota Broncos",
    teamLogo: "broncos"
  },
  clovers: {
    teamName: "Chicago Clovers",
    teamLogo: "clovers"
  },
  courtKings: {
    teamName: "Cedar Valley CourtKings",
    teamLogo: "courtKings"
  },
  fury: {
    teamName: "Chicago Fury",
    teamLogo: "fury"
  },
  rangers: {
    teamName: "Minnesota Rangers",
    teamLogo: "rangers"
  },
  storm: {
    teamName: "Wisconsin Storm",
    teamLogo: "storm"
  }
}

function Matchup(homeTeam, awayTeam, dateTime, location, result) {
  this.homeTeam = homeTeam;
  this.awayTeam = awayTeam;
  this.dateTime = dateTime;
  this.location = location;
  this.result = result;

}

Matchup.prototype.homeOrAway = function () {
  return this.homeTeam.teamName === "Minnesota Rangers" ? "home" : "away"
}

module.exports = [
  new Matchup(teams.broncos, teams.rangers, "Sat. April 23rd 1:00 PM", locations.rangers, ""),
  new Matchup(teams.rangers, teams.storm, "Sat. April 30th 3:00 PM", locations.storm, ""),
  new Matchup(teams.rangers, teams.fury, "Sun. May 15th 2:30 PM", locations.fury, ""),
  new Matchup(teams.rangers, teams.clovers, "Sun. May 22nd 6:00 PM", locations.clovers, ""),
  new Matchup(teams.courtKings, teams.rangers, "Sat. May 28th 1:00 PM", locations.rangers, ""),
  new Matchup(teams.rangers, teams.broncos, "Sat. June 4th 7:00 PM", locations.broncos, ""),
  new Matchup(teams.storm, teams.rangers, "Sat. June 11th 1:00 PM", locations.rangersAlternate, ""),
  new Matchup(teams.fury, teams.rangers, "Sat. June 18th 1:00 PM", locations.rangers, ""),
  new Matchup(teams.rangers, teams.clovers, "Sat. June 25th 6:00 PM", locations.clovers, ""),
  new Matchup(teams.courtKings, teams.rangers, "Sat. July 9th 1:00 PM", locations.rangers, ""),
  new Matchup(teams.broncos, teams.rangers, "Sat. July 16th 1:00 PM", locations.rangers, ""),
  new Matchup(teams.rangers, teams.storm, "Sat. July 23rd 3:00 PM", locations.storm, ""),
  new Matchup(teams.rangers, teams.fury, "Sat. July 30th 2:30 PM", locations.fury, ""),
  new Matchup(teams.clovers, teams.rangers, "Sat. August 6th 1:00 PM", locations.rangers, "")
];
