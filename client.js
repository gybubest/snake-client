const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', data => console.log('Server says: ', data));
  conn.on('connect', () => {
    console.log('Successfully connected to game server')
    conn.write('Name: YG');
    // const move = setInterval(() => conn.write('Move: left'), 50);
    // setTimeout(() => clearInterval(move), 5000);
  });
  return conn;
}

module.exports = connect;