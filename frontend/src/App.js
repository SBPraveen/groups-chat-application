import { Box, Typography } from '@mui/material'
import './style/app.css'
import style from './style/app.js'
import { ReactComponent as Icon } from './images/icon.svg'
import CustomTextField from './components/CustomTextField.js';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import IconButton from './components/IconButton.js';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import { initiateWebSocketConnection, webSocketCloseConnection } from './functions/websocket.js';
import Chat from './components/Chat/index.js';
import CircleIcon from '@mui/icons-material/Circle';

function App() {

  const [userName, setUserName] = useState("")
  const [roomId, setRoomId] = useState("")
  const [isConnected, setIsConnected] = useState(false)
  const [isWssConnectionError, setIsWssConnectionError] = useState(false)
  const [isJoinLoading, setIsJoinLoading] = useState(false)
  const [isExitLoading, setIsExitLoading] = useState(false)
  const [serverId, setServerId] = useState("")
  const [chatData, setChatData] = useState([])

  const handleJoinRoom = () => {
    setIsJoinLoading(true)
    setIsWssConnectionError(false)
    const isWssConnected = initiateWebSocketConnection(userName, roomId, setIsConnected, chatData, setChatData, setServerId)
    if (isWssConnected) {
      setIsConnected(true)
    }
    else {
      setIsConnected(false)
      setIsWssConnectionError(true)
    }
    setIsJoinLoading(false)
  }

  const handleExitRoom = () => {
    setIsExitLoading(true)
    webSocketCloseConnection()
    setIsExitLoading(false)
  }

  return (
    <div className="App">
      <Box sx={style.body}>
        <Box sx={style.header}>
          <Icon />
        </Box>
        <Grid container spacing={1} sx={style.form}>
          <Grid item xs={3} sx={style.gridItemStart}>
            <CustomTextField placeholder={"Username"} setState={setUserName} />
          </Grid>
          <Grid item xs={3} sx={style.gridItem}>
            <CustomTextField placeholder={"Room id"} setState={setRoomId} />
          </Grid>
          <Grid item xs={1} sx={style.gridItemStart}>
            <IconButton Icon={() => <FlightTakeoffIcon />} buttonName={"Join"} iconColor={"success.main"} handleSubmit={handleJoinRoom} isLoading={isJoinLoading} />
          </Grid>
          <Grid item xs={3} sx={style.gridItem}>
            <IconButton Icon={() => <FlightLandIcon />} buttonName={"Exit"} iconColor={"fail.main"} handleSubmit={handleExitRoom} isLoading={isExitLoading} />
          </Grid>
        </Grid>
        <Box sx={style.chatBody}>
          <Chat chatData={chatData} userName={userName} setChatData={setChatData} />
        </Box>
        <Box sx={{ width: "100%", height: "3%",display:"flex", alignItems:"center", justifyContent:"flex-end" }}>
          {isConnected &&
            <Box>
              <CircleIcon sx={{color:"success.main", fontSize:"10px"}}/>
              <Typography variant="caption" sx={{ color: "text.disabled", marginRight:"1vw" }}>{` Connected. Room-ID: ${roomId} Server-ID : ${serverId} `}</Typography>
            </Box>
          }
        </Box>
      </Box>
    </div>
  );
}

export default App;
