const style = {
    chatComponent: {
        width:"80%",
        height:"100%",
        bgcolor:"primary.light",
        borderRadius:"21px"
    },
    chatMessages: {
        background:"yellow",
        height: "80%", 
        width: "100%", 
        overflowY: "auto", 
        overflowX: "hidden", 
        '&::-webkit-scrollbar': {
            width: '8px',

        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: "transparent",
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'success.main',
            borderRadius: '3px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'success.main',
        },
        '*': {
            scrollbarWidth: 'thin',
            scrollbarColor: 'success.main',
        },
    },
    stack: {
        background:"pink",
        width:"100%"
    },
    singleChat:{
        width:"100%",
        height:"100%",
        background:"blue"
    },
    chatBroadcast:{
        width:"100%",
        height:"6vh",
        background:"violet"
    },
    chatJoinRoom:{
        width:"100%",
        height:"3vh",
        background:"orange",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
    chatJoinRoomTypography:{
        color: "text.disabled"
    }
}

export default style