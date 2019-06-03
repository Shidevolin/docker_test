FROM node:8

WORKDIR /app

RUN npm install express

EXPOSE 8080

CMD ["node", "index.js"]