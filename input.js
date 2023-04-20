let connection;

// Stores the active TCP connection object.
const setupInput = function (conn) {
  // let connection contain conn connection
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  if (key === '\u0003') {
    // Capture Ctrl+C and output following message and terminate the game
    process.stdout.write('\nYou quit the game!\n');
    process.exit();
  }
};

module.exports = { setupInput };