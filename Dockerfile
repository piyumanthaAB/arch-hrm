# Base image
FROM node:alpine

# Set working directory
WORKDIR /app/server

# Copy package.json and package-lock.json
COPY server/package*.json /

# Install dependencies
RUN npm install

# Copy the client-side code to the working directory
COPY client/ ../client/

# # Copy the server-side code to the working directory
COPY server/ ./

# Build the client-side code
RUN cd ../client && npm install && npm run build

EXPOSE 80

ENV NODE_ENV=production
# environment will be defined in the AppService. 
# for the production app, NODE_ENV=production
# for the production test app, NODE_ENV=test_production
ENV PORT=80

# Run the app
CMD ["npm", "start"]