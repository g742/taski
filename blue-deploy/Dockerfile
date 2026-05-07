# Use a smaller and more secure official Node.js image
FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy dependency files first
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev && \
    npm cache clean --force

# Copy app source
COPY . .

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Change ownership
RUN chown -R appuser:appgroup /usr/src/app

# Run as non-root user
USER appuser

# Expose application port
EXPOSE 3000

# Optional healthcheck
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000', (r) => process.exit(r.statusCode === 200 ? 0 : 1)).on('error', () => process.exit(1))"

# Start application
CMD ["node", "app.js"]
