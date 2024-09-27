import handleBroadcast from "./handle-broadcast.js"
import {subscribeChannel} from "../redisFunctions/index.js"

const handleJoinRoom = async (parsedData, ws, sessionStoreRooms, redisClient, sessionStoreRedis, serverId) => {
    const {roomId, userName} = parsedData

    //Storing the roomId and the userName as a part of the web-socket connection
    ws.roomId = roomId
    ws.userName = userName

    let roomUsers = sessionStoreRooms.get(roomId)

    if(roomUsers){
        roomUsers.set(userName, ws)
    }
    else {
        const newRoom = new Map()
        newRoom.set(userName, ws)
        sessionStoreRooms.set(roomId, newRoom)

        //Server subscribes to the redis pubsub channel(named room-id) and stores the redisSubscriber to a map data structure
        const params = { channelName: roomId, redisClient, serverId, sessionStoreRooms }
        const redisSubscriber = await subscribeChannel(params)
        sessionStoreRedis.set(roomId, redisSubscriber)
    }

    //Inform other users in the room about the new user
    handleBroadcast({parsedData, ws, sessionStoreRooms, channelName:roomId, redisClient, serverId})
}

export default handleJoinRoom
