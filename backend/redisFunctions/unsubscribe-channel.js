export const unsubscribeChannel = async (params) => {
    const { channelName, redisSubscriber } = params
    try {
        if (channelName) {
            await redisSubscriber.unsubscribe(channelName)
            await redisSubscriber.quit()
        }
    }
    catch (error) {
        console.error(`Error while unsubscribing to the channel: ${error}`)
        throw new Error('UnsubscribeChannel Failed')
    }
}