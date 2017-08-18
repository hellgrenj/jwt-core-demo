FROM node:8.2.1
WORKDIR /app/src
COPY package.json /app/src
RUN npm install
COPY . /app/src

EXPOSE 5002
CMD [ "npm", "start" ]