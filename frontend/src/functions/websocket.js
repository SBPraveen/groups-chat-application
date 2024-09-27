import { v4 as uuidv4 } from 'uuid';

let ws, nameUser

export const initiateWebSocketConnection = (userName, roomId, setIsConnected, chatData, setChatData, setServerId) => {
    try {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        ws = new WebSocket(randomNumber%2===0 ? "ws://localhost:8080": "ws://localhost:8081")

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
            if(message.action === "serverDetails"){
                setServerId(message.serverId)
            }
            else{
                setChatData(chatData => [...chatData, message])
            }     
        });
        return true
    } catch (error) {
        console.error("Error while establishing connection with the websocket server")
        return false
    }
}

export const webSocketSendMessage = (messageObj) => {
    try {
        ws.send(JSON.stringify(messageObj))
    } catch (error) {
        console.log("Error while sending the message to the websocket server");
    }
}

export const webSocketCloseConnection = (setChatData, setUserName, setRoomId) => {
    try {
        ws.close()
        setChatData([]) 
        setUserName("") 
        setRoomId("")
    } catch (error) {
        console.log("Error while sending the message to the websocket server");
    }
}

