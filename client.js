const net = require('net');
const { IP, PORT, endMessage, connectMessage, closeMessage, playerName } = require("./constants");


const connect = function() {
  // conn is the communication line to tbe server
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf-8');

  // On server send data
  conn.on('data', (data) => {
    console.log(data);
    console.log(endMessage);
  });

  // On server connect
  conn.on('connect', () => {
    console.log(connectMessage);
    conn.write(playerName);
  });

  // On server close or disconnect player
  conn.on('close', () => {
    console.log(closeMessage);
    process.exit();
  });

  return conn;
};

module.exports = { connect };