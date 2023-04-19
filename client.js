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
/*    setInterval(function(){
      conn.write('Move: up');
      conn.write('Move: up');
      conn.write('Move: left');
      conn.write('Move: left');
      conn.write('Move: down');
      conn.write('Move: down');
      conn.write('Move: right');
      conn.write('Move: right');
    }, 50)   
*/  
    
  });

  return conn;
};

module.exports = connect;