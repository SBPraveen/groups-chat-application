import { WebSocketServer } from 'ws';
import handleMessage from './websocketFunctions/handle-message.js';
import handleConnectionTermination from './websocketFunctions/handle-connection-termination.js';

try {
  const wss = new WebSocketServer({ port: 8080 });

  //Used to store the  user and their associated rooms
  let sessionStoreRooms = new Map()

  wss.on('connection', function connection(ws) {
    ws.on('error', console.error);
    console.log("new Connection");
    ws.on('message', function message(data) {
      handleMessage(data, ws, sessionStoreRooms)
    });

    ws.on("close", function () {
      handleConnectionTermination(ws, sessionStoreRooms)
    })
  });

  console.log("Web socket server started successfully")

} catch (error) {
  console.error("Error while starting the web socket server")
}


