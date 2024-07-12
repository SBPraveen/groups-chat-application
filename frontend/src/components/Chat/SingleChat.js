import { Box, Typography } from '@mui/material'
import React from 'react'
import style from '../../style/chat'
import timeStampConvert from '../../functions/timestampConvert'

const SingleChat = ({ chat, userName }) => {
    return (
        <Box sx={style.singleChat}>
            {chat.action === "broadcast" ?
                <Box sx={style.chatBroadcast}>
                    <Box>
                        <Box>
                            <Typography variant='body2' sx={userName === chat.userName ? { color: "success.main" } : { color: "fail.main" }}>{chat.userName}</Typography>
                        </Box>
                        <Box>
                            <Box>
                                <Typography variant='body2' sx={userName === chat.userName ? { color: "success.main" } : { color: "fail.main" }}>{chat.message}</Typography>
                            </Box>
                            <Box>
                                <Typography variant='body2' sx={userName === chat.userName ? { color: "success.main" } : { color: "fail.main" }}>{timeStampConvert(chat.timestamp)}</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                :
                <Box sx={style.chatJoinRoom}>
                    <Typography variant='body2' sx={style.chatJoinRoomTypography}>{`${chat.userName} joined`}</Typography>
                </Box>

            }
        </Box>
    )
}

export default SingleChat