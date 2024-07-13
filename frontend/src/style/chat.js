const style = {
    chatComponent: {
        width: "80%",
        height: "100%",
        bgcolor: "primary.light",
        borderRadius: "21px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-around"
    },
    chatMessages: {
        height: "75%",
        width: "100%",
        overflowY: "auto",
        overflowX: "hidden",
        padding: "20px 0",
        '&::-webkit-scrollbar': {
            width: '5px',

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
        width: "100%"
    },
    singleChat: {
        width: "100%",
        height: "100%",
        display:"flex",
    },
    chatBroadcast: {
        width: "40%",
        maxWidth: "33vw",
        bgcolor: "secondary.main",
        borderRadius: "8px",
        display: "flex",
        flexDirection: 'column',
        overflow: 'hidden',
        maxHeight: "50vh",
        margin: "0 30px",
    },
    chatJoinRoom: {
        width: "100%",
        height: "3vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    chatJoinRoomTypography: {
        color: "text.disabled"
    },
    chatTimestamp: {
        display: "flex",
        width: "15%",
        alignItems: "flex-end",
        justifyContent: "center"
    },
    chatMessageText: {
        color: "text.main",
        margin: "0"
    },
    singleChatContainer: {
        width: "calc(100%-10px)",
        height: "calc(100%-2vh)",
        flexGrow: 1,
        overflow: 'hidden',
        marginLeft: "10px",
        marginTop: "1vh",
        marginBottom: "1vh"
    },
    chatMessageTimeSection: {
        display: "flex",
        height: "calc(80% - 5px)",
        marginTop: "5px"
    },
    chatInput: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "13%",
        width: "98%",
        margin:"0 1%",
        bgcolor:"secondary.main",
        borderRadius:"12px",
    },
    chatTextArea: {
        height: "75%",
        width: "80%",
        outline: "none",
        border: "none",
        overflow: "hidden",
        resize: "none",
        fontFamily: 'Nunito, Arial, sans-serif',
        color:"white", 
        paddingLeft:"1vw",
        background:"transparent"
    }
}

export default style