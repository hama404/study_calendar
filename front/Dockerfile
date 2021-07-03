FROM node:12.16.1

WORKDIR /usr/src/app

COPY ./react/package.json ./
COPY ./react/yarn.lock ./

RUN yarn install
COPY ./react /usr/src/app

CMD [ "yarn", "start" ]