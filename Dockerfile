FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "build"]

EXPOSE 8000

CMD ["npm", "run", "dev"]