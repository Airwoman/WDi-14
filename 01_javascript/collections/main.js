var weirdInstruments = [
  "Badgermin",
  "The Great Stalacpipe Organ",
  "Stylophone",
  "Ondes Martenot",
  "Sharpischord",
  "Hydraulophone",
  "Pyrophone"
];

weirdInstruments.push("Roli Seaboard");
weirdInstruments.unshift("OP1");
weirdInstruments[0] = "Teenage Engineering OP1";

for (var i = 0; i < weirdInstruments.length; i += 1) {
  var instrument = weirdInstruments[i];
  console.log("Instrument " + i + " is the " + instrument);
}
