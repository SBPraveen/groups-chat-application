import { Box, Stack } from '@mui/material'
import React from 'react'
import style from '../../style/chat.js'
import SingleChat from './SingleChat.js'

const Chat = ({chatData, userName}) => {
    return (
        <Box sx={style.chatComponent}>
            <Box sx={style.chatMessages}>
                <Stack direction="column" spacing={4} sx={style.stack}>
                    {
                        chatData&&chatData.map((chat) => (
                             <SingleChat chat={chat} userName={userName}/>                       
                        ))
                    }

                </Stack>
            </Box>
            <Box sx={style.chatInput}>
                bottom
            </Box>
        </Box>
    )
}

export default Chat