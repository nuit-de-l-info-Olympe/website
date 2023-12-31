# Dockerfile

# Use node alpine as it's a small node image
FROM node:20-alpine

# Set /app as the working directory
WORKDIR /app

# Copy package.json and package-lock.json
# to the /app working directory
COPY package*.json ./

# Install dependencies in /app
RUN npm install

# Copy the rest of our Next.js folder into /app
COPY . .

# Ensure port 3000 is accessible to our system
# EXPOSE 3000
EXPOSE 8086

# Run yarn dev, as we would via the command line 
CMD npm run dev