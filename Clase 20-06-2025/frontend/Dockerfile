# Base image for Node.js to build the frontend
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend code
COPY . .

# Build the frontend
RUN npm run build

# Install a lightweight HTTP server to serve the production build
RUN npm install -g serve

# Set the default command to serve the build directory
CMD ["serve", "-s", "dist"]

EXPOSE 3000