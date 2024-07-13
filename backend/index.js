import { WebSocketServer } from 'ws';
import handleMessage from './websocketFunctions/handle-message.js';
import handleConnectionTermination from './websocketFunctions/handle-connection-termination.js';
import { v4 as uuidv4 } from 'uuid';


const port = 8080
const serverId = uuidv4()

try {
  const wss = new WebSocketServer({ port });

  //Used to store the  user and their associated rooms
  let sessionStoreRooms = new Map()

  wss.on('connection', function connection(ws) {
    ws.on('error', console.error);
    ws.send(JSON.stringify({"action":"serverDetails","serverId":serverId+""}))
    ws.on('message', function message(data) {
      handleMessage(data, ws, sessionStoreRooms)
    });

    ws.on("close", function () {
      handleConnectionTermination(ws, sessionStoreRooms)
    })
  });

  console.log("Web socket server started successfully at port ", port)

} catch (error) {
  console.error("Error while starting the web socket server")
}


