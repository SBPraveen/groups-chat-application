import handleBroadcast from "../websocketFunctions/handle-broadcast.js";

const handleRedisPubSubMessage = (message, serverId, sessionStoreRooms) => {
  const parsedData = JSON.parse(message);
  //Publish the message received from the redis pubsub to all the users in the room
  if (parsedData.serverId !== serverId) {
    handleBroadcast({ parsedData, sessionStoreRooms, isRedisPubsub: true });
  }
};
export const subscribeChannel = async (params) => {
  const { channelName, redisClient, serverId, sessionStoreRooms } = params;
  try {
    if (channelName) {
      const redisSubscriber = redisClient.duplicate();
      redisSubscriber.on("error", (error) =>
        console.error(`Error during the creation of redis subscriber: ${error}`)
      );
      await redisSubscriber.connect();
      await redisSubscriber.subscribe(channelName, (message) =>
        handleRedisPubSubMessage(message, serverId, sessionStoreRooms)
      );
      return redisSubscriber;
    }
  } catch (error) {
    console.error(`Error while subscribing to the channel: ${error}`);
    throw new Error("SubscribeChannel Failed");
  }
};
