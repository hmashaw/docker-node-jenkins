# Base image
FROM node:6

# Create /app
WORKDIR /app

# Add files in 'this' directory to /app
ADD . /app

# Install node dependencies
RUN npm install

# Use port
EXPOSE 3000

# Launch 'npm start' on running container
CMD npm start