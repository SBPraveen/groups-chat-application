import { Box } from '@mui/material'
import './style/app.css'
import style from './style/app.js'
import { ReactComponent as Icon } from './images/icon.svg'
import CustomTextField from './components/CustomTextField.js';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import IconButton from './components/IconButton.js';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import {initiateWebSocketConnection, webSocketCloseConnection} from './functions/websocket.js';
import Chat from './components/Chat/index.js';

function App() {

  const [userName, setUserName] = useState("")
  const [roomId, setRoomId] = useState("")
  const [isConnected, setIsConnected] = useState(false)
  const [isWssConnectionError, setIsWssConnectionError] = useState(false)
  const [isJoinLoading, setIsJoinLoading] = useState(false)
  const [isExitLoading, setIsExitLoading] = useState(false)
  const [chatData, setChatData] = useState([{ "action": "broadcast", "message": "Hii 111", timeStamp: 1720818959180, userName:"yesbee", msgId:111111}, { "action": "joinRoom", "roomId": roomId, "userName": "naveen", timeStamp: 1720818959180, msgId:222222222},])

  const handleJoinRoom = () => {
    setIsJoinLoading(true)
    setIsWssConnectionError(false)
    const isWssConnected = initiateWebSocketConnection(userName, roomId, setIsConnected, chatData, setChatData)
    if(isWssConnected){
      setIsConnected(true)
    }
    else{
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
          <Chat chatData={chatData} userName={userName}/>
        </Box>
        <Box sx={{ width: "100%", height: "3%"}}>
          bottom
        </Box>
      </Box>
    </div>
  );
}

export default App;
