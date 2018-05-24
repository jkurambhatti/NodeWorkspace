var Emitter = require('./emitter');
var utils = require('./utils');

var emtr = new Emitter();

emtr.on('greet', function () {
  console.log('Event Received');
  console.log('Hey there Hello');
});

emtr.on('greet', function () {
  console.log('Event Received');
  console.log('Oo la la la lu le o')
});


utils.randomEventGenerator(function () {
  emtr.emit('greet');
});
