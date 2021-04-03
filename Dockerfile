FROM node:14-alpine
LABEL maintainer="Julio Cesar <julio@blackdevs.com.br>"

WORKDIR /app

COPY ./package.json ./yarn.lock ./
RUN yarn install

COPY . .

CMD ["yarn", "start"]
