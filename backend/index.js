import { WebSocketServer } from "ws";
import handleMessage from "./websocketFunctions/handle-message.js";
import handleConnectionTermination from "./websocketFunctions/handle-connection-termination.js";
import { v4 as uuidv4 } from "uuid";
import config from "./config.js";
import {initializeRedisPubsub,} from "./redisFunctions/index.js";

const serverId = uuidv4();

try {
  const wss = new WebSocketServer({ port: config.serverPort });

  //Create redis client
  const redisClient = await initializeRedisPubsub();

  //Used to store the user's websocket connection and their associated rooms
  let sessionStoreRooms = new Map();

  //Used to store redis pub-sub clients corresponding to the room ids
  let sessionStoreRedis = new Map()

  wss.on("connection", function connection(ws) {
    ws.on("error", console.error);
    ws.send(
      JSON.stringify({ action: "serverDetails", serverId: serverId + "" })
    );
    ws.on("message", function message(data) {
      handleMessage(data, ws, sessionStoreRooms, redisClient, sessionStoreRedis, serverId);
    });

    ws.on("close", function () {
      handleConnectionTermination(ws, sessionStoreRooms, sessionStoreRedis, redisClient, serverId);
    });
  });
  console.log("Web socket server started successfully at port ", config.serverPort);
} catch (error) {
  console.error("Error while starting the web socket server", error);
}
