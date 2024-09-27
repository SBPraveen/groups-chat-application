import { publishMessage } from "../redisFunctions/index.js";

const handleBroadcast = async (params) => {
  const { parsedData, sessionStoreRooms } = params;
  let roomId, userName;
  const ws = params.ws;
  if (ws) {
    roomId = ws.roomId;
    userName = ws.userName;
  } else {
    roomId = parsedData.roomId;
    userName = parsedData.userName;
  }

  const room = sessionStoreRooms.get(roomId);
  const users = room?.keys() ? room?.keys() : [];
  for (let user of users) {
    if (user !== userName) {
      const userWsConnection = room.get(user);
      userWsConnection.send(JSON.stringify(parsedData));
    }
  }

  if (!params.isRedisPubsub) {
    //publish the message to redis pubsub
    const publishParams = { channelName:params.channelName, parsedData, redisClient:params.redisClient, serverId:params.serverId };
    await publishMessage(publishParams);
  }
};

export default handleBroadcast;
