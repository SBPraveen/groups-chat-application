import config from '../config.js'
import { createClient } from 'redis';

export const initializeRedisPubsub = async (wrappedServerConsole) => {
    let redisPublisher
    try {
        redisPublisher = createClient({ url: config.redisClientUrl })
        await redisPublisher.connect();
        redisPublisher.on('error', error => wrappedServerConsole.error(`Error creating redis publisher client: ${error}`));
    }
    catch (error) {
        console.error(`Error creating redis publisher client: ${error}`)
        throw new Error('InitializeRedisPubsub Failed')
    }
    return redisPublisher
}