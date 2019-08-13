var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an Event handler
var myEventHandler = function(){
    console.log('I hear scream!');

}

//Assign the eventhandler to an event
eventEmitter.on('scream',myEventHandler);

//Fire the scream
eventEmitter.emit('scream');