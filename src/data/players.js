function Player(options) {
  this.id = options.id;
  this.img = options.img;
  this.name = options.name;
  this.shortName = options.shortName;
  this.number = options.number;
  this.position = options.position;
  this.primaryPosition = options.primaryPosition;
  this.hometown = options.hometown;
  this.height = options.height;
  this.weight = options.weight;
  this.pastTeams = options.pastTeams;
}

Player.prototype.getShortName = function() {
  return this.shortName || this.name;
};

module.exports = [
    new Player({
      id: "bjmoore",
      img: "BJMoore.jpg",
      name: "BJ Moore",
      number: 25,
      position: "PG/SG",
      primaryPosition: "PG",
      hometown: "Gary, IN",
      height: "6'1\"",
      weight: 185,
      pastTeams: [""]
    }),
    new Player({
      id: "timlott",
      img: "TimLott.jpg",
      name: "Tim Lott",
      number: 8,
      position: "SG/SF/PF",
      primaryPosition: "SF",
      hometown: "College Station, TX",
      height: "6'4\"",
      weight: 200,
      pastTeams: ["Dakota County Tech"]
    }),
    new Player({
      id: "dariuscampbell",
      img: "DariusCampbell.jpg",
      name: "Darius Campbell",
      number: 21,
      position: "SG/SF",
      primaryPosition: "SG",
      hometown: "Saint Paul, MN",
      height: "6'3\"",
      weight: 195,
      pastTeams: [""]
    }),
    new Player({
      id: "kennybass",
      img: "KennyBass.jpg",
      name: "Kenny Bass",
      number: 11,
      position: "SG",
      primaryPosition: "SG",
      hometown: "Chicago,IL",
      height: "6'2\"",
      weight: 190,
      pastTeams: [""]
    }),
    new Player({
      id: "brucehowell",
      img: "BruceHowell.jpg",
      name: "Bruce Howell",
      number: 45,
      position: "SF/PF",
      primaryPosition: "PF",
      hometown: "Saint Paul, MN",
      height: "6'4\"",
      weight: 250,
      pastTeams: [""]
    }),
    new Player({
      id: "tauricesmith",
      img: "TauriceSmith.jpg",
      name: "Taurice Smith",
      number:  5,
      position: "PG/SG",
      primaryPosition: "PG",
      hometown: "Minneapolis, MN",
      height: "6'0\"",
      weight: 160,
      pastTeams: []
    }),
    new Player({
      id: "rochesterrogers",
      img: "RochesterRogers.jpg",
      name: 'Rochester "Roc" Rogers',
      shortName: 'Roc Rogers',
      number: 34,
      position: "SG/SF",
      primaryPosition: "SF",
      hometown: "Saint Paul, MN",
      height: "6'3\"",
      weight: 215,
      pastTeams: []
    }),
    new Player({
      id: "quintonjackson",
      img: "QuintonJackson.jpg",
      name: "Quinton Jackson",
      number: 23,
      position: "PG/SG",
      primaryPosition: "PG",
      hometown: "Minneapolis, MN",
      height: "6'1\"",
      weight: 175,
      pastTeams: ["Minneapolis Community & Technical College"]
    }),
    new Player({
      id: "damienlolar",
      img: "DamienLolar.jpg",
      name: "Damien Lolar",
      number: 50,
      position: "SF/PF",
      primaryPosition: "SF",
      hometown: "Kansas",
      height: "6'4\"",
      weight: 240,
      pastTeams: ["Colorado 14ers"]
    }),
    new Player({
      id: "sammitchell",
      img: "SamMitchell.jpg",
      name: "Sam Mitchell",
      number: 14,
      position: "PG/SG",
      primaryPosition: "SG",
      hometown: "Brooklyn, NY",
      height: "6'1\"",
      weight: 168,
      pastTeams: []
    }),
    new Player({
      id: "dominiquedawson",
      img: "DominiqueDawson.jpg",
      name: "Dominique Dawson",
      shortName: "Dom Dawson",
      number: 41,
      position: "C/PF",
      primaryPosition: "C",
      hometown: "Minneapolis, Minnesota",
      height: "6'8\"",
      weight: 240,
      pastTeams: ["Kentucky Wesleyan"]
    }),
    new Player({
      id: "dylanhale",
      img: "DylanHale.jpg",
      name: "Dylan Hale",
      number: 30,
      position: "PG/SG",
      primaryPosition: "SG",
      hometown: "Saint Paul, Minnesota",
      height: "6'2\"",
      weight: 180,
      pastTeams: ["NDSU", "Texas State"]
    }),
    new Player({
      id: "ricophillips",
      img: "RicoPhillips.jpg",
      name: "Rico Phillips",
      number: 3,
      position: "PG",
      primaryPosition: "PG",
      hometown: "Saint Paul, Minnesota",
      height: "6'0\"",
      weight: 165,
      pastTeams: ["Clinton CC"]
    }),
    new Player({
      id: "jordanosberg",
      img: "JordanOsberg.jpg",
      name: "Jordan Osberg",
      number: 32,
      position: "PG/SG",
      primaryPosition: "SG",
      hometown: "Saint Paul, Minnesota",
      height: "6'2\"",
      weight: 185,
      pastTeams: ["Riverland CC"]
    })
  ];
