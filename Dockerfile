# # Use Node.js base image
# FROM node:alpine

# # Set the working directory in the container
# WORKDIR /app

# # Copy package.json and package-lock.json first to install dependencies
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the app's source code into the container
# COPY . .

# # Exposing the PORT
# EXPOSE 5173

# # Start the server
# CMD ["npm", "run", "dev"]


# ----------- STAGE 1: Build Frontend with Vite -----------
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files for better layer caching
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the Vite app
RUN npm run build


# ----------- STAGE 2: Serve with NGINX -----------
FROM docker.io/library/nginx:alpine

# Remove default static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built dist from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config for React Router support
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
