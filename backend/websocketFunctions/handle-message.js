import handleBroadcast from "./handle-broadcast.js"
import handleJoinRoom from "./handle-join-room.js"

const handleMessage = (data, ws, sessionStoreRooms) => {
    
    // converting the data from buffer to string 
    const stringifiedData = data .toString()
    // converting the data from string to object
    const parsedData = JSON.parse(stringifiedData)

    if(parsedData.action === "joinRoom"){
        handleJoinRoom(parsedData, ws, sessionStoreRooms)
    }
    else if(parsedData.action === "broadcast"){
        handleBroadcast(parsedData, ws, sessionStoreRooms)
    }
}

export default handleMessage