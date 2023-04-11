FROM node:17

LABEL author="Eduardo Avila"
LABEL version="1.0"

RUN apt-get update && apt-get install -y python

WORKDIR /usr/src/app
COPY package.json yarn.lock ./

RUN yarn set version berry

RUN yarn
