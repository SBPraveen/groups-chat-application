# node 20.10.0
FROM public.ecr.aws/docker/library/node:20.10.0-buster-slim

# Create a working directory
RUN mkdir /home/node/app/

# Change working directory
WORKDIR /home/node/app/

# Copy package.json file
COPY package.json .

# Install dependencies
RUN yarn install --network-timeout 1000000

# Copy all source code
COPY . .

# Expose API port to the outside
EXPOSE 8080
EXPOSE 6379

# Launch application
ENTRYPOINT ["yarn", "start"]