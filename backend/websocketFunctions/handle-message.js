import handleBroadcast from "./handle-broadcast.js"
import handleJoinRoom from "./handle-join-room.js"

const handleMessage = async(data, ws, sessionStoreRooms, redisClient, sessionStoreRedis, serverId) => {
    
    // converting the data from buffer to string 
    const stringifiedData = data.toString()
    // converting the data from string to object
    const parsedData = JSON.parse(stringifiedData)

    if(parsedData.action === "joinRoom"){
        await handleJoinRoom(parsedData, ws, sessionStoreRooms, redisClient, sessionStoreRedis, serverId)
    }
    else if(parsedData.action === "broadcast"){
        handleBroadcast({parsedData, ws, sessionStoreRooms, channelName:ws.roomId, redisClient, serverId})
    }
}

export default handleMessage