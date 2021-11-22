FROM node:12-alpine
ENV NODE_ENV=development

LABEL author="Eduardo Avila"
LABEL version="1.0"


WORKDIR /usr/src/app
COPY . .
RUN yarn set version berry

RUN yarn

ENV PORT=8080
ENV PORT_SERVER=8081

ENV HOST=0.0.0.0
EXPOSE 8080 8081 8545
 
# VOLUME ["/usr/src/app"]

CMD ["npm","run","dev"]