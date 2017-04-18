var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = () => {
  console.log("Connection Successful");

  eventEmitter.emit("data_received");
}

eventEmitter.on("connection", connectHandler);

eventEmitter.on('data_received', () => {
  console.log("Data Received");
});

eventEmitter.emit("connection");

console.log("Program has ended");

