const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.setEncoding('utf-8');

  conn.on('data', (data) => {
    console.log(data)
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: KIP');
  });

  return conn;
};

module.exports = connect;