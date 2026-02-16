FROM node:18-alpine

WORKDIR /app

# Use production env by default
ENV NODE_ENV=production

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production || npm install --production

# Copy app sources
COPY . .

# Expose port (backend uses PORT env)
EXPOSE 3001
ENV PORT=3001

CMD ["node", "src/server.js"]
