FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY .env ./

RUN export $(cat .env | xargs)

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]



