const net = require('net');

const connect = function() {
  // conn is the communication line to tbe server
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.setEncoding('utf-8');

  conn.on('data', (data) => {
    console.log(data)
  });

  // On server connect
  conn.on('connect', () => {
    console.log('Successfully connected to the game server!');
    conn.write('Name: KIP');
  });

  // On server close
  conn.on('close', () => {
    console.log('You have been disconnected from the game server!');
  });

  return conn;
};

module.exports = { connect };