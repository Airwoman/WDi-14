// Age
// Write a program that, given an age in seconds, calculates how old someone is in standard Earth years.
//
// Then use the program to answer the following question: If I am 1031 million seconds old, how old am I?
//
// Extensions
//
// Given an age in seconds, calculate how old someone would be on:
//
// Mercury (orbital period 0.2408467 Earth years)
// Venus (orbital period 0.61519726 Earth years)
// Mars (orbital period 1.8808158 Earth years)
// Jupiter (orbital period 11.862615 Earth years)
// Saturn (orbital period 29.447498 Earth years)
// Uranus (orbital period 84.016846 Earth years)
// Neptune (orbital period 164.79132 Earth years)
// An Earth year is roughly 365.25 days, or 31557600 seconds.

var solarSeconds = {
  spaceValues:{
    "Mercury": 0.2408467,
    "Venus": 0.61519726,
    "Mars": 1.8808158,
    "Jupiter": 11.862615,
    "Saturn" 29.447498,
    "Uranus": 84.016846,
    "Neptune": 164.79132,
    "Earth":1
  },
  earthSeconds: function (seconds) {
    return seconds/3155760;
  },
  spaceSeconds: function (planet,seconds) {
    planet = planet[0].toUpperCase() + planet.slice(1);
    var baseValue = this.earthSeconds(seconds);
    var spaceValues = baseValue / this.spaceValues[ planet ];
    return spaceValues;
  }

}


An Earth year is roughly 365.25 days, or 31557600 seconds.
