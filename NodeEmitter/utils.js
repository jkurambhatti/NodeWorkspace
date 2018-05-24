function randomDelay() {
  return Math.floor(Math.random() * 10000);
}

function randomEventGenerator(eventEmitterFn) {
  let delay = randomDelay();
  console.log('Firing event in ' + delay + ' ms');
  setTimeout(eventEmitterFn,  delay);
}

module.exports = {
  randomEventGenerator
};
