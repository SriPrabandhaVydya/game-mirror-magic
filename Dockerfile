
# Use Node.js as the base image
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all files
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy the built app to nginx server
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config to change the default port from 80 to 81
RUN sed -i 's/listen\s*80;/listen 81;/g' /etc/nginx/conf.d/default.conf

# Expose port 81 (container port)
EXPOSE 81

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
