export const publishMessage = async (params) => {
    const { channelName, parsedData, redisClient, serverId } = params
    try {
        if (channelName && parsedData) {
            const stringifiedMessage = JSON.stringify({...parsedData, serverId})
            await redisClient.publish(channelName, stringifiedMessage)
        }
    }
    catch (error) {
        console.error(`Error while publishing the message: ${error}`)
        throw new Error('PublishMessage Failed')
    }

}