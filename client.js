const net = require('net');
const { IP, PORT } = require("./constants");


const connect = function() {
  // conn is the communication line to tbe server
  const conn = net.createConnection({
    host: IP,
    port: PORT
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