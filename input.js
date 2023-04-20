const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    // Capture Ctrl+C and output following message and terminate the game
    process.stdout.write('\nYou quit the game!\n');
    process.exit();
  }
};

module.exports = setupInput;