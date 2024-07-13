import { Box, Stack } from '@mui/material'
import React, { useState } from 'react'
import style from '../../style/chat.js'
import SingleChat from './SingleChat.js'
import IconButton from '../IconButton.js';
import SendIcon from '@mui/icons-material/Send';
import { webSocketSendMessage } from '../../functions/websocket.js';
import { v4 as uuidv4 } from 'uuid';

const Chat = ({chatData, userName, setChatData}) => {
    const [chatMessageData, setChatMessageData] = useState("")

    const handleSendMessageData = () => {
        const messageObj = { "action": "broadcast", "message": chatMessageData, timeStamp: Date.now(), userName, msgId:uuidv4()}
        webSocketSendMessage(messageObj)
        setChatMessageData("")
        setChatData([...JSON.parse(JSON.stringify(chatData)), messageObj])
    }
    return (
        <Box sx={style.chatComponent}>
            <Box sx={style.chatMessages}>
                <Stack direction="column" spacing={3} sx={style.stack}>
                    {
                        chatData&&chatData.map((chat) => (
                             <SingleChat chat={chat} userName={userName} key={chat.id}/>                       
                        ))
                    }

                </Stack>
            </Box>
            <Box sx={style.chatInput}>
            <textarea placeholder="Message" value={chatMessageData} onChange={(e) => setChatMessageData(e.target.value)} style={style.chatTextArea} rows="4" cols="50" />
                <Box sx={{height: "90%",width: "20%",display:"flex", alignItems:"center", justifyContent:"center"}}>
                <IconButton Icon={() => <SendIcon />} buttonName={"Send"} iconColor={"success.main"} handleSubmit={handleSendMessageData} isLoading={false} />
                </Box>
            </Box>
        </Box>
    )
}

export default Chat