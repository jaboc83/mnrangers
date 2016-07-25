var dateFormat = require('dateformat');
function calculateAge(dob)
{
  if(!dob) {
    return 'N/A'
  }
  var birthMonth = dob.getMonth();
  var birthYear = dob.getFullYear();
  var birthDay = dob.getDate();
  todayDate = new Date();
  todayYear = todayDate.getFullYear();
  todayMonth = todayDate.getMonth();
  todayDay = todayDate.getDate();
  age = todayYear - birthYear;

  if (todayMonth < birthMonth - 1) { age--; }
  if (birthMonth - 1 == todayMonth && todayDay < birthDay) { age--; }

  return age;
}

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
  this.dob = options.dob;
  this.pastTeams = options.pastTeams;
}

Player.prototype.getShortName = function() {
  return this.shortName || this.name;
};

Player.prototype.getDobWithAge = function() {
  if(!this.dob) {
    return "N/A";
  }

  return dateFormat(this.dob,"mm/dd/yyyy") + " (" + calculateAge(this.dob) + ")";
}

module.exports = [
    new Player({
      id: "bjmoore",
      img: "BJMoore.jpg",
      name: "BJ Moore",
      number: 21,
      position: "PG/SG",
      primaryPosition: "PG",
      hometown: "Gary, IN",
      height: "6'1\"",
      weight: 185,
      dob: new Date("03/04/88"),
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
      dob: new Date("01/26/93"),
      pastTeams: ["Dakota County Technical College"]
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
      dob: new Date("12/09/87"),
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
      dob: new Date("03/10/90"),
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
      dob: new Date("06/28/89"),
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
      dob: new Date("01/14/87"),
      pastTeams: ["Rochester Community & Technical College"]
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
      dob: new Date("11/22/85"),
      pastTeams: ["Minneapolis Community & Technical College"]
    }),
    new Player({
      id: "damienlolar",
      img: "DamienLolar.jpg",
      name: "Damien Lolar",
      number: 50,
      position: "SF/PF",
      primaryPosition: "SF",
      hometown: "Arkansas City, KS",
      height: "6'4\"",
      weight: 240,
      dob: new Date("01/11/84"),
      pastTeams: ["Colorado 14ers","West Texas A&M","Cowley Community College"]
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
      dob: new Date("05/30/92"),
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
      dob: new Date("06/07/91"),
      pastTeams: ["Kentucky Wesleyan"]
    }),
    new Player({
      id: "jordanosberg",
      img: "JordanOsberg.jpg",
      name: "Jordan Osberg",
      number: 30,
      position: "PG/SG",
      primaryPosition: "SG",
      hometown: "Saint Paul, Minnesota",
      height: "6'2\"",
      weight: 185,
      dob: new Date("11/27/90"),
      pastTeams: ["Riverland Community College"]
    }),
    new Player({
      id: "demarcodavis",
      img: "DemarcoDavis.jpg",
      name: "Demarco Davis",
      shortName: "Dee Davis",
      number: "32",
      position: "SG/SF",
      primaryPosition: "SF",
      hometown: "St. Paul, MN",
      height: "6'4\"",
      weight: 190,
      dob: new Date("03/23/88"),
      pastTeams: ['Minneapolis Community College', 'Rochester College']
    }),
    new Player({
      id: "demetriuswilliams",
      img: "DemetriusWilliams.jpg",
      name: "Demetrius Williams",
      shortName: "Meech Williams",
      number: "25",
      position: "PG/SG",
      primaryPosition: "PG",
      hometown: "Chicago, IL",
      height: "6'1\"",
      weight: 170,
      dob: new Date("10/07/87"),
      pastTeams: ['Southwest High School', 'Anoka Ramsey Community College']
    })
  ];
