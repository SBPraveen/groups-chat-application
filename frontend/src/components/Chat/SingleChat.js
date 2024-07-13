import { Box, Typography } from '@mui/material'
import React from 'react'
import style from '../../style/chat'
import timeStampConvert from '../../functions/timestampConvert'

const SingleChat = ({ chat, userName }) => {
    return (
        <Box sx={{...style.singleChat, justifyContent: userName === chat.userName ? "flex-end" : "flex-start"}}>
            {chat.action === "broadcast" ?
                <Box sx={style.chatBroadcast}>
                    <Box sx={style.singleChatContainer}>
                        <Box sx={{height:"20%"}}>
                            <Typography variant='body2' sx={userName === chat.userName ? { color: "success.main",  fontWeight: 600} : { color: "fail.main", fontWeight: 600}}>{chat.userName}</Typography>
                        </Box>
                        <Box sx={style.chatMessageTimeSection}>
                            <Box sx={{width:"85%"}}>
                                <Typography variant='subtitle1' sx={style.chatMessageText}>{chat.message}</Typography>
                            </Box>
                            <Box sx={style.chatTimestamp}>
                                <Typography variant="caption" sx={{ color: "text.disabled" }}>{timeStampConvert(chat.timeStamp)}</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                :
                <Box sx={style.chatJoinRoom}>
                    <Typography variant='body2' sx={style.chatJoinRoomTypography}>
                        {chat.action ==="joinRoom" ? `${chat.userName} joined`: `${chat.userName} left`}
                    </Typography>
                </Box>

            }
        </Box>
    )
}

export default SingleChat