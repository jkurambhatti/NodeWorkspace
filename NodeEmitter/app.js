var Emitter = require('./emitter');
var utils = require('./utils');
var eventsConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventsConfig.GREET, function () {
  console.log('Event Received');
  console.log('Hey there Hello');
});

emtr.on(eventsConfig.ONANGRY, function () {
  console.log('Event Received');
  console.log('Oo la la la lu le o, GET LOST');
});



const allEvents = Object.keys(eventsConfig);

allEvents.forEach( function(event) {
  utils.randomEventGenerator(function () {
    emtr.emit(eventsConfig[event]);
  });
});

