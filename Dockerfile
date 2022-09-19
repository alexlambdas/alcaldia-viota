FROM node:14.16.0-alpine3.10

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

RUN mkdir -p /home/node/app/build && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY . .

USER node

RUN npm install --only=prod

RUN npm run build

EXPOSE 3000

CMD [ "node", "index.js" ]