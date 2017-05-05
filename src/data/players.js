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
      number: 22,
      position: "PG/SG",
      primaryPosition: "PG",
      hometown: "Gary, IN",
      height: "6'1\"",
      weight: 185,
      dob: new Date("03/04/88"),
      pastTeams: ["2016 Minnesota Rangers", "Purdue University Calumet"]
    }),
    new Player({
      id: "timlott",
      img: "TimLott.jpg",
      name: "Tim Lott",
      number: 39,
      position: "SG/SF",
      primaryPosition: "SF",
      hometown: "College Station, TX",
      height: "6'4\"",
      weight: 210,
      dob: new Date("01/26/93"),
      pastTeams: ["2016 Minnesota Rangers", "Dakota County Technical College"]
    }),
    new Player({
      id: "kennybass",
      img: "KennyBass.jpg",
      name: "Kenny Bass",
      number: 3,
      position: "SG",
      primaryPosition: "SG",
      hometown: "Chicago,IL",
      height: "6'1\"",
      weight: 190,
      dob: new Date("12/09/87"),
      pastTeams: ["2016 Minnesota Rangers", "Anoka-Ramsey Community College", "Western Technical College"]
    }),
    new Player({
      id: "rochesterrogers",
      img: "RochesterRogers.jpg",
      name: 'Rochester "Roc" Rogers',
      shortName: 'Roc Rogers',
      number: 14,
      position: "SG/SF",
      primaryPosition: "SF",
      hometown: "Saint Paul, MN",
      height: "6'2\"",
      weight: 215,
      dob: new Date("01/14/87"),
      pastTeams: ["2016 Minnesota Rangers", "Missouri Valley College"]
    }),
    new Player({
      id: "quintonjackson",
      img: "QuintonJackson.jpg",
      name: "Quinton Jackson",
      number: 24,
      position: "PG/SG",
      primaryPosition: "PG",
      hometown: "Minneapolis, MN",
      height: "6'1\"",
      weight: 180,
      dob: new Date("11/22/85"),
      pastTeams: ["2016 Minnesota Rangers", "Minneapolis Community & Technical College", "North High School"]
    }),
    new Player({
      id: "damienlolar",
      img: "DamienLolar.jpg",
      name: "Damien Lolar",
      number: 5,
      position: "SF/PF",
      primaryPosition: "SF",
      hometown: "Arkansas City, KS",
      height: "6'4\"",
      weight: 240,
      dob: new Date("01/11/84"),
      pastTeams: ["2016 Minnesota Rangers", "Colorado 14ers","West Texas A&M","Cowley Community College"]
    }),
    new Player({
      id: "dominiquedawson",
      img: "DominiqueDawson.jpg",
      name: "Dominique Dawson",
      shortName: "Dom Dawson",
      number: 4,
      position: "C/PF",
      primaryPosition: "C",
      hometown: "Minneapolis, Minnesota",
      height: "6'8\"",
      weight: 240,
      dob: new Date("06/07/91"),
      pastTeams: ["2016-2017 Island Storm", "2016 Minnesota Rangers", "Kentucky Wesleyan"]
    }),
    new Player({
      id: "demetriuswilliams",
      img: "DemetriusWilliams.jpg",
      name: "Demetrius Williams",
      shortName: "Meech Williams",
      number: 1,
      position: "PG/SG",
      primaryPosition: "PG",
      hometown: "St. Paul, MN",
      height: "6'1\"",
      weight: 175,
      dob: new Date("10/07/87"),
      pastTeams: ["2016 Minnesota Rangers", "Rochester Community College", "Southwest High School"]
    }),
    new Player({
      id: "shanebosek",
      img: "ShaneBosek.jpg",
      name: "Shane Bosek",
      number: 2,
      position: "SG/SF",
      primaryPosition: "SF",
      hometown: "Lowry, MN",
      height: "6'6\"",
      weight: 200,
      dob: new Date("09/18/92"),
      pastTeams: ["Fergus Falls Community College", "William Penn University"]
    }),
    new Player({
      id: "latrelllove",
      img: "LatrellLove.jpg",
      name: "Latrell Love",
      number: 7,
      position: "PF",
      primaryPosition: "PF",
      hometown: "Minneapolis, MN",
      height: "6'7\"",
      weight: 232,
      dob: new Date("09/13/93"),
      pastTeams: ["Mississippi Valley State", "Iowa Lakes Community College","Patrick Henry High School"]
    }),
    new Player({
      id: "davidhicks",
      img: "DavidHicks.jpg",
      name: "David Hicks",
      number: 5,
      position: "PG/SG",
      primaryPosition: "SG",
      hometown: "Indianapolis, IN",
      height: "6'1\"",
      weight: 195,
      dob: new Date("12/19/86"),
      pastTeams: ["Danville Area Community College", "Anoka Ramsey Community College", "Mayville State University"]
    }),
    new Player({
      id: "ajwilson",
      img: "AJWilson.jpg",
      name: "AJ Wilson",
      number: 15,
      position: "PF/C",
      primaryPosition: "C",
      hometown: "St. Louis, MO",
      height: "6'6\"",
      weight: 220,
      dob: new Date("03/26/86"),
      pastTeams: [""]
    })
  ];
