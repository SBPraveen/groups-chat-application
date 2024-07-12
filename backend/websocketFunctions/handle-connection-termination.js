const handleConnectionTermination = (ws, sessionStoreRooms) => {
    const room = sessionStoreRooms.get(ws.roomId)

    //If the room has just one member and that member also leaves then remove the roomId from the sessionStoreRooms. NOTE: room.keys() returns a Map Iterator and it has to be converted to an array to find its length.
    if(Array.from(room.keys()).length === 1){
        sessionStoreRooms.delete(ws.roomId)
    }
    //If the room has multiple members then delete only that member from  that room
    else{
        room.delete(ws.userName)
    }
    console.log(sessionStoreRooms);
}

export default handleConnectionTermination