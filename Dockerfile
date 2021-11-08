FROM node:12-alpine
ENV NODE_ENV=development

WORKDIR /usr/src/app
COPY . .
RUN yarn set version berry

RUN yarn

ENV PORT=8080
ENV HOST=0.0.0.0
EXPOSE 8080

VOLUME . /usr/src/app

CMD ["npm","run","dev"]