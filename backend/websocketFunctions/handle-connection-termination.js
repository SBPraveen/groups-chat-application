import handleBroadcast from "./handle-broadcast.js";
import { unsubscribeChannel } from "../redisFunctions/index.js";

const handleConnectionTermination = (
  ws,
  sessionStoreRooms,
  sessionStoreRedis,
  redisClient,
  serverId
) => {
  const roomId = ws.roomId;
  const room = sessionStoreRooms.get(roomId);

  //Inform other users in the room that the user had left
  const parsedData = {
    action: "userLeft",
    userName: ws.userName,
    roomId,
    userName: ws.userName,
  };
  handleBroadcast({
    parsedData,
    ws,
    sessionStoreRooms,
    channelName: roomId,
    redisClient,
    serverId,
  });

  //If the room has just one member and that member also leaves then remove the roomId from the sessionStoreRooms and also unsubscribe from the redis pubsub channel. NOTE: room.keys() returns a Map Iterator and it has to be converted to an array to find its length.
  if (room.keys() && Array.from(room.keys()).length === 1) {
    sessionStoreRooms.delete(roomId);
    const redisSubscriber = sessionStoreRedis.get(roomId);
    const params = { channelName: roomId, redisSubscriber };
    unsubscribeChannel(params);
  }
  //If the room has multiple members then delete only that member from  that room
  else {
    room.delete(ws.userName);
  }
};

export default handleConnectionTermination;
