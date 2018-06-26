FROM node:8

WORKDIR /scraper
COPY package*.json /scraper/
RUN npm install
COPY . /scraper/
CMD node app.js
