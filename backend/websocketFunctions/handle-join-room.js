import handleBroadcast from "./handle-broadcast.js"

const handleJoinRoom = (parsedData, ws, sessionStoreRooms) => {
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
    }

    //Inform other users in the room about the new user
    handleBroadcast(parsedData, ws, sessionStoreRooms)
}

export default handleJoinRoom