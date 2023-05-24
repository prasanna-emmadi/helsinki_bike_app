# Use a lighter version of Node as a parent image
FROM node:18-alpine
# Set the working directory to /server
WORKDIR /server
# Copy the current directory contents into the container at /api
COPY . ./
# install dependencies
RUN npm install
# Make port 80 available to the world outside this container
EXPOSE 80
# Run the app when the container launches
CMD ["npm", "run", "docker:start"]