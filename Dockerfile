FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

COPY .env ./

RUN export $(cat .env | xargs)

EXPOSE 8080

CMD [ "npm", "start" ]



