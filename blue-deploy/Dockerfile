FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --omit=dev && \
    npm cache clean --force

COPY . .

RUN addgroup -S nodejs && \
    adduser -S nodeuser -G nodejs

RUN chown -R nodeuser:nodejs /usr/src/app

USER nodeuser

EXPOSE 3000

CMD ["node", "app.js"]
