FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

# Install dependencies cleanly
RUN npm ci --omit=dev

# Force vulnerable transitive dependency update
RUN npm install tar@latest --save-exact

COPY . .

# Create non-root user
RUN addgroup -S nodejs && adduser -S nodeuser -G nodejs

RUN chown -R nodeuser:nodejs /usr/src/app

USER nodeuser

EXPOSE 3000

CMD ["node", "app.js"]
