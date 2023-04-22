const { key1Chat, key2Chat, key3Chat, key4Chat, wBind, aBind, sBind, dBind, exitBind } = require("./constants");

let connection;

// Stores the active TCP connection object.
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

// Capture key inputs
const handleUserInput = function(key) {
  if (key === '1') {
    connection.write(key1Chat);
  }
  if (key === '2') {
    connection.write(key2Chat);
  }
  if (key === '3') {
    connection.write(key3Chat);
  }
  if (key === '4') {
    connection.write(key4Chat);
  }
  if (key === 'w') {
    connection.write(wBind);
  }
  if (key === 'a') {
    connection.write(aBind);
  }
  if (key === 's') {
    connection.write(sBind);
  }
  if (key === 'd') {
    connection.write(dBind);
  }
  if (key === exitBind) {
    // Capture Ctrl+C and output following message and terminate the game
    process.stdout.write('\nYou quit the game!\n');
    process.exit();
  }
};

module.exports = { setupInput };