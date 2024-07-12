import { v4 as uuidv4 } from 'uuid';

let ws, nameUser

export const initiateWebSocketConnection = (userName, roomId, setIsConnected, chatData, setChatData) => {
    try {
        ws = new WebSocket("ws://localhost:8080")

        nameUser=userName

        ws.addEventListener("open", () => {
            setIsConnected(true)
            const message = { "action": "joinRoom", "roomId": roomId, "userName": userName, timeStamp: Date.now(), msgId:uuidv4() }
            ws.send(JSON.stringify(message))
        });

        ws.addEventListener("error", (event) => {
            setIsConnected(false)
            console.log("WebSocket error: ", event);
            ws.close()
        });

        //Server triggers a connection close
        ws.addEventListener("close", (event) => {
            setIsConnected(false)
            ws.close()
        });

        ws.addEventListener("message", (event) => {
            let message = JSON.parse(event.data)
            let tempChatData = JSON.parse(JSON.stringify(chatData))
            setChatData([...tempChatData, message])
        });
        return true
    } catch (error) {
        console.error("Error while establishing connection with the websocket server")
        return false
    }
}

export const webSocketSendMessage = (message) => {
    try {
        const messageObj = { "action": "broadcast", "message": message, timeStamp: Date.now(), userName: nameUser, msgId:uuidv4()}
        ws.send(JSON.stringify(messageObj))
    } catch (error) {
        console.log("Error while sending the message to the websocket server");
    }
}

export const webSocketCloseConnection = (message) => {
    try {
        ws.close()
    } catch (error) {
        console.log("Error while sending the message to the websocket server");
    }
}

