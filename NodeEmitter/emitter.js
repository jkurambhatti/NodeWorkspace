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
  if (this.events[eventType]) {
    this.events[eventType].forEach( function(handler) {
        handler();
    });
  } else {
    console.log('No Event handler registered for :' , eventType);
  }
};

module.exports = Emitter;
