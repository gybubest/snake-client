const net = require('net');

const listOfClients = []

const addClientToList = (client) => {
  listOfClients.push(client)
}

const generateRandomId = () => Math.floor(Math.random() * 2000)

const broadcast = (listOfClients, message, id) => {
  console.log(id)
  for (const client of listOfClients) {
    if (client.id !== id) {
      client.write(message)
    }
  }
}

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
  return conn;
}

console.log('Connecting ...');
connect();