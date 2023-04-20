const net = require('net');
const connect = require('./client')

console.log('Connecting ...');
connect();

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);

  return stdin;
};

const handleUserInput = function (key) {
  process.stdout.write('.');
  if (key === '\u0003') {
    // Capture Ctrl+C and output following message and terminate the game
    process.stdout.write('\nYou quit the game!\n');
    process.exit();
  }
};

setupInput();