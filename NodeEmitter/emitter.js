function Emitter() {
  this.events = {};
}

Emitter.prototype.on = function(eventType, listener ){
  console.log('Registering an event of type :', eventType);
  this.events[eventType] = this.events[eventType] || [];
  this.events[eventType].push(listener);
};

Emitter.prototype.emit = function(eventType){
  console.log('Emitting an event of type :', eventType);
  this.events[eventType].forEach( function(item) {
      item();
  });
};

module.exports = Emitter;
