# Use a lighter version of Node as a parent image
FROM node:18-alpine
# Set the working directory to /webapp
WORKDIR /webapp
# copy package.json into the container at /webapp
COPY package*.json ./
# copy tsconfig.json
COPY tsconfig.json ./
# Copy local directories to the current local directory of our docker image (/app)
COPY ./src ./src
COPY ./public ./public

# Install node packages, install serve, build the app, and remove dependencies at the end
# ENTRYPOINT ["tail", "-f", "/dev/null"]

RUN npm install \
    && npm install -g serve \
    && npm run build \
    && rm -fr node_modules

EXPOSE 3000

# Start the app using serve command
CMD [ "serve", "-s", "build" ]
