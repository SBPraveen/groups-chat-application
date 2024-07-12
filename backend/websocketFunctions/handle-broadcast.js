const handleBroadcast = (parsedData, ws, sessionStoreRooms) => {
    const { roomId, userName } = ws
    const room = sessionStoreRooms.get(roomId)
    const users = room.keys()
    for (let user of users) {
        if (user !== userName) {
            const userWsConnection = room.get(user)
            userWsConnection.send(JSON.stringify(parsedData))
        }
    }
}

export default handleBroadcast