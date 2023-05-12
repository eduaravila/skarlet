FROM node:16.14.2

LABEL author="Eduardo Avila"
LABEL version="1.0"

RUN apt-get update && apt-get install -y python

WORKDIR /usr/src/app
COPY package.json package-lock.json ./

RUN npm i
