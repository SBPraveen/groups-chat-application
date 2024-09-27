import "dotenv/config";

const config = {
  redisClientUrl: process.env.REDIS_CLIENT_URL,
  serverPort: 8081,
};

export default config;